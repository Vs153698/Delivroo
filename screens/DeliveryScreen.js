import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../features/basketSlice";
import { XIcon } from "react-native-heroicons/solid";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import * as Progress from "react-native-progress";
import MapComponent from "../components/DeliveryScreenComponent/MapComponent";

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const items = useSelector(selectBasketItems);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="bg-[#00CCBB] flex-1 pt-10">
      <ExpoStatusBar style="auto" />
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg font-semibold">
            Order Help
          </Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between ">
            <View>
              <Text className=" text-gray-400 text-lg">Estimate Arrival</Text>
              <Text className="text-4xl font-bold">45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {items[0].restaurantName} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapComponent items={items} />
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-20">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg font-bold">Vaibhav Singh</Text>
          <Text className="text-gray-400 font-semibold">Your Rider</Text>
        </View>
        <TouchableOpacity>
          <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
