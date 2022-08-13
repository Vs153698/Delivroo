import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ id, title, description }) => {
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
        <RestaurantCard
        id = "1"
        imgUrl = "https://assets.cntraveller.in/photos/6182a42236c22389b7a54bf8/master/pass/New%20BLR%20Res.%20lead%20Image.jpg"
        title = "Mad over the moon"
        rating = "4.5"
        genre = "Chinese"
        address = "123 Main St, New York"
        short_description = "This is a short description"
        dishes = {["Beef", "Chicken", "Pork", "Vegetarian"]}
        long = {20}
        lat = {20}
        />
        <RestaurantCard
        id = "2"
        imgUrl = "https://b.zmtcdn.com/data/pictures/5/20089345/78ccb33e96fa7a0cc6b450d81f75e61a_featured_v2.jpg"
        title = "Mad over the moon"
        rating = "4.5"
        genre = "Chinese"
        address = "123 Main St, New York"
        short_description = "This is a short description"
        dishes = {["Beef", "Chicken", "Pork", "Vegetarian"]}
        long = {20}
        lat = {20}
        />
        <RestaurantCard
        id = "3"
        imgUrl = "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"
        title = "Mad over the moon"
        rating = "4.5"
        genre = "Chinese"
        address = "123 Main St, New York"
        short_description = "This is a short description"
        dishes = {["Beef", "Chicken", "Pork", "Vegetarian"]}
        long = {20}
        lat = {20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
