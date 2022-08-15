import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../Sanity";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import RestaurantHeader from "../components/RestaurantScreenComponent/RestaurantHeader";
import MenuCard from "../components/RestaurantScreenComponent/MenuCard";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();
  const naviagtion = useNavigation();
  useLayoutEffect(() => {
    naviagtion.setOptions({
      headerShown: false, // hide header
    });
  }, []);
  return (
    <ScrollView>
      <ExpoStatusBar style="light" />
      <RestaurantHeader
        imgUrl={imgUrl}
        title={title}
        rating={rating}
        genre={genre}
        address={address}
        short_description={short_description}
      />
      <MenuCard dishes = {dishes} />
    </ScrollView>
  );
};

export default RestaurantScreen;
