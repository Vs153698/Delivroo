import { SafeAreaView, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/HomeScreenComponent/Header";
import SearchBar from "../components/HomeScreenComponent/SearchBar";
import Categories from "../components/HomeScreenComponent/Categories";
import FeaturedRow from "../components/HomeScreenComponent/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-10">
      <Header />
      <SearchBar />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        className="bg-gray-100"
      >
        <Categories />
        <FeaturedRow
          id="1"
          title="Featured"
          description="Paid and free food delivery"
        />
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Everyday food and great discounts"
        />
        <FeaturedRow
          id="3"
          title="Offers near you!"
          description="Why not try something new today"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
