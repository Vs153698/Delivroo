import { View, Text, Image } from "react-native";
import React from "react";
import { LocationMarkerIcon } from "react-native-heroicons/solid";
const data = [
  { id: 1, key: "All prices are set directly by the restaurant." },
  {
    id: 2,
    key: "All nutritional information is indicative, values are per serve as shared by the restaurant and may vary depending on the ingredients and portion size.",
  },
  {
    id: 3,
    key: "An average active adult requires 2,000 kcal energy per day. however, calories needs may vary.",
  },
];

const RestaurantFooter = ({ address, restaurantName, license, city }) => {
  return (
    <View className="pt-4 px-4 pr-4">
      <Text className="text-md text-gray-600 font-bold">Disclaimer :</Text>
      <View className="mt-2 border-b border-gray-300">
        {data.map((item) => (
          <View
            className={`flex-row space-x-1 mt-1 ${
              item.id === data.length && "mb-4"
            }`}
            key={item.id}
          >
            <Text>👉</Text>
            <Text className="text-xs  text-gray-500 px-1 pr-3 list-disc">
              {item.key}
            </Text>
          </View>
        ))}
      </View>
      <Text className="pt-4 pb-4 border-b text-gray-500 border-gray-300 ">
        <Text> 📍 </Text>
        License No. : {license}
      </Text>
      <View>
        <Text className="font-bold text-lg mt-4 text-gray-600">
          {restaurantName}
        </Text>
        <Text className=" text-xs text-gray-500">(Outlet : {city})</Text>
        <View className="flex-row items-center  mt-1 ">
          <LocationMarkerIcon size={14} color="gray" />
          <Text className="text-sm text-gray-500 "> {address} </Text>
        </View>
      </View>
    </View>
  );
};

export default RestaurantFooter;
