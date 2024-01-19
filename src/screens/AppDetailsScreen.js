import { StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appDetails } from '../constants/data';
import { useNavigation } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';

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
        <TouchableOpacity onPress={() => navigation.goBack()} className="z-10 absolute left-2 bg-white rounded-full">
          <Entypo name="chevron-left" size={40} color="black" />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-semibold text-center">{app.name}</Text>
        <View className="flex justify-center items-center mx-auto mt-4">
          <Image source={app.imageSrc} style={{ height: 120, width: 120, resizeMode: 'contain' }} />
        </View>
      </View>

      <View className="px-6 mt-4">
        <View className="flex flex-row gap-4 justify-center items-center mb-4">
          <View className="flex flex-1 justify-center items-center bg-white/20 py-2 rounded-lg">
            <Feather name="arrow-up-right" size={24} color="white" />
            <Text className="text-white text-lg">Open</Text>
          </View>
          <View className="flex flex-1 justify-center items-center bg-white/20 py-2 rounded-lg">
            <Feather name="stop-circle" size={24} color="white" />
            <Text className="text-white text-lg">Force Stop</Text>
          </View>
          <View className="flex flex-1 justify-center items-center bg-white/20 py-2 rounded-lg">
            <Feather name="trash" size={24} color="white" />
            <Text className="text-white text-lg">Uninstall</Text>
          </View>
        </View>

        <View className="flex flex-row gap-4 justify-center items-center mb-4">
          <View className="flex flex-1 justify-center items-center bg-white/20 py-2 rounded-lg">
            <Text className="text-white text-sm font-medium text-white/90">Storage</Text>
            <Text className="text-white text-lg"><Text className="font-bold">{app.storage}</Text> MB</Text>
          </View>
          <View className="flex flex-1 justify-center items-center bg-white/20 py-2 rounded-lg">
            <Text className="text-white text-sm font-medium text-white/90">Time used</Text>
            <Text className="text-white text-lg"><Text className="font-bold">{app.usage}</Text> hrs</Text>
          </View>
        </View>

        <View className="mx-auto">
          <LineChart
            data={{
              labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              datasets: [
                {
                  data: [
                    Math.random() * 24,
                    Math.random() * 24,
                    Math.random() * 24,
                    Math.random() * 24,
                    Math.random() * 24,
                    Math.random() * 24,
                    Math.random() * 24,
                  ]
                }
              ]
            }}
            width={Dimensions.get("window").width*0.9}
            height={220}
            yAxisSuffix=" hrs"
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: "#4B8E4B",
              backgroundGradientFrom: "#4B8E4B",
              backgroundGradientTo: "#4B8E4B",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#4B8E4B"
              }
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AppDetailsScreen

const styles = StyleSheet.create({})