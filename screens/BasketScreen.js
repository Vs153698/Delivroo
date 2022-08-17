import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useMemo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { selectrestaurantItems } from "../features/restaurantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../Sanity";
import Currency from "react-currency-formatter";

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
            {items.length > 0 && (
              <Text className="text-center text-gray-400">
                {items[0].restaurantName}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className={`rounded-full bg-gray-100 absolute ${
            items.length > 0 ? "top-5" : "top-2"
          } right-5`}
        >
          <XCircleIcon color="#00CCBB" height={50} width={50} />
        </TouchableOpacity>
        {items.length > 0 && (
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
        )}
        {items.length > 0 ? (
          <ScrollView className="divide-y divide-gray-200">
            {Object.entries(groupedItemsList)?.map(([key, items]) => (
              <View
                key={key}
                className="flex-row items-center space-x-3 bg-white py-2 px-5"
              >
                <Text className="text-[#00CCBB]">{items.length} x</Text>
                <Image
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text className="text-gray-600">
                  <Currency quantity={items[0]?.price} currency="INR" />
                </Text>
                <TouchableOpacity>
                  <Text
                    className="text-[#00CCBB] text-xs"
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        ) : (
          <View className="flex-1 flex-col items-center justify-center">
            <Text className="text-center text-gray-400 text-lg">
              No items in basket
            </Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="py-2"
            >
              <Text className="text-center text-[#00CCBB]">
                Continue Shopping
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {items.length > 0 && (
          <>
            <View className="p-5 bg-white mt-5 space-y-4">
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Subtotal</Text>
                <Text className="text-gray-400">
                  <Currency quantity={total} currency="INR" />
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-400">Delivery Fee</Text>
                <Text className="text-gray-400">
                  <Currency quantity={59.99} currency="INR" />
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text>Order Total</Text>
                <Text className="font-extrabold">
                  <Currency quantity={total + 59.99} currency="INR" />
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.6} className="rounded-lg bg-[#00BBCC] p-4">
                <Text className="text-center text-lg text-white font-bold">
                  Place Order
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
