'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { 
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  CheckCircle2,
  Circle,
  Calendar,
  Target,
  TrendingUp,
  X
} from 'lucide-react'

export default function HabitsPage() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Morning Meditation', description: '10 minutes of mindfulness', category: 'Wellness', color: 'bg-purple-500', icon: '🧘', frequency: 'daily', targetCount: 1, streak: 12 },
    { id: 2, name: 'Read for 30 minutes', description: 'Read any book', category: 'Learning', color: 'bg-blue-500', icon: '📚', frequency: 'daily', targetCount: 1, streak: 8 },
    { id: 3, name: 'Exercise', description: 'Workout or physical activity', category: 'Health', color: 'bg-green-500', icon: '💪', frequency: 'daily', targetCount: 1, streak: 15 },
    { id: 4, name: 'Journal before bed', description: 'Reflect on the day', category: 'Wellness', color: 'bg-orange-500', icon: '✍️', frequency: 'daily', targetCount: 1, streak: 5 },
    { id: 5, name: 'Drink 8 glasses of water', description: 'Stay hydrated', category: 'Health', color: 'bg-cyan-500', icon: '💧', frequency: 'daily', targetCount: 8, streak: 3 },
    { id: 6, name: 'Learn Spanish', description: 'Practice vocabulary', category: 'Learning', color: 'bg-pink-500', icon: '🇪🇸', frequency: 'daily', targetCount: 1, streak: 7 },
  ])

  const [showAddModal, setShowAddModal] = useState(false)
  const [editingHabit, setEditingHabit] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', 'Wellness', 'Health', 'Learning', 'Productivity']

  const filteredHabits = habits.filter(habit => {
    const matchesSearch = habit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         habit.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || habit.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this habit?')) {
      setHabits(habits.filter(h => h.id !== id))
    }
  }

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
                <p className="text-sm text-slate-500 dark:text-slate-400">Manage your habits</p>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowAddModal(true)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Habit
            </Button>
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
            <Button variant="ghost" className="text-blue-600 bg-blue-50 dark:bg-blue-950">
              <Calendar className="w-4 h-4 mr-2" />
              Habits
            </Button>
            <Button variant="ghost">
              <TrendingUp className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <Card className="p-4 mb-6 border-2 border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                placeholder="Search habits..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-blue-500 hover:bg-blue-600' : ''}
                >
                  {category === 'all' ? 'All' : category}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {/* Habits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHabits.map((habit) => (
            <Card key={habit.id} className="p-6 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all hover:shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${habit.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {habit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{habit.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{habit.category}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(habit.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {habit.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>{habit.frequency}</span>
                </div>
                <div className="flex items-center gap-2 text-orange-500">
                  <span className="font-medium">{habit.streak} day streak</span>
                  <span>🔥</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button variant="outline" className="w-full">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Mark Complete
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredHabits.length === 0 && (
          <Card className="p-12 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">No habits found</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              {searchTerm || selectedCategory !== 'all' 
                ? 'Try adjusting your search or filters' 
                : 'Start by adding your first habit'}
            </p>
            {!searchTerm && selectedCategory === 'all' && (
              <Button 
                onClick={() => setShowAddModal(true)}
                className="bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Habit
              </Button>
            )}
          </Card>
        )}
      </main>

      {/* Add Habit Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-lg p-6 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Add New Habit</h2>
              <Button variant="ghost" size="icon" onClick={() => setShowAddModal(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label>Habit Name</Label>
                <Input placeholder="e.g., Morning Meditation" />
              </div>
              <div>
                <Label>Description</Label>
                <Input placeholder="e.g., 10 minutes of mindfulness" />
              </div>
              <div>
                <Label>Category</Label>
                <select className="w-full p-2 border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                  <option>Wellness</option>
                  <option>Health</option>
                  <option>Learning</option>
                  <option>Productivity</option>
                </select>
              </div>
              <div>
                <Label>Frequency</Label>
                <select className="w-full p-2 border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Custom</option>
                </select>
              </div>
              <div>
                <Label>Target Count</Label>
                <Input type="number" placeholder="1" />
              </div>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600"
                  onClick={() => setShowAddModal(false)}
                >
                  Create Habit
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
