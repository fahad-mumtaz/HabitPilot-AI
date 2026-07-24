import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { TrendingUp, Calendar, Target, Award } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function AnalyticsScreen() {
  const monthlyData = [
    { day: 'Mon', completed: 3, total: 4 },
    { day: 'Tue', completed: 4, total: 4 },
    { day: 'Wed', completed: 2, total: 4 },
    { day: 'Thu', completed: 4, total: 4 },
    { day: 'Fri', completed: 3, total: 4 },
    { day: 'Sat', completed: 4, total: 4 },
    { day: 'Sun', completed: 1, total: 4 },
  ];

  const habitBreakdown = [
    { name: 'Morning Meditation', completed: 28, total: 30, color: '#8B5CF6' },
    { name: 'Read for 30 minutes', completed: 29, total: 30, color: '#3B82F6' },
    { name: 'Exercise', completed: 25, total: 30, color: '#10B981' },
    { name: 'Journal before bed', completed: 20, total: 30, color: '#F59E0B' },
  ];

  const averageCompletion = Math.round(
    monthlyData.reduce((sum, day) => sum + (day.completed / day.total) * 100, 0) / monthlyData.length
  );

  const renderBarChart = () => {
    const maxValue = Math.max(...monthlyData.map(d => d.total));
    const barWidth = (width - 80) / monthlyData.length - 20;

    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Weekly Progress</Text>
        <View style={styles.chart}>
          {monthlyData.map((day, index) => {
            const completedHeight = (day.completed / maxValue) * 120;
            const totalHeight = (day.total / maxValue) * 120;
            
            return (
              <View key={day.day} style={styles.barContainer}>
                <View style={styles.barLabels}>
                  <Text style={styles.barValue}>{day.completed}</Text>
                  <Text style={styles.barValueSmall}>/ {day.total}</Text>
                </View>
                <View style={styles.barWrapper}>
                  <View 
                    style={[
                      styles.bar,
                      styles.completedBar,
                      { height: completedHeight }
                    ]} 
                  />
                  <View 
                    style={[
                      styles.bar,
                      styles.totalBar,
                      { height: totalHeight }
                    ]} 
                  />
                </View>
                <Text style={styles.barLabel}>{day.day}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics</Text>
        <Text style={styles.subtitle}>Track your progress and insights</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Calendar size={24} color="#3B82F6" />
          <Text style={styles.statValue}>30</Text>
          <Text style={styles.statLabel}>Total Days</Text>
        </View>

        <View style={styles.statCard}>
          <Target size={24} color="#10B981" />
          <Text style={styles.statValue}>{averageCompletion}%</Text>
          <Text style={styles.statLabel}>Avg Completion</Text>
        </View>

        <View style={styles.statCard}>
          <TrendingUp size={24} color="#F59E0B" />
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Current Streak</Text>
        </View>

        <View style={styles.statCard}>
          <Award size={24} color="#8B5CF6" />
          <Text style={styles.statValue}>Gold</Text>
          <Text style={styles.statLabel}>Badge Level</Text>
        </View>
      </View>

      {renderBarChart()}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habit Breakdown</Text>
        {habitBreakdown.map((habit, index) => {
          const completionRate = Math.round((habit.completed / habit.total) * 100);
          
          return (
            <View key={index} style={styles.habitStatCard}>
              <View style={styles.habitStatHeader}>
                <View style={[styles.habitDot, { backgroundColor: habit.color }]} />
                <Text style={styles.habitStatName}>{habit.name}</Text>
                <Text style={styles.habitStatRate}>{completionRate}%</Text>
              </View>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill, 
                    { width: `${completionRate}%`, backgroundColor: habit.color }
                  ]} 
                />
              </View>
              <Text style={styles.habitStatSubtext}>
                {habit.completed} of {habit.total} days completed
              </Text>
            </View>
          );
        })}
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
  chartContainer: {
    backgroundColor: '#F9FAFB',
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
    textAlign: 'center',
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 180,
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
  },
  barLabels: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  barValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  barValueSmall: {
    fontSize: 10,
    color: '#6B7280',
  },
  barWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 120,
    width: 20,
  },
  bar: {
    width: 8,
    borderRadius: 4,
  },
  completedBar: {
    backgroundColor: '#10B981',
    marginRight: 2,
  },
  totalBar: {
    backgroundColor: '#E5E7EB',
  },
  barLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  habitStatCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  habitStatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  habitDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  habitStatName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  habitStatRate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111827',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#E5E7EB',
    borderRadius: 3,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  habitStatSubtext: {
    fontSize: 14,
    color: '#6B7280',
  },
});
