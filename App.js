import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ProgressScreen from './screens/ProgressScreen';
import GamesScreen from './screens/GamesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            height: 90,
            paddingBottom: 20,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
          },

          tabBarActiveTintColor: '#5B8CFF',
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="home"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Progreso"
          component={ProgressScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="bar-chart"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Juegos"
          component={GamesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="game-controller"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Configuración"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="settings"
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}