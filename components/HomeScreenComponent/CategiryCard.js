import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../../Sanity";
import { useNavigation } from "@react-navigation/native";

const CategiryCard = ({ imgUrl, title }) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity activeOpacity={0.6} className="relative mr-2" onPress = {()=> navigation.navigate("Search", {title,imgUrl})}>
      <Image source={{ uri: urlFor(imgUrl).url() }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategiryCard;
