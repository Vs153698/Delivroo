import { View, Text } from "react-native";
import React from "react";

const HeaderTitle = ({ name, address }) => {
  return (
    <View>
      <Text className="text-lg font-bold text-center">{name}</Text>
      <Text className="text-xs font-semibold text-center text-gray-400">{address} · 39 min.</Text>
    </View>
  );
};

export default HeaderTitle;
