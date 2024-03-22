import React from 'react';
import { View, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#fff'} />
    </Pressable>
  );
};

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
 
    <Tabs
    screenOptions={{
      headerStyle: {
        height: 100,
        backgroundColor: 'Black',
        shadowColor: 'white',
        
      },
     
      headerTintColor: '#404040', // Set header text color to black
    }}
  >
        <Tabs.Screen
          name="home"
          options={{
            headerTitle: 'Home',
            tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
            tabBarLabel: 'Home',
          }}
          redirect={!isSignedIn}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            headerTitle: 'Booking',
            tabBarIcon: ({ color, size }) => <Ionicons name="star" size={size} color={color} />,
            tabBarLabel: 'Wishlist',
            headerRight: () => <LogoutButton />,
          }}
          redirect={!isSignedIn}
        />
        <Tabs.Screen
          name="search"
          options={{
            headerTitle: 'Health-Sync',
            tabBarIcon: ({ color, size }) => <Ionicons name="search" size={size} color={color} />,
            tabBarLabel: 'Search',
            headerRight: () => <LogoutButton />,
          }}
          redirect={!isSignedIn}
        />
        <Tabs.Screen
          name="profile"
          options={{
            headerTitle: 'Health-Sync',
            tabBarIcon: ({ color, size }) => <Ionicons name="person-sharp" size={size} color={color} />,
            tabBarLabel: 'Profile',
            headerRight: () => <LogoutButton />,
          }}
          redirect={!isSignedIn}
        />
      </Tabs>
 
  );
};

export default TabsPage;
