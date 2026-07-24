import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MessageSquare, Send, Bot, User } from 'lucide-react-native';

export default function AICoachScreen() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I'm your AI habit coach. I can help you build better habits, stay motivated, and overcome challenges. What would you like to work on today?",
      timestamp: new Date(),
    },
    {
      id: 2,
      role: 'user',
      content: "I'm struggling to maintain my meditation habit consistently",
      timestamp: new Date(),
    },
    {
      id: 3,
      role: 'assistant',
      content: "I understand that consistency can be challenging with meditation. Here are some strategies that might help:\n\n1. **Start smaller**: Try just 2-3 minutes instead of 10\n2. **Link it to an existing habit**: Meditate right after brushing your teeth\n3. **Use reminders**: Set a gentle alarm for the same time daily\n4. **Be kind to yourself**: Missing a day doesn't mean failure\n\nWhich of these resonates most with you?",
      timestamp: new Date(),
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      role: 'user',
      content: message,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setMessage('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        role: 'assistant',
        content: "That's a great question! Based on your habit data, I can see you've been doing well with your reading habit. Let me provide some personalized advice...",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const renderMessage = (msg: any) => (
    <View key={msg.id} style={[
      styles.messageContainer,
      msg.role === 'user' ? styles.userMessage : styles.assistantMessage
    ]}>
      <View style={styles.messageHeader}>
        <View style={[
          styles.avatar,
          msg.role === 'user' ? styles.userAvatar : styles.assistantAvatar
        ]}>
          {msg.role === 'user' ? (
            <User size={16} color="#FFFFFF" />
          ) : (
            <Bot size={16} color="#FFFFFF" />
          )}
        </View>
        <Text style={styles.messageRole}>
          {msg.role === 'user' ? 'You' : 'AI Coach'}
        </Text>
      </View>
      <Text style={styles.messageContent}>{msg.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MessageSquare size={32} color="#3B82F6" />
        <Text style={styles.title}>AI Coach</Text>
        <Text style={styles.subtitle}>Get personalized habit advice and motivation</Text>
      </View>

      <ScrollView style={styles.messagesContainer}>
        {messages.map(renderMessage)}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ask for habit advice or motivation..."
          value={message}
          onChangeText={setMessage}
          multiline
          maxLength={500}
          placeholderTextColor="#9CA3AF"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Send size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.quickActionsTitle}>Quick Actions</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionText}>Weekly plan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionText}>Motivation boost</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionText}>Habit tips</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionButton}>
            <Text style={styles.quickActionText}>Progress review</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
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
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
    marginTop: 12,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  messagesContainer: {
    flex: 1,
    padding: 16,
  },
  messageContainer: {
    marginBottom: 16,
    maxWidth: '90%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#3B82F6',
    borderRadius: 16,
    borderBottomRightRadius: 4,
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    borderBottomLeftRadius: 4,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  userAvatar: {
    backgroundColor: '#1D4ED8',
  },
  assistantAvatar: {
    backgroundColor: '#10B981',
  },
  messageRole: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  messageContent: {
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingBottom: 12,
    color: '#111827',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#F9FAFB',
    alignItems: 'flex-end',
    gap: 12,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    maxHeight: 100,
    color: '#111827',
  },
  sendButton: {
    backgroundColor: '#3B82F6',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActions: {
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  quickActionsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    marginBottom: 8,
  },
  quickActionButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  quickActionText: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '500',
  },
});
