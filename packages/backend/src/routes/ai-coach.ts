import express from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../lib/jwt';
import { aiChatSchema } from '../utils/validation';
import OpenAI from 'openai';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chat with AI coach
router.post('/chat', async (req: any, res: any) => {
  try {
    const validatedData = aiChatSchema.parse(req.body);
    
    // Save user message
    await prisma.aIChatMessage.create({
      data: {
        userId: req.user.userId,
        role: 'user',
        content: validatedData.message,
      }
    });

    // Get user's habit data for context
    const userHabits = await prisma.habit.findMany({
      where: { userId: req.user.userId },
      include: {
        habitLogs: {
          orderBy: { date: 'desc' },
          take: 30, // Last 30 days
        }
      }
    });

    // Get recent chat history
    const chatHistory = await prisma.aIChatMessage.findMany({
      where: { userId: req.user.userId },
      orderBy: { timestamp: 'desc' },
      take: 10,
    });

    // Prepare context for AI
    const habitContext = userHabits.map(habit => {
      const completionRate = habit.habitLogs.length > 0 
        ? (habit.habitLogs.filter(log => log.completed).length / habit.habitLogs.length) * 100 
        : 0;
      
      return {
        title: habit.title,
        completionRate: Math.round(completionRate),
        recentLogs: habit.habitLogs.slice(0, 7).map(log => ({
          date: log.date.toISOString().split('T')[0],
          completed: log.completed,
        }))
      };
    });

    const systemPrompt = `You are an AI habit coach for HabitPilot AI. You help users build better habits and stay motivated.

Current user data:
- Total habits: ${userHabits.length}
- Habits with completion data: ${habitContext.length}

Habit breakdown:
${habitContext.map(h => `- ${h.title}: ${h.completionRate}% completion rate`).join('\n')}

Recent chat history:
${chatHistory.slice(0, 5).reverse().map(msg => `${msg.role}: ${msg.content}`).join('\n')}

Your role:
1. Provide personalized habit improvement tips
2. Identify weak habits (low completion rate) and suggest improvements
3. Offer weekly planning suggestions
4. Be encouraging and motivational
5. Keep responses concise and actionable
6. Reference their actual habit data when relevant

Respond in a friendly, coaching tone. Be specific and practical in your advice.`;

    // Get AI response
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: validatedData.message }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0]?.message?.content || "I'm here to help you build better habits! Could you tell me more about what you'd like to work on?";

    // Save AI response
    await prisma.aIChatMessage.create({
      data: {
        userId: req.user.userId,
        role: 'assistant',
        content: aiResponse,
      }
    });

    res.json({ response: aiResponse });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: error.errors[0].message });
    }
    
    if (error.code === 'insufficient_quota') {
      return res.status(503).json({ error: 'AI service temporarily unavailable' });
    }
    
    console.error('AI Coach error:', error);
    res.status(500).json({ error: 'Failed to get AI response' });
  }
});

// Get chat history
router.get('/history', async (req: any, res: any) => {
  try {
    const { limit = 50 } = req.query;
    
    const messages = await prisma.aIChatMessage.findMany({
      where: { userId: req.user.userId },
      orderBy: { timestamp: 'desc' },
      take: parseInt(limit as string),
    });

    res.json({ messages: messages.reverse() });
  } catch (error) {
    console.error('Get chat history error:', error);
    res.status(500).json({ error: 'Failed to get chat history' });
  }
});

// Get AI insights and recommendations
router.get('/insights', async (req: any, res: any) => {
  try {
    const userHabits = await prisma.habit.findMany({
      where: { userId: req.user.userId },
      include: {
        habitLogs: {
          orderBy: { date: 'desc' },
          take: 30,
        }
      }
    });

    // Analyze habits and provide insights
    const insights = {
      strongHabits: [] as any[],
      weakHabits: [] as any[],
      recommendations: [] as string[],
      weeklyPlan: [] as string[],
    };

    userHabits.forEach(habit => {
      const completionRate = habit.habitLogs.length > 0 
        ? (habit.habitLogs.filter(log => log.completed).length / habit.habitLogs.length) * 100 
        : 0;

      const habitData = {
        id: habit.id,
        title: habit.title,
        completionRate: Math.round(completionRate),
        recentStreak: calculateRecentStreak(habit.habitLogs),
      };

      if (completionRate >= 80) {
        insights.strongHabits.push(habitData);
      } else if (completionRate < 50 && habit.habitLogs.length > 0) {
        insights.weakHabits.push(habitData);
      }
    });

    // Generate recommendations
    if (insights.weakHabits.length > 0) {
      insights.recommendations.push(`Focus on improving ${insights.weakHabits[0].title} - it has only ${insights.weakHabits[0].completionRate}% completion rate`);
    }

    if (insights.strongHabits.length > 0) {
      insights.recommendations.push(`Great job on ${insights.strongHabits[0].title}! Keep up the ${insights.strongHabits[0].completionRate}% consistency`);
    }

    // Generate weekly plan suggestions
    insights.weeklyPlan = [
      "Start your day with your most important habit",
      "Set reminders for habits you often forget",
      "Track your progress daily to stay motivated",
      "Celebrate small wins to build momentum"
    ];

    res.json({ insights });
  } catch (error) {
    console.error('Get insights error:', error);
    res.status(500).json({ error: 'Failed to get insights' });
  }
});

// Helper function to calculate recent streak
function calculateRecentStreak(logs: any[]): number {
  if (logs.length === 0) return 0;
  
  let streak = 0;
  for (const log of logs) {
    if (log.completed) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

export default router;
