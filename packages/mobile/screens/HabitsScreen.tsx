import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Plus, Target, TrendingUp, Calendar } from 'lucide-react-native';

export default function HabitsScreen() {
  const habits = [
    {
      id: 1,
      title: 'Morning Meditation',
      description: 'Start the day with 10 minutes of mindfulness',
      category: 'Mindfulness',
      color: '#8B5CF6',
      icon: 'brain',
      completionRate: 85,
      streak: 7,
      isActive: true,
    },
    {
      id: 2,
      title: 'Read for 30 minutes',
      description: 'Read books to expand knowledge',
      category: 'Learning',
      color: '#3B82F6',
      icon: 'book',
      completionRate: 92,
      streak: 14,
      isActive: true,
    },
    {
      id: 3,
      title: 'Exercise',
      description: 'Stay physically active and healthy',
      category: 'Health',
      color: '#10B981',
      icon: 'dumbbell',
      completionRate: 78,
      streak: 5,
      isActive: true,
    },
    {
      id: 4,
      title: 'Journal before bed',
      description: 'Reflect on the day and practice gratitude',
      category: 'Mindfulness',
      color: '#F59E0B',
      icon: 'pen',
      completionRate: 65,
      streak: 3,
      isActive: true,
    },
    {
      id: 5,
      title: 'Learn Spanish',
      description: 'Practice Spanish for 15 minutes daily',
      category: 'Learning',
      color: '#EF4444',
      icon: 'language',
      completionRate: 45,
      streak: 2,
      isActive: false,
    },
  ];

  const activeHabits = habits.filter(h => h.isActive);
  const inactiveHabits = habits.filter(h => !h.isActive);

  const renderHabit = (habit: any) => (
    <TouchableOpacity key={habit.id} style={styles.habitCard}>
      <View style={styles.habitHeader}>
        <View style={[styles.habitIcon, { backgroundColor: habit.color }]}>
          <Target size={20} color="#FFFFFF" />
        </View>
        <View style={styles.habitInfo}>
          <Text style={styles.habitTitle}>{habit.title}</Text>
          <Text style={styles.habitDescription}>{habit.description}</Text>
          <View style={styles.habitMeta}>
            <Text style={styles.habitCategory}>{habit.category}</Text>
            <View style={styles.habitStats}>
              <View style={styles.statItem}>
                <TrendingUp size={12} color="#6B7280" />
                <Text style={styles.statText}>{habit.streak} days</Text>
              </View>
              <View style={styles.statItem}>
                <Calendar size={12} color="#6B7280" />
                <Text style={styles.statText}>{habit.completionRate}%</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View 
          style={[
            styles.progressFill, 
            { width: `${habit.completionRate}%`, backgroundColor: habit.color }
          ]} 
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Habits</Text>
        <Text style={styles.subtitle}>Track your daily routines and build consistency</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Active Habits ({activeHabits.length})</Text>
        {activeHabits.map(renderHabit)}
      </View>

      {inactiveHabits.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Inactive Habits ({inactiveHabits.length})</Text>
          {inactiveHabits.map(renderHabit)}
        </View>
      )}

      <TouchableOpacity style={styles.addButton}>
        <Plus size={24} color="#FFFFFF" />
        <Text style={styles.addButtonText}>Add New Habit</Text>
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
  habitCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  habitHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  habitIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  habitInfo: {
    flex: 1,
  },
  habitTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  habitDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  habitMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  habitCategory: {
    fontSize: 12,
    color: '#6B7280',
    backgroundColor: '#E5E7EB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  habitStats: {
    flexDirection: 'row',
    gap: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: '#6B7280',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B82F6',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
