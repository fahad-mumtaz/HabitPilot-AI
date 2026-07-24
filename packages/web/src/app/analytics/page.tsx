'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  TrendingUp, 
  Calendar, 
  Target,
  Award,
  Flame,
  Clock,
  CheckCircle2,
  BarChart3,
  PieChart,
  LineChart,
  Download,
  Share2
} from 'lucide-react'

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('week')

  const weeklyData = [
    { day: 'Mon', completed: 4, total: 5, percentage: 80 },
    { day: 'Tue', completed: 5, total: 5, percentage: 100 },
    { day: 'Wed', completed: 3, total: 5, percentage: 60 },
    { day: 'Thu', completed: 4, total: 5, percentage: 80 },
    { day: 'Fri', completed: 5, total: 5, percentage: 100 },
    { day: 'Sat', completed: 2, total: 5, percentage: 40 },
    { day: 'Sun', completed: 3, total: 5, percentage: 60 },
  ]

  const habitStats = [
    { name: 'Morning Meditation', completed: 6, total: 7, percentage: 85, color: 'bg-purple-500' },
    { name: 'Read for 30 minutes', completed: 5, total: 7, percentage: 71, color: 'bg-blue-500' },
    { name: 'Exercise', completed: 7, total: 7, percentage: 100, color: 'bg-green-500' },
    { name: 'Journal before bed', completed: 4, total: 7, percentage: 57, color: 'bg-orange-500' },
    { name: 'Drink 8 glasses of water', completed: 3, total: 7, percentage: 43, color: 'bg-cyan-500' },
  ]

  const achievements = [
    { name: 'First Week', description: 'Complete habits for 7 days', icon: '🏆', unlocked: true },
    { name: 'Streak Master', description: 'Maintain a 10-day streak', icon: '🔥', unlocked: true },
    { name: 'Perfect Day', description: 'Complete all habits in one day', icon: '⭐', unlocked: true },
    { name: 'Habit Hero', description: 'Create 10 habits', icon: '🦸', unlocked: false },
    { name: 'Month Master', description: 'Maintain habits for 30 days', icon: '📅', unlocked: false },
  ]

  const completionRate = 78
  const currentStreak = 12
  const longestStreak = 18
  const totalHabits = 5
  const totalCompletions = 156

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
                <p className="text-sm text-slate-500 dark:text-slate-400">Track your progress</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            <Button variant="ghost">
              <Target className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost">
              <Calendar className="w-4 h-4 mr-2" />
              Habits
            </Button>
            <Button variant="ghost" className="text-blue-600 bg-blue-50 dark:bg-blue-950">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Time Range Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-slate-900 rounded-lg p-1 border border-slate-200 dark:border-slate-800">
            {['week', 'month', 'year'].map((range) => (
              <Button
                key={range}
                variant={timeRange === range ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setTimeRange(range)}
                className={timeRange === range ? 'bg-blue-500 hover:bg-blue-600' : ''}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-green-500 font-medium">+12%</span>
            </div>
            <div className="text-3xl font-bold mb-1">{completionRate}%</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Completion Rate</div>
          </Card>

          <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="text-sm text-green-500 font-medium">+3 days</span>
            </div>
            <div className="text-3xl font-bold mb-1">{currentStreak}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Current Streak</div>
          </Card>

          <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm text-slate-400">Best: {longestStreak}</span>
            </div>
            <div className="text-3xl font-bold mb-1">{longestStreak}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Longest Streak</div>
          </Card>

          <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm text-green-500 font-medium">+24</span>
            </div>
            <div className="text-3xl font-bold mb-1">{totalCompletions}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400">Total Completions</div>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="habits">Habits</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Weekly Progress Chart */}
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Weekly Progress</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <BarChart3 className="w-4 h-4" />
                  <span>Last 7 days</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {weeklyData.map((day, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 text-sm font-medium text-slate-500">{day.day}</div>
                    <div className="flex-1">
                      <Progress value={day.percentage} className="h-3" />
                    </div>
                    <div className="w-20 text-sm text-right">
                      <span className="font-medium">{day.completed}/{day.total}</span>
                      <span className="text-slate-400 ml-1">({day.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Completion Trends */}
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Completion Trends</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <LineChart className="w-4 h-4" />
                  <span>Monthly overview</span>
                </div>
              </div>
              
              <div className="h-64 flex items-end justify-between gap-2">
                {[65, 72, 68, 75, 80, 78, 82, 85, 79, 88, 90, 78].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-lg transition-all hover:from-blue-600 hover:to-purple-700"
                      style={{ height: `${value * 2.5}px` }}
                    />
                    <div className="text-xs text-slate-500">
                      {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="habits" className="space-y-6">
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Habit Performance</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <PieChart className="w-4 h-4" />
                  <span>Individual breakdown</span>
                </div>
              </div>
              
              <div className="space-y-6">
                {habitStats.map((habit, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 ${habit.color} rounded-full`} />
                        <span className="font-medium">{habit.name}</span>
                      </div>
                      <div className="text-sm text-slate-500">
                        <span className="font-medium">{habit.completed}/{habit.total}</span>
                        <span className="ml-1">({habit.percentage}%)</span>
                      </div>
                    </div>
                    <Progress value={habit.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Achievements</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Award className="w-4 h-4" />
                  <span>3 of 5 unlocked</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      achievement.unlocked
                        ? 'bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950 border-yellow-200 dark:border-yellow-800'
                        : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 opacity-60'
                    }`}
                  >
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h4 className="font-bold mb-1">{achievement.name}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{achievement.description}</p>
                    {achievement.unlocked && (
                      <div className="mt-3 text-xs font-medium text-green-600 dark:text-green-400">
                        ✓ Unlocked
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
