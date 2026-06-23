import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import BooksScreen from '../screens/BooksScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BookDetailsScreen from '../screens/BookDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BooksStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1D3557' }, headerTintColor: '#FFF' }}>
      <Stack.Screen name="BooksMain" component={BooksScreen} options={{ title: 'Explore Library' }} />
      <Stack.Screen name="BookDetails" component={BookDetailsScreen} options={{ title: 'Book Information' }} />
    </Stack.Navigator>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#1D3557' }, headerTintColor: '#FFF' }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Library Dashboard' }} />
      <Stack.Screen name="BookDetails" component={BookDetailsScreen} options={{ title: 'Book Information' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name !== 'HomeTab' && route.name !== 'BooksTab',
        headerStyle: { backgroundColor: '#1D3557' },
        headerTintColor: '#FFF',
        tabBarActiveTintColor: '#E63946',
        tabBarInactiveTintColor: '#A8DADC',
        tabBarStyle: { backgroundColor: '#1D3557', paddingBottom: 4, height: 60 },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeStack} 
        options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="BooksTab" 
        component={BooksStack} 
        options={{ title: 'Books', tabBarIcon: ({ color, size }) => <Ionicons name="book" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{ title: 'Categories', tabBarIcon: ({ color, size }) => <Ionicons name="grid" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'My Profile', tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }} 
      />
    </Tab.Navigator>
  );
}