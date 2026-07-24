import express from 'express';
import { prisma } from '../lib/prisma';
import { authMiddleware } from '../lib/jwt';
import { createHabitSchema, updateHabitSchema, logHabitSchema } from '../utils/validation';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Get all habits for user
router.get('/', async (req: any, res: any) => {
  try {
    const habits = await prisma.habit.findMany({
      where: { userId: req.user.userId },
      include: {
        habitLogs: {
          orderBy: { date: 'desc' },
          take: 30, // Last 30 logs
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ habits });
  } catch (error) {
    console.error('Get habits error:', error);
    res.status(500).json({ error: 'Failed to get habits' });
  }
});

// Get single habit with logs
router.get('/:id', async (req: any, res: any) => {
  try {
    const habit = await prisma.habit.findFirst({
      where: { 
        id: req.params.id,
        userId: req.user.userId 
      },
      include: {
        habitLogs: {
          orderBy: { date: 'desc' },
        }
      }
    });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    res.json({ habit });
  } catch (error) {
    console.error('Get habit error:', error);
    res.status(500).json({ error: 'Failed to get habit' });
  }
});

// Create new habit
router.post('/', async (req: any, res: any) => {
  try {
    const validatedData = createHabitSchema.parse(req.body);
    
    const habit = await prisma.habit.create({
      data: {
        ...validatedData,
        userId: req.user.userId,
      },
      include: {
        habitLogs: true,
      }
    });

    res.status(201).json({ habit });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Create habit error:', error);
    res.status(500).json({ error: 'Failed to create habit' });
  }
});

// Update habit
router.put('/:id', async (req: any, res: any) => {
  try {
    const validatedData = updateHabitSchema.parse(req.body);
    
    // Check if habit belongs to user
    const existingHabit = await prisma.habit.findFirst({
      where: { 
        id: req.params.id,
        userId: req.user.userId 
      }
    });

    if (!existingHabit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    const habit = await prisma.habit.update({
      where: { id: req.params.id },
      data: validatedData,
      include: {
        habitLogs: true,
      }
    });

    res.json({ habit });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Update habit error:', error);
    res.status(500).json({ error: 'Failed to update habit' });
  }
});

// Delete habit
router.delete('/:id', async (req: any, res: any) => {
  try {
    // Check if habit belongs to user
    const existingHabit = await prisma.habit.findFirst({
      where: { 
        id: req.params.id,
        userId: req.user.userId 
      }
    });

    if (!existingHabit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    await prisma.habit.delete({
      where: { id: req.params.id }
    });

    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    console.error('Delete habit error:', error);
    res.status(500).json({ error: 'Failed to delete habit' });
  }
});

// Log habit completion
router.post('/:id/log', async (req: any, res: any) => {
  try {
    const validatedData = logHabitSchema.parse(req.body);
    
    // Check if habit belongs to user
    const habit = await prisma.habit.findFirst({
      where: { 
        id: req.params.id,
        userId: req.user.userId 
      }
    });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const habitLog = await prisma.habitLog.upsert({
      where: {
        habitId_date: {
          habitId: req.params.id,
          date: today,
        }
      },
      update: validatedData,
      create: {
        habitId: req.params.id,
        date: today,
        ...validatedData,
      }
    });

    res.json({ habitLog });
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Log habit error:', error);
    res.status(500).json({ error: 'Failed to log habit' });
  }
});

// Get habit logs for date range
router.get('/:id/logs', async (req: any, res: any) => {
  try {
    const { startDate, endDate } = req.query;
    
    // Check if habit belongs to user
    const habit = await prisma.habit.findFirst({
      where: { 
        id: req.params.id,
        userId: req.user.userId 
      }
    });

    if (!habit) {
      return res.status(404).json({ error: 'Habit not found' });
    }

    const logs = await prisma.habitLog.findMany({
      where: {
        habitId: req.params.id,
        date: {
          gte: new Date(startDate as string),
          lte: new Date(endDate as string),
        }
      },
      orderBy: { date: 'desc' }
    });

    res.json({ logs });
  } catch (error) {
    console.error('Get habit logs error:', error);
    res.status(500).json({ error: 'Failed to get habit logs' });
  }
});

export default router;
