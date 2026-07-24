import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Target, TrendingUp, MessageSquare, Settings, Plus } from 'lucide-react-native';

// Import screens
import DashboardScreen from './screens/DashboardScreen';
import HabitsScreen from './screens/HabitsScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import AICoachScreen from './screens/AICoachScreen';
import SettingsScreen from './screens/SettingsScreen';
import LoginScreen from './screens/LoginScreen';
import HabitDetailScreen from './screens/HabitDetailScreen';
import CreateHabitScreen from './screens/CreateHabitScreen';
import PremiumScreen from './screens/PremiumScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#3B82F6',
        tabBarInactiveTintColor: '#9CA3AF',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Target size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Habits" 
        component={HabitsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Target size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Create" 
        component={CreateHabitScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Plus size={size} color={color} />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen 
        name="Analytics" 
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TrendingUp size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="AI Coach" 
        component={AICoachScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MessageSquare size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen name="HabitDetail" component={HabitDetailScreen} />
            <Stack.Screen name="Premium" component={PremiumScreen} />
          </>
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
