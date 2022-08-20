import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const NoResultPage = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white items-center justify-center">
      <Image
        source={require("../assets/noresult.png")}
        className="h-96 w-full"
      />
      <Text className="text-lg font-bold pt-2 pb-1">No results to show</Text>
      <Text className="text-md text-gray-400 pb-2">
        Please check spelling or try different keywords
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="bg-[#00CCBB] rounded-full px-4 py-2 text-white text-center"
      >
        <Text className="font-bold text-white">Search Again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NoResultPage;
