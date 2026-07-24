'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { 
  Check, 
  Zap, 
  Target, 
  TrendingUp, 
  Brain, 
  Shield,
  Star,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Award,
  Clock,
  Heart
} from 'lucide-react'

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                H
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                HabitPilot AI
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Testimonials
              </button>
              <Button onClick={() => scrollToSection('cta')} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started Free
              </Button>
            </div>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('features')} className="text-left text-slate-600 dark:text-slate-300 py-2">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-slate-600 dark:text-slate-300 py-2">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-slate-600 dark:text-slate-300 py-2">
                Testimonials
              </button>
              <Button onClick={() => scrollToSection('cta')} className="w-full bg-gradient-to-r from-blue-500 to-purple-600">
                Get Started Free
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Habit Tracking</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              Build Better Habits with AI Coaching
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
              Transform your daily routines with personalized AI insights, smart tracking, and motivational coaching. Join 50,000+ users building lasting habits.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                onClick={() => scrollToSection('cta')}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8 py-6 h-auto"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-2"
                onClick={() => scrollToSection('features')}
              >
                See How It Works
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Dashboard Preview */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20 transform scale-110"></div>
            <Card className="relative bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white/20 rounded-lg px-4 py-2 text-white text-sm">
                  app.habitpilot.ai/dashboard
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-2xl text-white">
                    <Target className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">75%</div>
                    <div className="text-sm opacity-90">Today's Progress</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-6 rounded-2xl text-white">
                    <TrendingUp className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">12 days</div>
                    <div className="text-sm opacity-90">Current Streak</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 rounded-2xl text-white">
                    <Brain className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">2 tips</div>
                    <div className="text-sm opacity-90">AI Insights</div>
                  </div>
                </div>
                <div className="space-y-3">
                  {['Morning Meditation', 'Read for 30 minutes', 'Exercise', 'Journal before bed'].map((habit, i) => (
                    <div key={i} className="flex items-center justify-between bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full ${i < 3 ? 'bg-green-500' : 'bg-slate-300'}`}></div>
                        <span className="font-medium">{habit}</span>
                      </div>
                      {i < 3 ? (
                        <span className="text-green-500 text-sm font-medium">Completed</span>
                      ) : (
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600">Mark Complete</Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Powerful Features for Lasting Change
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Everything you need to build better habits and achieve your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: 'AI-Powered Coaching',
                description: 'Get personalized habit recommendations and motivational insights powered by advanced AI.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Smart Goal Tracking',
                description: 'Set and track goals with intelligent progress monitoring and milestone celebrations.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Advanced Analytics',
                description: 'Visualize your progress with detailed charts, streak tracking, and performance insights.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Quick Logging',
                description: 'Log habits in seconds with our intuitive interface and smart suggestions.',
                color: 'from-yellow-500 to-yellow-600'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: 'Privacy First',
                description: 'Your data is encrypted and secure. We never sell your personal information.',
                color: 'from-red-500 to-red-600'
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: 'Smart Reminders',
                description: 'Never miss a habit with intelligent notifications based on your schedule.',
                color: 'from-indigo-500 to-indigo-600'
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-slate-200 dark:border-slate-800">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Start free, upgrade when you're ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-2">$0</div>
                <p className="text-slate-500 dark:text-slate-400">Forever free</p>
              </div>
              <ul className="space-y-4 mb-8">
                {['Up to 5 habits', 'Basic analytics', 'Limited AI coach (10/month)', 'Email support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" size="lg">
                Get Started
              </Button>
            </Card>

            {/* Premium Plan */}
            <Card className="p-8 border-2 border-blue-500 relative bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900 transform scale-105 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-2">$4.99<span className="text-lg text-slate-500">/month</span></div>
                <p className="text-slate-500 dark:text-slate-400">Billed monthly</p>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited habits', 'Advanced AI coaching', 'Detailed analytics', 'Custom themes', 'Cloud sync', 'Priority support', 'Export data'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" size="lg">
                Start Free Trial
              </Button>
            </Card>

            {/* Yearly Plan */}
            <Card className="p-8 border-2 border-slate-200 dark:border-slate-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Yearly</h3>
                <div className="text-4xl font-bold mb-2">$39.99<span className="text-lg text-slate-500">/year</span></div>
                <p className="text-green-500 font-medium">Save 33%</p>
              </div>
              <ul className="space-y-4 mb-8">
                {['Everything in Premium', '2 months free', 'Early access features', 'Dedicated support', 'Team features (coming soon)'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full" size="lg">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Loved by Thousands
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              See what our users are saying about HabitPilot AI
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-2 border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-6 italic">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[activeTestimonial].name[0]}
                </div>
                <div>
                  <div className="font-bold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-blue-500 w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Start Building Better Habits Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join 50,000+ users who are already transforming their daily routines with AI-powered habit tracking.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Input 
              placeholder="Enter your email" 
              className="max-w-md bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  H
                </div>
                <span className="text-xl font-bold">HabitPilot AI</span>
              </div>
              <p className="text-slate-400 text-sm">
                Build better habits with AI-powered coaching and personalized insights.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
            <p>© 2024 HabitPilot AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Manager',
    quote: 'HabitPilot AI completely transformed my morning routine. The AI insights helped me identify patterns I never noticed before. I\'ve maintained a 30-day streak for the first time ever!'
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    quote: 'The smart reminders and analytics are game-changers. I used to forget my habits constantly, but now I\'m consistently hitting my goals. The premium features are absolutely worth it.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Fitness Coach',
    quote: 'I recommend HabitPilot AI to all my clients. The AI coaching provides personalized advice that actually works. It\'s like having a personal habit coach in your pocket.'
  }
]
