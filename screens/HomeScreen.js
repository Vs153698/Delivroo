import { SafeAreaView, ScrollView, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/HomeScreenComponent/Header";
import SearchBar from "../components/HomeScreenComponent/SearchBar";
import Categories from "../components/HomeScreenComponent/Categories";
import FeaturedRow from "../components/HomeScreenComponent/FeaturedRow";
import { Sanityclient } from "../Sanity";
import { FeaturedDataFetchQuery } from "../SanityQueries";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [FeaturedCategory, setFeaturedCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    Sanityclient.fetch(FeaturedDataFetchQuery)
      .then((data) => {
        setFeaturedCategory(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
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
        {FeaturedCategory?.map((category) => (
          <FeaturedRow
            key={category?._id}
            id={category?._id}
            title={category?.name}
            description={category?.short_description}
            restaurants={category?.restaurants || []}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
