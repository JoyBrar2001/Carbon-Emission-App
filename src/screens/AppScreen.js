import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appDetails } from '../constants/data';
import { useNavigation } from '@react-navigation/native';

Entypo.loadFont();
FontAwesome.loadFont();

const AppScreen = () => {
  const navigation = useNavigation();

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
        <Text className="text-white text-2xl font-semibold mb-2">Your Apps</Text>
        {appDetails.map((app, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate("AppDetailsScreen", app)}
              className="w-full justify-center items-center flex-row px-4 my-2 py-2 rounded-xl bg-white/20"
            >
              <View className="flex justify-center items-center">
                <Image source={app.imageSrc} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
              </View>
              <View className="flex-1 pl-4 gap-1">
                <View className="flex-row justify-between">
                  <Text className="text-white font-semibold">{app.name}</Text>
                  <Text className="text-gray-200 font-normal">{app.percentage}%</Text>
                </View>
                <View className="w-full h-[10px] bg-white rounded-full overflow-hidden">
                  <View className={`flex-1 bg-blue-600 rounded-full`} style={{ width: `${app.percentage}%` }}></View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

export default AppScreen

const styles = StyleSheet.create({
  scrollViewStyles: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    paddingTop: 24,
    paddingHorizontal: 10,
  },
})