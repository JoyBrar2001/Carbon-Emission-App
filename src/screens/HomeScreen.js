import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { homeScreenTiles } from '../constants/data';

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

      <View style={styles.scrollViewStyles}>
        <Text className="text-white text-2xl font-semibold">Dashboard</Text>
        <View className="flex flex-col w-full gap-4 mt-2 pb-20">

          <FlatList
            data={homeScreenTiles}
            numColumns={2}
            keyExtractor={item => item.title}
            contentContainerStyle={{ marginHorizontal: 'auto', paddingTop: 5, paddingBottom: 25 }}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => {
              return (
                <LinearGradient
                  colors={['#FFFFFF33', '#FFFFFF11']}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  style={{ width: Dimensions.get('window').width * 0.45 }}
                  className="flex flex-col justify-center items-center rounded-xl overflow-hidden py-3 mx-auto mb-4"
                >
                  <Text className="text-white text-lg font-medium text-center mt-2">{item.item.title}</Text>
                  <Text className={`text-white ${item.item.subtitle?.length > 4 ? 'text-2xl' : 'text-4xl'}  font-semibold text-center mt-2`}>{item.item.value}{item.item.subtitle ? ` ${item.item.subtitle}` : ''}</Text>
                  {item.item.button ?
                    <TouchableOpacity className="bg-black rounded-full mt-2 px-4 py-1.5">
                      <Text className="text-white">{item.item.button}</Text>
                    </TouchableOpacity>
                    : <View className="pt-6"></View>
                  }
                </LinearGradient>
              )
            }}
          />
        </View>
      </View>
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
    flex: 1,
  },
  mainContainer: {
    display: 'grid',
  }
});