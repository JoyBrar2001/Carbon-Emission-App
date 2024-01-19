import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appDetails } from '../constants/data';
import { useNavigation } from '@react-navigation/native';

const AppDetailsScreen = ({ route, navigation }) => {
  const app = route.params;
  // console.log(app);
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

      <View className="mt-8">
        <Text className="text-white text-3xl font-semibold text-center">{app.name}</Text>
        <View className="flex justify-center items-center mx-auto mt-4">
          <Image source={app.imageSrc} style={{ height: 120, width: 120, resizeMode: 'contain' }} />
        </View>
      </View>

      <View className="px-6 mt-4">
        <View className="flex flex-row gap-4 justify-center items-center">
          <View className="flex flex-1 justify-center items-center bg-white/20 py-2 rounded-lg">
            <Text className="text-white text-sm font-medium text-white/90">Storage</Text>
            <Text className="text-white text-lg"><Text className="font-bold">{app.storage}</Text> MB</Text>
          </View>
          <View className="flex flex-1 justify-center items-center bg-white/20 py-2 rounded-lg">
            <Text className="text-white text-sm font-medium text-white/90">Time used</Text>
            <Text className="text-white text-lg"><Text className="font-bold">{app.usage}</Text> hrs</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AppDetailsScreen

const styles = StyleSheet.create({})