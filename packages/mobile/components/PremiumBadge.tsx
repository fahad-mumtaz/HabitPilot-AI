import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Crown, Lock } from 'lucide-react-native';
import { useSubscription } from '../services/subscriptionService';

interface PremiumBadgeProps {
  children: React.ReactNode;
  feature?: string;
  onPress?: () => void;
}

const PremiumBadge: React.FC<PremiumBadgeProps> = ({ children, feature, onPress }) => {
  const { isPremium } = useSubscription();

  if (isPremium) {
    return <>{children}</>;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      className="relative opacity-75"
    >
      <View className="absolute inset-0 bg-black bg-opacity-10 rounded-lg z-10 flex items-center justify-center">
        <View className="bg-purple-500 rounded-full p-2 mb-2">
          <Lock size={16} color="white" />
        </View>
        <Text className="text-purple-600 text-xs font-semibold">Premium</Text>
      </View>
      {children}
    </TouchableOpacity>
  );
};

export const PremiumFeatureBanner: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 mb-4 flex-row items-center justify-between"
    >
      <View className="flex-row items-center">
        <Crown size={24} color="white" />
        <View className="ml-3">
          <Text className="text-white font-semibold">Unlock Premium Features</Text>
          <Text className="text-purple-100 text-sm">Get unlimited habits & AI coaching</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PremiumBadge;
