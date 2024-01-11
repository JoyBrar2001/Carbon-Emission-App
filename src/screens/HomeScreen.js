import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

Entypo.loadFont();
FontAwesome.loadFont();

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 text-white bg-black pt-2">
      <StatusBar style='light' />
      <View className="flex flex-row px-6 py-3 justify-between bg-[#4B8E4B] rounded-full">
        <View>
          <Entypo name="leaf" size={32} color="white" />
        </View>
        <View className="flex flex-row justify-center items-center gap-2">
          <Text className="text-white font-bold text-xl">Hello, User</Text>
          <FontAwesome name="user-circle-o" size={32} color="white" />
        </View>
      </View>

      <ScrollView vertical showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewStyles}>
        <Text className="text-white text-2xl font-semibold">Dashboard</Text>
        <View className="flex flex-col w-full gap-4 mt-2 px-4 pb-20">
          <View className="bg-white/20 flex flex-col gap-1 justify-center items-center rounded-xl px-6 py-3">
            <Text className="text-white text-lg font-medium">Idle Appliactions</Text>
            <Text className="text-white text-4xl font-semibold">10</Text>
            <TouchableOpacity className="bg-black rounded-full px-4 py-1.5">
              <Text className="text-white">Close Apps</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white/20 flex flex-col gap-1 justify-center items-center rounded-xl px-6 py-3">
            <Text className="text-white text-lg font-medium">Usused Startup apps</Text>
            <Text className="text-white text-4xl font-semibold">6</Text>
            <TouchableOpacity className="bg-black rounded-full px-4 py-1.5">
              <Text className="text-white">Configure</Text>
            </TouchableOpacity>
          </View>
          <View className="bg-white/20 flex flex-col gap-1 justify-center items-center rounded-xl px-6 py-3">
            <Text className="text-white text-lg font-medium">Charger on for</Text>
            <Text className="text-white text-4xl font-semibold">12 Hrs</Text>
          </View>
          <View className="bg-white/20 flex flex-col gap-1 justify-center items-center rounded-xl px-6 py-3">
            <Text className="text-white text-lg font-medium">Accessories on</Text>
            <Text className="text-white text-4xl font-semibold">3 Hrs</Text>
          </View>
          <View className="bg-white/20 flex flex-col gap-1 justify-center items-center rounded-xl px-6 py-3">
            <Text className="text-white text-lg font-medium">Laptop idle time</Text>
            <Text className="text-white text-4xl font-semibold">10 Hrs</Text>
          </View>
          <View className="bg-white/20 flex flex-col gap-1 justify-center items-center rounded-xl px-6 py-3">
            <Text className="text-white text-lg font-medium">Last Restart</Text>
            <Text className="text-white text-4xl font-semibold">24 Hrs ago</Text>
          </View>
          <View className="bg-white/20 flex flex-col gap-1 justify-center items-center rounded-xl px-6 py-3">
            <Text className="text-white text-lg font-medium">Title</Text>
            <Text className="text-white text-4xl font-semibold">info</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  scrollViewStyles: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    paddingTop: 24,
  },
  mainContainer: {
    display: 'grid',
  }
});