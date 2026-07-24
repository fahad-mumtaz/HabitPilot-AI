import express from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../lib/jwt';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Get dashboard stats
router.get('/dashboard', async (req: any, res: any) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const monthAgo = new Date(today);
    monthAgo.setDate(monthAgo.getDate() - 30);

    // Get user's habits
    const habits = await prisma.habit.findMany({
      where: { userId: req.user.userId },
      include: {
        habitLogs: {
          where: {
            date: {
              gte: monthAgo,
            }
          }
        }
      }
    });

    // Calculate today's progress
    const todayLogs = await prisma.habitLog.findMany({
      where: {
        date: today,
        habit: { userId: req.user.userId }
      },
      include: {
        habit: true
      }
    });

    const totalHabits = habits.length;
    const completedToday = todayLogs.filter(log => log.completed).length;
    const todayProgress = totalHabits > 0 ? (completedToday / totalHabits) * 100 : 0;

    // Calculate weekly completion rate
    const weeklyLogs = await prisma.habitLog.findMany({
      where: {
        date: {
          gte: weekAgo,
        },
        habit: { userId: req.user.userId }
      }
    });

    const weeklyCompletion = weeklyLogs.filter(log => log.completed).length;
    const weeklyTotal = weeklyLogs.length;
    const weeklyCompletionRate = weeklyTotal > 0 ? (weeklyCompletion / weeklyTotal) * 100 : 0;

    // Calculate current streak
    const streak = await calculateStreak(req.user.userId);

    // Get habit completion rates
    const habitStats = habits.map(habit => {
      const completionRate = habit.habitLogs.length > 0 
        ? (habit.habitLogs.filter(log => log.completed).length / habit.habitLogs.length) * 100 
        : 0;
      
      return {
        id: habit.id,
        title: habit.title,
        completionRate,
        totalLogs: habit.habitLogs.length,
        completedLogs: habit.habitLogs.filter(log => log.completed).length,
      };
    });

    res.json({
      totalHabits,
      completedToday,
      todayProgress: Math.round(todayProgress),
      weeklyCompletionRate: Math.round(weeklyCompletionRate),
      currentStreak: streak,
      habitStats,
    });
  } catch (error) {
    console.error('Dashboard analytics error:', error);
    res.status(500).json({ error: 'Failed to get dashboard analytics' });
  }
});

// Get monthly progress data
router.get('/monthly', async (req: any, res: any) => {
  try {
    const { year, month } = req.query;
    
    const targetDate = new Date(`${year}-${month}-01`);
    const startDate = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1);
    const endDate = new Date(targetDate.getFullYear(), targetDate.getMonth() + 1, 0);

    const habits = await prisma.habit.findMany({
      where: { userId: req.user.userId },
      include: {
        habitLogs: {
          where: {
            date: {
              gte: startDate,
              lte: endDate,
            }
          },
          orderBy: { date: 'asc' }
        }
      }
    });

    // Create daily data for the month
    const dailyData = [];
    const daysInMonth = endDate.getDate();

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(targetDate.getFullYear(), targetDate.getMonth(), day);
      const dateStr = date.toISOString().split('T')[0];

      const dayLogs = habits.flatMap(habit => 
        habit.habitLogs.filter(log => 
          log.date.toISOString().split('T')[0] === dateStr
        )
      );

      const completed = dayLogs.filter(log => log.completed).length;
      const total = dayLogs.length;

      dailyData.push({
        date: dateStr,
        completed,
        total,
        completionRate: total > 0 ? (completed / total) * 100 : 0,
      });
    }

    // Habit breakdown
    const habitBreakdown = habits.map(habit => {
      const monthlyLogs = habit.habitLogs;
      const completed = monthlyLogs.filter(log => log.completed).length;
      const completionRate = monthlyLogs.length > 0 ? (completed / monthlyLogs.length) * 100 : 0;

      return {
        id: habit.id,
        title: habit.title,
        color: habit.color,
        completed,
        total: monthlyLogs.length,
        completionRate: Math.round(completionRate),
      };
    });

    res.json({
      dailyData,
      habitBreakdown,
      monthStats: {
        totalDays: daysInMonth,
        activeDays: dailyData.filter(d => d.total > 0).length,
        averageCompletionRate: Math.round(
          dailyData.reduce((sum, d) => sum + d.completionRate, 0) / daysInMonth
        ),
      }
    });
  } catch (error) {
    console.error('Monthly analytics error:', error);
    res.status(500).json({ error: 'Failed to get monthly analytics' });
  }
});

// Helper function to calculate streak
async function calculateStreak(userId: string): Promise<number> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const habits = await prisma.habit.findMany({
    where: { userId },
    include: {
      habitLogs: {
        where: {
          date: { lte: today }
        },
        orderBy: { date: 'desc' }
      }
    }
  });

  if (habits.length === 0) return 0;

  let streak = 0;
  let currentDate = new Date(today);

  while (true) {
    const dateStr = currentDate.toISOString().split('T')[0];
    
    const dayLogs = habits.flatMap(habit => 
      habit.habitLogs.filter(log => 
        log.date.toISOString().split('T')[0] === dateStr
      )
    );

    if (dayLogs.length === 0) {
      // No logs for this day, check if it's today (allow starting today)
      if (currentDate.getTime() === today.getTime()) {
        currentDate.setDate(currentDate.getDate() - 1);
        continue;
      }
      break;
    }

    const completed = dayLogs.filter(log => log.completed).length;
    const total = dayLogs.length;

    if (completed === total && total > 0) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
}

export default router;
