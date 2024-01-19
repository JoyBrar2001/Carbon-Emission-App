import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/screens/HomeScreen';
import AppScreen from './src/screens/AppScreen';
import StatsScreen from './src/screens/StatsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign, Entypo } from '@expo/vector-icons';
import AppDetailsScreen from './src/screens/AppDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          borderRadius: 20,
          height: 60,
          backgroundColor: "#4B8E4B",
          bottom: 0,
        },
        tabBarInactiveTintColor: "#ffffff99",
        tabBarActiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name='home' size={32} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Apps"
        component={AppScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="appstore-o" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AppDetailsScreen"
          component={AppDetailsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})