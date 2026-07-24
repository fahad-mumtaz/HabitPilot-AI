import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { ArrowLeft, Calendar, Target, TrendingUp, CheckCircle, Circle } from 'lucide-react-native';

export default function HabitDetailScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const habit = {
    id: 1,
    title: 'Morning Meditation',
    description: 'Start the day with 10 minutes of mindfulness to reduce stress and improve focus',
    category: 'Mindfulness',
    color: '#8B5CF6',
    icon: 'brain',
    completionRate: 85,
    currentStreak: 7,
    longestStreak: 14,
    targetCount: 1,
    frequency: 'daily',
    createdAt: new Date('2024-01-01'),
  };

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Get first day of month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startingDayOfWeek = firstDay.getDay();
    
    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentYear, currentMonth, i);
      const isCompleted = Math.random() > 0.3; // Random completion for demo
      const isToday = i === today.getDate();
      
      days.push({
        date: i,
        isCompleted,
        isToday,
        fullDate: date,
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const recentLogs = [
    { date: '2024-01-15', completed: true, notes: 'Felt very peaceful and focused' },
    { date: '2024-01-14', completed: true, notes: 'Great session, cleared my mind' },
    { date: '2024-01-13', completed: false, notes: 'Too busy, will try again tomorrow' },
    { date: '2024-01-12', completed: true, notes: 'Morning routine working well' },
    { date: '2024-01-11', completed: true, notes: 'Feeling more consistent' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <ArrowLeft size={24} color="#3B82F6" />
        </TouchableOpacity>
        <View style={styles.habitInfo}>
          <Text style={styles.habitTitle}>{habit.title}</Text>
          <Text style={styles.habitCategory}>{habit.category}</Text>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Target size={24} color={habit.color} />
          <Text style={styles.statValue}>{habit.completionRate}%</Text>
          <Text style={styles.statLabel}>Completion Rate</Text>
        </View>

        <View style={styles.statCard}>
          <TrendingUp size={24} color="#10B981" />
          <Text style={styles.statValue}>{habit.currentStreak}</Text>
          <Text style={styles.statLabel}>Current Streak</Text>
        </View>

        <View style={styles.statCard}>
          <Calendar size={24} color="#F59E0B" />
          <Text style={styles.statValue}>{habit.longestStreak}</Text>
          <Text style={styles.statLabel}>Longest Streak</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Calendar View</Text>
        <View style={styles.calendarContainer}>
          <View style={styles.weekDays}>
            {weekDays.map(day => (
              <Text key={day} style={styles.weekDay}>{day}</Text>
            ))}
          </View>
          <View style={styles.calendarGrid}>
            {calendarDays.map((day, index) => (
              <View key={index} style={styles.calendarDay}>
                {day ? (
                  <TouchableOpacity
                    style={[
                      styles.dayButton,
                      day.isCompleted && styles.completedDay,
                      day.isToday && styles.todayDay,
                    ]}
                    onPress={() => setSelectedDate(day.fullDate)}
                  >
                    {day.isCompleted ? (
                      <CheckCircle size={16} color="#FFFFFF" />
                    ) : (
                      <Circle size={16} color="#9CA3AF" />
                    )}
                    <Text style={[
                      styles.dayText,
                      day.isCompleted && styles.completedDayText,
                      day.isToday && styles.todayDayText,
                    ]}>
                      {day.date}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View style={styles.emptyDay} />
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionText}>{habit.description}</Text>
          <View style={styles.habitMeta}>
            <Text style={styles.metaText}>Frequency: {habit.frequency}</Text>
            <Text style={styles.metaText}>Target: {habit.targetCount} per day</Text>
            <Text style={styles.metaText}>Started: {habit.createdAt.toLocaleDateString()}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {recentLogs.map((log, index) => (
          <View key={index} style={styles.logItem}>
            <View style={styles.logLeft}>
              {log.completed ? (
                <CheckCircle size={20} color="#10B981" />
              ) : (
                <Circle size={20} color="#EF4444" />
              )}
              <View style={styles.logInfo}>
                <Text style={styles.logDate}>{log.date}</Text>
                <Text style={styles.logNotes}>{log.notes}</Text>
              </View>
            </View>
            <Text style={[
              styles.logStatus,
              log.completed ? styles.completedStatus : styles.missedStatus
            ]}>
              {log.completed ? 'Completed' : 'Missed'}
            </Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.markCompleteButton}>
        <CheckCircle size={20} color="#FFFFFF" />
        <Text style={styles.markCompleteText}>Mark Today Complete</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 24,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 16,
  },
  habitInfo: {
    flex: 1,
  },
  habitTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 4,
  },
  habitCategory: {
    fontSize: 16,
    color: '#6B7280',
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  calendarContainer: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
  },
  weekDays: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  weekDay: {
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
  },
  dayButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    margin: 1,
  },
  completedDay: {
    backgroundColor: '#10B981',
  },
  todayDay: {
    backgroundColor: '#3B82F6',
  },
  dayText: {
    fontSize: 12,
    color: '#111827',
    marginTop: 2,
  },
  completedDayText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  todayDayText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  emptyDay: {
    flex: 1,
    margin: 1,
  },
  descriptionCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
  },
  descriptionText: {
    fontSize: 16,
    color: '#111827',
    lineHeight: 24,
    marginBottom: 16,
  },
  habitMeta: {
    gap: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#6B7280',
  },
  logItem: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  logInfo: {
    marginLeft: 12,
    flex: 1,
  },
  logDate: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  logNotes: {
    fontSize: 14,
    color: '#6B7280',
  },
  logStatus: {
    fontSize: 12,
    fontWeight: '600',
  },
  completedStatus: {
    color: '#10B981',
  },
  missedStatus: {
    color: '#EF4444',
  },
  markCompleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  markCompleteText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
