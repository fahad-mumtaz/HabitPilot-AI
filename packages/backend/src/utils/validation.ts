import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  name: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const createHabitSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  category: z.string().optional(),
  color: z.string().optional(),
  icon: z.string().optional(),
  targetCount: z.number().min(1).optional(),
  frequency: z.enum(['daily', 'weekly', 'custom']).optional(),
});

export const updateHabitSchema = createHabitSchema.partial();

export const logHabitSchema = z.object({
  completed: z.boolean(),
  count: z.number().min(0).optional(),
  notes: z.string().optional(),
});

export const aiChatSchema = z.object({
  message: z.string().min(1, 'Message is required'),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateHabitInput = z.infer<typeof createHabitSchema>;
export type UpdateHabitInput = z.infer<typeof updateHabitSchema>;
export type LogHabitInput = z.infer<typeof logHabitSchema>;
export type AIChatInput = z.infer<typeof aiChatSchema>;
