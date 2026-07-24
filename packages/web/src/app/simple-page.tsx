'use client'

import { useState } from 'react'

export default function SimplePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  if (isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '30px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}>
          <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            paddingBottom: '20px',
            borderBottom: '2px solid #f0f0f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold'
              }}>
                H
              </div>
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', margin: 0 }}>
                HabitPilot AI
              </h1>
            </div>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#f0f0f0',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer'
            }}>
              🌙 Dark Mode
            </button>
          </header>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #10B981, #059669)',
              padding: '25px',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 10px 20px rgba(16, 185, 129, 0.2)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎯</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>75%</div>
              <div style={{ fontSize: '16px', opacity: 0.9 }}>Today's Progress</div>
              <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '5px' }}>3 of 4 habits completed</div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              padding: '25px',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 10px 20px rgba(245, 158, 11, 0.2)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🔥</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>12 days</div>
              <div style={{ fontSize: '16px', opacity: 0.9 }}>Current Streak</div>
              <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '5px' }}>Keep it going!</div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)',
              padding: '25px',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 10px 20px rgba(139, 92, 246, 0.2)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>🤖</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>2 tips</div>
              <div style={{ fontSize: '16px', opacity: 0.9 }}>AI Coach</div>
              <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '5px' }}>New recommendations</div>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              padding: '25px',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>⚙️</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>Custom</div>
              <div style={{ fontSize: '16px', opacity: 0.9 }}>Settings</div>
              <div style={{ fontSize: '14px', opacity: 0.8, marginTop: '5px' }}>Theme & reminders</div>
            </div>
          </div>

          <div style={{
            background: '#f8f9fa',
            padding: '30px',
            borderRadius: '16px',
            border: '1px solid #e9ecef'
          }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a', marginBottom: '20px' }}>
              Welcome back! 👋
            </h2>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '25px' }}>
              Here's your habit progress for today
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { name: 'Morning Meditation', completed: true },
                { name: 'Read for 30 minutes', completed: true },
                { name: 'Exercise', completed: true },
                { name: 'Journal before bed', completed: false }
              ].map((habit, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: habit.completed ? '#10B981' : '#9CA3AF'
                    }} />
                    <span style={{ fontSize: '16px', color: '#1a1a1a', fontWeight: '500' }}>
                      {habit.name}
                    </span>
                  </div>
                  {habit.completed ? (
                    <span style={{
                      padding: '8px 16px',
                      backgroundColor: '#10B981',
                      color: 'white',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      Completed
                    </span>
                  ) : (
                    <button style={{
                      padding: '10px 20px',
                      backgroundColor: '#3B82F6',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                    }}>
                      Mark Complete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '450px',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '36px',
            fontWeight: 'bold',
            margin: '0 auto 20px'
          }}>
            H
          </div>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#1a1a1a', margin: '0 0 10px' }}>
            HabitPilot AI
          </h1>
          <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>
            Build better habits with AI-powered coaching
          </p>
        </div>

        <div style={{ marginBottom: '30px' }}>
          <div style={{
            display: 'flex',
            backgroundColor: '#f0f0f0',
            borderRadius: '12px',
            padding: '4px',
            marginBottom: '30px'
          }}>
            <button
              onClick={() => setIsLogin(true)}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: isLogin ? '#3B82F6' : 'transparent',
                color: isLogin ? 'white' : '#666',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: !isLogin ? '#3B82F6' : 'transparent',
                color: !isLogin ? 'white' : '#666',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            >
              Register
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Name"
                style={{
                  padding: '16px',
                  border: '2px solid #e9ecef',
                  borderRadius: '12px',
                  fontSize: '16px',
                  outline: 'none',
                  transition: 'border-color 0.3s ease'
                }}
              />
            )}
            
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '16px',
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
            />
            
            <input
              type="password"
              placeholder="Enter your password"
              style={{
                padding: '16px',
                border: '2px solid #e9ecef',
                borderRadius: '12px',
                fontSize: '16px',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
            />
            
            <button
              onClick={() => setIsAuthenticated(true)}
              style={{
                padding: '16px',
                background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)'
              }}
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setIsLogin(!isLogin)}
            style={{
              background: 'none',
              border: 'none',
              color: '#3B82F6',
              fontSize: '14px',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  )
}
