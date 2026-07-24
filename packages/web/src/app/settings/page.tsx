'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Switch } from '@/components/ui/switch'
import { 
  User,
  Bell,
  Moon,
  Sun,
  Shield,
  CreditCard,
  LogOut,
  Save,
  Mail,
  Phone,
  MapPin,
  Globe,
  Clock,
  Volume2,
  Palette,
  Lock,
  Trash2,
  Download,
  HelpCircle,
  Settings,
  Upload
} from 'lucide-react'
import { useTheme } from 'next-themes'

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const [notifications, setNotifications] = useState(true)
  const [emailReminders, setEmailReminders] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)

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
                <p className="text-sm text-slate-500 dark:text-slate-400">Customize your experience</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-2">
            <Button variant="ghost">
              <User className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            <Button variant="ghost">
              <Bell className="w-4 h-4 mr-2" />
              Habits
            </Button>
            <Button variant="ghost">
              <Clock className="w-4 h-4 mr-2" />
              Analytics
            </Button>
            <Button variant="ghost">
              <HelpCircle className="w-4 h-4 mr-2" />
              AI Coach
            </Button>
            <Button variant="ghost" className="text-blue-600 bg-blue-50 dark:bg-blue-950">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6">Profile Information</h3>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                  A
                </div>
                <div>
                  <Button variant="outline" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-xs text-slate-500 mt-2">JPG, PNG or GIF. Max 2MB</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>First Name</Label>
                    <Input defaultValue="Alex" />
                  </div>
                  <div>
                    <Label>Last Name</Label>
                    <Input defaultValue="Johnson" />
                  </div>
                </div>
                
                <div>
                  <Label>Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input defaultValue="alex@example.com" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label>Phone</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input defaultValue="+1 (555) 123-4567" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label>Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input defaultValue="San Francisco, CA" className="pl-10" />
                  </div>
                </div>

                <div>
                  <Label>Timezone</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select className="w-full p-2 pl-10 border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800">
                      <option>Pacific Time (PT)</option>
                      <option>Mountain Time (MT)</option>
                      <option>Central Time (CT)</option>
                      <option>Eastern Time (ET)</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="appearance" className="space-y-6">
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6">Appearance</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <Palette className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">Theme</div>
                      <div className="text-sm text-slate-500">Customize the app appearance</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={theme === 'light' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setTheme('light')}
                      className={theme === 'light' ? 'bg-blue-500' : ''}
                    >
                      <Sun className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={theme === 'dark' ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => setTheme('dark')}
                      className={theme === 'dark' ? 'bg-blue-500' : ''}
                    >
                      <Moon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Volume2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Sound Effects</div>
                      <div className="text-sm text-slate-500">Play sounds for actions</div>
                    </div>
                  </div>
                  <Switch checked={soundEnabled} onCheckedChange={setSoundEnabled} />
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <Label>Accent Color</Label>
                  <div className="flex gap-3 mt-2">
                    {['blue', 'purple', 'green', 'orange', 'pink'].map((color) => (
                      <button
                        key={color}
                        className={`w-10 h-10 rounded-full bg-${color}-500 hover:scale-110 transition-transform ${
                          color === 'blue' ? 'ring-4 ring-offset-2 ring-blue-500' : ''
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6">Notification Preferences</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Bell className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">Push Notifications</div>
                      <div className="text-sm text-slate-500">Receive notifications on your device</div>
                    </div>
                  </div>
                  <Switch checked={pushNotifications} onCheckedChange={setPushNotifications} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Email Reminders</div>
                      <div className="text-sm text-slate-500">Get daily habit reminders via email</div>
                    </div>
                  </div>
                  <Switch checked={emailReminders} onCheckedChange={setEmailReminders} />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="font-medium">Quiet Hours</div>
                      <div className="text-sm text-slate-500">Disable notifications during specific hours</div>
                    </div>
                  </div>
                  <Switch checked={notifications} onCheckedChange={setNotifications} />
                </div>

                {notifications && (
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Start Time</Label>
                        <Input type="time" defaultValue="22:00" />
                      </div>
                      <div>
                        <Label>End Time</Label>
                        <Input type="time" defaultValue="08:00" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card className="p-6 border-2 border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-6">Account Settings</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">Subscription</div>
                      <div className="text-sm text-slate-500">Premium Plan - $4.99/month</div>
                    </div>
                  </div>
                  <Button variant="outline">Manage</Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium">Password</div>
                      <div className="text-sm text-slate-500">Last changed 30 days ago</div>
                    </div>
                  </div>
                  <Button variant="outline">Change</Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-slate-500">Add extra security to your account</div>
                    </div>
                  </div>
                  <Button variant="outline">Enable</Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                      <Download className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-medium">Export Data</div>
                      <div className="text-sm text-slate-500">Download all your habit data</div>
                    </div>
                  </div>
                  <Button variant="outline">Export</Button>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-3">
                  <Button variant="outline" className="w-full text-red-500 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                  
                  <Button variant="outline" className="w-full text-red-500 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
