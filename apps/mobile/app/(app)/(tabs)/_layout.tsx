import { Tabs } from 'expo-router';
import React from 'react';

import { microColors, StyledTabBarIcon } from '@micro/core-components';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: microColors.blue,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <StyledTabBarIcon
              name={focused ? 'home-outline' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="higienization"
        options={{
          title: 'Higienization',
          tabBarIcon: ({ color, focused }) => (
            <StyledTabBarIcon
              name={focused ? 'star' : 'star-outline'}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
