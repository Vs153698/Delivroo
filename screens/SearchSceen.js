import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CategoryDataFetch } from "../SanityQueries";
import { Sanityclient } from "../Sanity";
import { XCircleIcon } from "react-native-heroicons/solid";
import RestaurantCard from "../components/SearchScreenComponents/RestaurantCard";
import { selectBasketItems } from "../features/basketSlice";
import BasketIcon from "../components/RestaurantScreenComponent/BasketIcon";
import { useSelector } from "react-redux";
import NoResultPage from "../components/NoResultPage";

const SearchSceen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title, imgUrl } = route.params;
  const [FetchedData, setFetchedData] = useState([]);
  const [isCancelled, setIsCancelled] = useState(false);
  const items = useSelector(selectBasketItems);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    Sanityclient.fetch(CategoryDataFetch(isCancelled ? "" : title))
      .then((data) => {
        setFetchedData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    setIsCancelled(false);
  }, [title]);
  return (
    <>
    {FetchedData.length > 0 ? <SafeAreaView className="pt-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center px-4 py-2">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 bg-gray-100 rounded-full mr-3 "
          >
            <XCircleIcon size={40} color="#00CCBB" />
          </TouchableOpacity>
          <View className="flex-1 border border-gray-300 flex-row items-center rounded-full p-2 px-4">
            <Text
              className={`text-xl flex-1 ${
                isCancelled && "text-gray-400"
              } font-bold`}
            >
              {isCancelled ? "Search Result" : title}
            </Text>
            <TouchableOpacity
              onPress={() => (setIsCancelled(true), setFetchedData([]))}
            >
              <XCircleIcon size={20} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-4">
          {FetchedData?.map((item) => (
            <View key={item._id}>
              {item._type === "restaurant" && <RestaurantCard item={item} />}
            </View>
          ))}
        </View>
      </ScrollView>
      {items.length > 0 && <BasketIcon />}
    </SafeAreaView>
  : <NoResultPage/>  
  }
    </>
  );
};

export default SearchSceen;
