import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <TouchableOpacity activeOpacity={0.4}>
          <ArrowRightIcon color="#00CCBB" />
        </TouchableOpacity>
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }} // inner scroll view style
        showsHorizontalScrollIndicator={false}
        className="pt-4" // overall scroll view style
      >
        {restaurants.length > 0 && restaurants?.map((restaurant) => (
          <RestaurantCard
            key={restaurant?._id}
            id={restaurant?._id}
            imgUrl={restaurant?.image}
            title={restaurant?.name}
            rating={restaurant?.rating}
            genre={restaurant?.genre}
            address={restaurant?.address}
            short_description={restaurant?.short_description}
            dishes={restaurant?.dishes}
            long={restaurant?.long}
            lat={restaurant?.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
