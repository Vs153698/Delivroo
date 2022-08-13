import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategiryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategiryCard;
