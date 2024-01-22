import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContributionGraph, LineChart, PieChart } from 'react-native-chart-kit';
import { weekLabels } from '../constants/data';

Entypo.loadFont();
FontAwesome.loadFont();

const StatsScreen = () => {
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
        <Text className="text-white text-2xl font-semibold mb-2">Your Statistics</Text>
        <View className="mx-auto">
          <ContributionGraph
            values={
              [
                { date: "2017-01-02", count: 1 },
                { date: "2017-01-03", count: 2 },
                { date: "2017-01-04", count: 3 },
                { date: "2017-01-05", count: 4 },
                { date: "2017-01-06", count: 5 },
                { date: "2017-01-30", count: 2 },
                { date: "2017-01-31", count: 3 },
                { date: "2017-03-01", count: 2 },
                { date: "2017-04-02", count: 4 },
                { date: "2017-03-05", count: 2 },
                { date: "2017-02-30", count: 4 }
              ]
            }
            endDate={new Date("2017-04-05")}
            numDays={105}
            width={Dimensions.get("window").width * 0.9}
            height={220}
            chartConfig={{
              backgroundColor: "#4B8E4B",
              backgroundGradientFrom: "#4B8E4B",
              backgroundGradientTo: "#4B8E4B",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              style: {
                borderRadius: 10,
                paddingRight: 10,
              },
            }}
          />
        </View>
        <Text className="text-white text-2xl font-semibold mb-2 mt-6">Your weekly usage</Text>
        <View className="mx-auto">
          <LineChart
            data={{
              labels: weekLabels,
              datasets: [
                {
                  data: [7.8, 8.5, 9, 12, 4.2, 10.9, 3]
                }
              ]
            }}
            width={Dimensions.get("window").width * 0.9}
            height={240}
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
        <Text className="text-white text-2xl font-semibold mb-2 mt-6">Your weekly usage</Text>
        <View className="mx-auto">
          <View className=" rounded-lg">

          <PieChart 
            data={[
              {
                name: "Snapchat",
                population: 26,
                color: "rgba(255, 255, 255, 0.3)",
                legendFontColor: "#FFFFFF",
                legendFontSize: 15
              },
              {
                name: "YouTube",
                population: 23,
                color: "rgba(255, 255, 255, 0.45)",
                legendFontColor: "#FFFFFF",
                legendFontSize: 15
              },
              {
                name: "Instagram",
                population: 12,
                color: "rgba(255, 255, 255, 0.6)",
                legendFontColor: "#FFFFFF",
                legendFontSize: 15
              },
              {
                name: "Google Maps",
                population: 10,
                color: "rgba(255, 255, 255, 0.75)",
                legendFontColor: "#FFFFFF",
                legendFontSize: 15
              },
              {
                name: "LinkedIn",
                population: 8,
                color: "rgba(255, 255, 255, 0.9)",
                legendFontColor: "#FFFFFF",
                legendFontSize: 15
              }
            ]}
            width={Dimensions.get('window').width*0.95}
            height={240}
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
            accessor={"population"}
            backgroundColor={"#4B8E4B"}
            center={[10, 10]}
            absolute
            style={{
              borderRadius: 16,
              marginTop: 8,
            }}
            />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default StatsScreen

const styles = StyleSheet.create({
  scrollViewStyles: {
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 100,
  },
})