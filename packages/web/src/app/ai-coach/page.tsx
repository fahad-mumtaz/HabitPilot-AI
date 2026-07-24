'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Brain,
  Send,
  Sparkles,
  User,
  Bot,
  Clock,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCw,
  Lightbulb,
  Target,
  TrendingUp
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function AICoachPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm your AI Habit Coach. I can help you build better habits, provide personalized recommendations, and keep you motivated. What would you like to work on today?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickPrompts = [
    { icon: <Lightbulb className="w-4 h-4" />, text: "Give me a habit tip" },
    { icon: <Target className="w-4 h-4" />, text: "Help me set goals" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Improve my streak" },
    { icon: <Sparkles className="w-4 h-4" />, text: "Weekly planning" }
  ]

  const handleSend = async (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateAIResponse(content),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput: string): string => {
    const lowerInput = userInput.toLowerCase()
    
    if (lowerInput.includes('tip') || lowerInput.includes('advice')) {
      return "Here's a powerful habit tip: Start with habits that take less than 2 minutes to complete. This is called the '2-Minute Rule' and it helps overcome resistance. Once you've mastered the small habit, you can gradually expand it. For example, instead of 'exercise for 30 minutes', start with 'put on running shoes'!"
    }
    
    if (lowerInput.includes('goal') || lowerInput.includes('set')) {
      return "When setting habit goals, use the SMART framework: Specific, Measurable, Achievable, Relevant, and Time-bound. Instead of 'read more', try 'read for 20 minutes every evening before bed'. This clarity makes it easier to track and maintain. Would you like me to help you refine any of your current habits?"
    }
    
    if (lowerInput.includes('streak') || lowerInput.includes('motivation')) {
      return "Your 12-day streak is impressive! To maintain momentum, try these strategies: 1) Never miss twice - if you miss one day, get back on track immediately. 2) Track visually - use a calendar and mark each completed day. 3) Prepare in advance - lay out clothes, prep materials, etc. Your consistency is building neural pathways that make the habit easier over time!"
    }
    
    if (lowerInput.includes('week') || lowerInput.includes('plan')) {
      return "Let's plan your week for maximum habit success! Based on your patterns, I recommend: \n\n🌅 **Morning** (when you're most productive):\n- Meditation (6:30 AM)\n- Exercise (7:00 AM)\n\n📚 **Midday**:\n- Reading (12:30 PM - lunch break)\n\n🌙 **Evening**:\n- Journaling (9:00 PM)\n\nWould you like me to adjust this schedule or add time blocks for other habits?"
    }
    
    return "That's a great question! Building habits is a journey, and I'm here to support you. Based on your current progress, you're doing excellently with your wellness habits. Consider focusing on consistency rather than perfection - even 80% consistency is powerful. What specific aspect of habit building would you like to explore further?"
  }

  const handleQuickPrompt = (prompt: string) => {
    handleSend(prompt)
  }

  const copyMessage = (content: string) => {
    navigator.clipboard.writeText(content)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-950 dark:to-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI Coach
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Your personal habit assistant</p>
              </div>
            </div>
            
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              New Chat
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col h-[calc(100vh-200px)]">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto space-y-6 mb-4 pb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-4 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                )}
                
                <div className={`max-w-[80%] ${message.role === 'user' ? 'order-1' : ''}`}>
                  <Card
                    className={`p-4 ${
                      message.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0'
                        : 'bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{message.content}</div>
                  </Card>
                  
                  <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                    <Clock className="w-3 h-3" />
                    <span>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    {message.role === 'assistant' && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyMessage(message.content)}
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ThumbsUp className="w-3 h-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <ThumbsDown className="w-3 h-3" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
                
                {message.role === 'user' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 order-2">
                    <User className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex gap-4 justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <Card className="p-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-200" />
                  </div>
                </Card>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          {messages.length === 1 && (
            <div className="grid grid-cols-2 gap-3 mb-4">
              {quickPrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="justify-start h-auto py-3 px-4 border-2 border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-700"
                  onClick={() => handleQuickPrompt(prompt.text)}
                >
                  {prompt.icon}
                  <span className="ml-2">{prompt.text}</span>
                </Button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <Card className="p-4 border-2 border-slate-200 dark:border-slate-800">
            <div className="flex gap-3">
              <Input
                placeholder="Ask me anything about your habits..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(inputValue)}
                className="flex-1"
              />
              <Button
                onClick={() => handleSend(inputValue)}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              AI Coach can make mistakes. Consider checking important information.
            </p>
          </Card>
        </div>
      </main>
    </div>
  )
}
