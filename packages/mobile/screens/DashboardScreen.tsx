import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Target, TrendingUp, MessageSquare, Settings } from 'lucide-react-native';

export default function DashboardScreen() {
  const habits = [
    { id: 1, title: 'Morning Meditation', completed: true, color: '#10B981' },
    { id: 2, title: 'Read for 30 minutes', completed: true, color: '#10B981' },
    { id: 3, title: 'Exercise', completed: true, color: '#10B981' },
    { id: 4, title: 'Journal before bed', completed: false, color: '#9CA3AF' },
  ];

  const completedCount = habits.filter(h => h.completed).length;
  const progressPercentage = (completedCount / habits.length) * 100;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome back! 👋</Text>
        <Text style={styles.subtitle}>Here's your habit progress for today</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Target size={24} color="#3B82F6" />
          <Text style={styles.statValue}>{Math.round(progressPercentage)}%</Text>
          <Text style={styles.statLabel}>Today's Progress</Text>
          <Text style={styles.statSubtext}>{completedCount} of {habits.length} habits completed</Text>
        </View>

        <View style={styles.statCard}>
          <TrendingUp size={24} color="#10B981" />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Current Streak</Text>
          <Text style={styles.statSubtext}>Keep it going!</Text>
        </View>

        <View style={styles.statCard}>
          <MessageSquare size={24} color="#F59E0B" />
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>AI Tips</Text>
          <Text style={styles.statSubtext}>New recommendations</Text>
        </View>

        <View style={styles.statCard}>
          <Settings size={24} color="#6B7280" />
          <Text style={styles.statValue}>Custom</Text>
          <Text style={styles.statLabel}>Settings</Text>
          <Text style={styles.statSubtext}>Theme & reminders</Text>
        </View>
      </View>

      <View style={styles.habitsSection}>
        <Text style={styles.sectionTitle}>Today's Habits</Text>
        {habits.map(habit => (
          <View key={habit.id} style={styles.habitCard}>
            <View style={styles.habitLeft}>
              <View style={[styles.habitDot, { backgroundColor: habit.color }]} />
              <Text style={styles.habitTitle}>{habit.title}</Text>
            </View>
            {habit.completed ? (
              <Text style={styles.completedText}>Completed</Text>
            ) : (
              <TouchableOpacity style={styles.completeButton}>
                <Text style={styles.completeButtonText}>Mark Complete</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginRight: '2%',
    marginBottom: 12,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 8,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    textAlign: 'center',
  },
  statSubtext: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 2,
  },
  habitsSection: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  habitCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  habitLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  habitDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  habitTitle: {
    fontSize: 16,
    color: '#111827',
    flex: 1,
  },
  completedText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '600',
  },
  completeButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
