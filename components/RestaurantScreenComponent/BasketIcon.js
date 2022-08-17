import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../../features/basketSlice";
import Currency from "react-currency-formatter";
import { useNavigation } from "@react-navigation/native";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const BasketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket", items)}
        className="bg-[#00CCBB] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        activeOpacity={0.6}
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2 rounded-lg ">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={BasketTotal} currency="INR" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
