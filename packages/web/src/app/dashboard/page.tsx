'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { 
  Target, 
  TrendingUp, 
  Brain, 
  Settings, 
  Plus,
  CheckCircle2,
  Circle,
  Calendar,
  Flame,
  Sparkles,
  LogOut,
  User,
  Bell,
  Moon,
  Sun
} from 'lucide-react'

export default function DashboardPage() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Morning Meditation', completed: true, color: 'bg-purple-500', icon: '🧘' },
    { id: 2, name: 'Read for 30 minutes', completed: true, color: 'bg-blue-500', icon: '📚' },
    { id: 3, name: 'Exercise', completed: true, color: 'bg-green-500', icon: '💪' },
    { id: 4, name: 'Journal before bed', completed: false, color: 'bg-orange-500', icon: '✍️' },
    { id: 5, name: 'Drink 8 glasses of water', completed: false, color: 'bg-cyan-500', icon: '💧' },
  ])

  const toggleHabit = (id: number) => {
    setHabits(habits.map(habit => 
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    ))
  }

  const completedCount = habits.filter(h => h.completed).length
  const progress = (completedCount / habits.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  HabitPilot AI
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Welcome back, Alex!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            <Button variant="ghost" className="text-blue-600 bg-blue-50 dark:bg-blue-950">
              <Target className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost">
              <Calendar className="w-4 h-4 mr-2" />
              Habits
            </Button>
            <Button variant="ghost">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button variant="ghost">
              <Brain className="w-4 h-4 mr-2" />
              AI Coach
            </Button>
            <Button variant="ghost">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-green-400 to-green-600 text-white border-0">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-8 h-8 opacity-80" />
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">{progress}%</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">{completedCount}/{habits.length}</div>
            <div className="text-sm opacity-90">Today's Progress</div>
            <Progress value={progress} className="mt-3 bg-white/30" />
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-400 to-orange-600 text-white border-0">
            <div className="flex items-center justify-between mb-4">
              <Flame className="w-8 h-8 opacity-80" />
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">12</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">12 days</div>
            <div className="text-sm opacity-90">Current Streak</div>
            <div className="text-xs opacity-75 mt-3">🔥 Keep it going!</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-400 to-purple-600 text-white border-0">
            <div className="flex items-center justify-between mb-4">
              <Brain className="w-8 h-8 opacity-80" />
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">2 tips</div>
            <div className="text-sm opacity-90">AI Insights</div>
            <div className="text-xs opacity-75 mt-3">✨ New recommendations</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-400 to-blue-600 text-white border-0">
            <div className="flex items-center justify-between mb-4">
              <Sparkles className="w-8 h-8 opacity-80" />
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">85%</span>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">85%</div>
            <div className="text-sm opacity-90">Weekly Average</div>
            <div className="text-xs opacity-75 mt-3">📈 +5% from last week</div>
          </Card>
        </div>

        {/* Today's Habits */}
        <Card className="p-6 mb-8 border-2 border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">Today's Habits</h2>
              <p className="text-slate-500 dark:text-slate-400">Track your daily progress</p>
            </div>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Add Habit
            </Button>
          </div>

          <div className="space-y-3">
            {habits.map((habit) => (
              <div
                key={habit.id}
                className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 ${
                  habit.completed 
                    ? 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800' 
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleHabit(habit.id)}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                      habit.completed 
                        ? `${habit.color} text-white` 
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {habit.completed ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                  </button>
                  <div>
                    <div className={`font-semibold text-lg ${habit.completed ? 'line-through text-slate-400' : ''}`}>
                      {habit.icon} {habit.name}
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {habit.completed ? 'Completed at 8:30 AM' : 'Not yet completed'}
                    </div>
                  </div>
                </div>
                
                {habit.completed ? (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <span className="text-sm font-medium">Completed</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                ) : (
                  <Button
                    onClick={() => toggleHabit(habit.id)}
                    size="sm"
                    className="bg-blue-500 hover:bg-blue-600"
                  >
                    Mark Complete
                  </Button>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* AI Insight Card */}
        <Card className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950 dark:to-blue-950 border-2 border-purple-200 dark:border-purple-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
              <Brain className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-2">AI Coach Insight</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Based on your recent activity, you're most productive in the morning. Consider moving your evening habits to earlier in the day for better consistency. Your meditation streak is impressive - keep it up!
              </p>
              <Button variant="outline" size="sm" className="border-purple-300 dark:border-purple-700">
                <Sparkles className="w-4 h-4 mr-2" />
                Get More Insights
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
