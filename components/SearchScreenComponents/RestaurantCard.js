import { View, Text, Image } from "react-native";
import React from "react";
import { urlFor } from "../../Sanity";

const RestaurantCard = ({ item }) => {
  return (
    <View className={`h-80 w-full mb-3 rounded-lg bg-white shadow-md`}>
      <Image
        source={{ uri: urlFor(item.image).url() }}
        className="h-44 w-full rounded-t-lg opacity-95 "
      />
      <Text className=" text-lg font-bold px-3 py-2 ">{item.name}</Text>
      <Text className=" text-md text-gray-400 px-3 ">
        {item.short_description}
      </Text>
    </View>
  );
};

export default RestaurantCard;
