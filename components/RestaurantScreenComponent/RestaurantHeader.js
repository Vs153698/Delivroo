import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { QuestionMarkCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../Sanity";

const RestaurantHeader = ({
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  isBackButtonVisible,
}) => {
  const naviagtion = useNavigation();
  return (
    <View>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        {isBackButtonVisible && (
          <TouchableOpacity
            onPress={() => naviagtion.goBack()}
            className="absolute top-10 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftIcon size={20} color="#00CCBB" />
          </TouchableOpacity>
        )}
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-1">
              <StarIcon size={22} color="green" opacity={0.5} />
              <Text className="text-gray-500 text-xs">
                {" "}
                <Text className="text-green-500">{rating}</Text> · {genre}
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
              <Text className="text-gray-500 text-xs">Nearby · {address}</Text>
            </View>
          </View>
          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>
        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
          <QuestionMarkCircleIcon size={20} color="gray" opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon size={20} color="#00CCBB" opacity={0.6} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RestaurantHeader;
