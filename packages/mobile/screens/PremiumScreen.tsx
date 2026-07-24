import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Check, Crown, Star, ArrowRight } from 'lucide-react-native';
import { useSubscription, SubscriptionPlan } from '../services/subscriptionService';

const PremiumScreen: React.FC = () => {
  const { isPremium, plans, activatePremium, daysRemaining } = useSubscription();

  const handleSubscribe = async (plan: SubscriptionPlan) => {
    try {
      // In a real app, integrate with actual payment provider
      Alert.alert(
        'Subscribe to Premium',
        `You will be charged $${plan.price}/${plan.duration === 'monthly' ? 'month' : 'year'}. Continue?`,
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Subscribe', 
            onPress: async () => {
              await activatePremium(plan);
              Alert.alert('Success!', 'Premium activated successfully!');
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to activate premium. Please try again.');
    }
  };

  if (isPremium) {
    return (
      <View className="flex-1 bg-gradient-to-b from-purple-50 to-blue-50 px-6 pt-12">
        <View className="items-center mb-8">
          <View className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 mb-4">
            <Crown size={48} color="white" />
          </View>
          <Text className="text-3xl font-bold text-gray-800 mb-2">Premium Active!</Text>
          <Text className="text-gray-600 text-center">
            {daysRemaining && `${daysRemaining} days remaining`}
          </Text>
        </View>

        <View className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <Text className="text-xl font-semibold mb-4">Premium Features</Text>
          {plans[0].features.map((feature, index) => (
            <View key={index} className="flex-row items-center mb-3">
              <Check size={20} color="#10B981" />
              <Text className="ml-3 text-gray-700">{feature}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          className="bg-gray-200 py-4 rounded-xl"
          onPress={() => Alert.alert('Manage Subscription', 'Subscription management coming soon!')}
        >
          <Text className="text-center font-semibold text-gray-700">Manage Subscription</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gradient-to-b from-purple-50 to-blue-50">
      <View className="px-6 pt-12 pb-8">
        <View className="items-center mb-8">
          <View className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 mb-4">
            <Crown size={48} color="white" />
          </View>
          <Text className="text-3xl font-bold text-gray-800 mb-2">Go Premium</Text>
          <Text className="text-gray-600 text-center">
            Unlock unlimited habits and advanced AI coaching
          </Text>
        </View>

        <View className="space-y-4 mb-8">
          {plans.map((plan) => (
            <TouchableOpacity
              key={plan.id}
              className={`bg-white rounded-2xl p-6 shadow-lg ${
                plan.popular ? 'border-2 border-purple-500' : ''
              }`}
              onPress={() => handleSubscribe(plan)}
            >
              {plan.popular && (
                <View className="absolute -top-3 right-4 bg-purple-500 px-3 py-1 rounded-full">
                  <Text className="text-white text-xs font-semibold flex-row items-center">
                    <Star size={12} color="white" />
                    <Text className="ml-1">POPULAR</Text>
                  </Text>
                </View>
              )}

              <View className="flex-row justify-between items-start mb-4">
                <View>
                  <Text className="text-xl font-bold text-gray-800">{plan.name}</Text>
                  <Text className="text-3xl font-bold text-purple-600 mt-1">
                    ${plan.price}
                    <Text className="text-sm text-gray-500">
                      /{plan.duration === 'monthly' ? 'month' : 'year'}
                    </Text>
                  </Text>
                </View>
                <ArrowRight size={24} color="#9333EA" />
              </View>

              <View className="space-y-2">
                {plan.features.map((feature, index) => (
                  <View key={index} className="flex-row items-center">
                    <Check size={16} color="#10B981" />
                    <Text className="ml-2 text-gray-700 text-sm">{feature}</Text>
                  </View>
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <Text className="text-lg font-semibold mb-3">Free vs Premium</Text>
          
          <View className="space-y-3">
            <View>
              <Text className="font-medium text-gray-800 mb-1">Free Version</Text>
              <Text className="text-sm text-gray-600">• Up to 5 habits</Text>
              <Text className="text-sm text-gray-600">• Basic analytics</Text>
              <Text className="text-sm text-gray-600">• Limited AI coach</Text>
            </View>
            
            <View>
              <Text className="font-medium text-purple-600 mb-1">Premium Version</Text>
              <Text className="text-sm text-gray-600">• Unlimited habits</Text>
              <Text className="text-sm text-gray-600">• Advanced AI coaching</Text>
              <Text className="text-sm text-gray-600">• Detailed analytics & reports</Text>
              <Text className="text-sm text-gray-600">• Custom themes</Text>
              <Text className="text-sm text-gray-600">• Cloud sync</Text>
            </View>
          </View>
        </View>

        <Text className="text-center text-gray-500 text-xs mb-4">
          Subscription auto-renews. Cancel anytime.
        </Text>
      </View>
    </ScrollView>
  );
};

export default PremiumScreen;
