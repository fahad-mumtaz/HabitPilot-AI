import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: 'monthly' | 'yearly';
  features: string[];
  popular?: boolean;
}

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Premium',
    price: 4.99,
    duration: 'monthly',
    features: [
      'Unlimited habits',
      'Advanced AI Coach',
      'Detailed analytics',
      'Custom themes',
      'Cloud sync',
      'Export data',
      'Smart reminders'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly Premium',
    price: 39.99,
    duration: 'yearly',
    features: [
      'Unlimited habits',
      'Advanced AI Coach',
      'Detailed analytics',
      'Custom themes',
      'Cloud sync',
      'Export data',
      'Smart reminders',
      'Save 33% vs monthly'
    ],
    popular: true
  }
];

export class SubscriptionService {
  private static instance: SubscriptionService;
  private isPremium: boolean = false;
  private subscriptionExpiry: Date | null = null;

  static getInstance(): SubscriptionService {
    if (!SubscriptionService.instance) {
      SubscriptionService.instance = new SubscriptionService();
    }
    return SubscriptionService.instance;
  }

  async initializeSubscription(): Promise<void> {
    try {
      const storedPremium = await AsyncStorage.getItem('isPremium');
      const storedExpiry = await AsyncStorage.getItem('subscriptionExpiry');
      
      this.isPremium = storedPremium === 'true';
      if (storedExpiry) {
        this.subscriptionExpiry = new Date(storedExpiry);
        
        // Check if subscription has expired
        if (this.subscriptionExpiry < new Date()) {
          this.isPremium = false;
          await AsyncStorage.setItem('isPremium', 'false');
          await AsyncStorage.removeItem('subscriptionExpiry');
        }
      }
    } catch (error) {
      console.error('Error initializing subscription:', error);
    }
  }

  isPremiumUser(): boolean {
    return this.isPremium;
  }

  async activatePremium(plan: SubscriptionPlan): Promise<void> {
    try {
      const expiryDate = new Date();
      if (plan.duration === 'monthly') {
        expiryDate.setMonth(expiryDate.getMonth() + 1);
      } else {
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
      }

      this.isPremium = true;
      this.subscriptionExpiry = expiryDate;

      await AsyncStorage.setItem('isPremium', 'true');
      await AsyncStorage.setItem('subscriptionExpiry', expiryDate.toISOString());
    } catch (error) {
      console.error('Error activating premium:', error);
      throw error;
    }
  }

  async cancelPremium(): Promise<void> {
    try {
      this.isPremium = false;
      this.subscriptionExpiry = null;
      
      await AsyncStorage.setItem('isPremium', 'false');
      await AsyncStorage.removeItem('subscriptionExpiry');
    } catch (error) {
      console.error('Error canceling premium:', error);
      throw error;
    }
  }

  getSubscriptionExpiry(): Date | null {
    return this.subscriptionExpiry;
  }

  getDaysRemaining(): number | null {
    if (!this.subscriptionExpiry) return null;
    
    const now = new Date();
    const diffTime = this.subscriptionExpiry.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return Math.max(0, diffDays);
  }
}

export const useSubscription = () => {
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);

  useEffect(() => {
    const subscriptionService = SubscriptionService.getInstance();
    
    const initialize = async () => {
      await subscriptionService.initializeSubscription();
      setIsPremium(subscriptionService.isPremiumUser());
      setDaysRemaining(subscriptionService.getDaysRemaining());
      setIsLoading(false);
    };

    initialize();
  }, []);

  const activatePremium = async (plan: SubscriptionPlan) => {
    const subscriptionService = SubscriptionService.getInstance();
    await subscriptionService.activatePremium(plan);
    setIsPremium(true);
    setDaysRemaining(subscriptionService.getDaysRemaining());
  };

  const cancelPremium = async () => {
    const subscriptionService = SubscriptionService.getInstance();
    await subscriptionService.cancelPremium();
    setIsPremium(false);
    setDaysRemaining(null);
  };

  return {
    isPremium,
    isLoading,
    daysRemaining,
    activatePremium,
    cancelPremium,
    plans: SUBSCRIPTION_PLANS
  };
};
