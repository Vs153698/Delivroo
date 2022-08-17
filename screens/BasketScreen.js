import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectrestaurantItems } from "../features/restaurantSlice";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { XCircleIcon } from "react-native-heroicons/solid";

const BasketScreen = () => {
  const [groupedItemsList, setGroupedItemsList] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const restaurant = useSelector(selectrestaurantItems);
  const total = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  // Here we are grouping items with same id together
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsList(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white pt-8">
      <ExpoStatusBar style="dark" />
      <View className="flex-1 bg-gray-100">
        <View className="border-b border-[#00CCBB] bg-white shadow-xs p-5">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {items[0].restaurantName}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-full bg-gray-100 absolute top-5 right-5"
        >
          <XCircleIcon color="#00CCBB" height={50} width={50} />
        </TouchableOpacity>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full "
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
