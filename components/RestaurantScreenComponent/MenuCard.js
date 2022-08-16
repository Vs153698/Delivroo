import { View, Text } from "react-native";
import React from "react";
import DishRow from "./DishRow";

const MenuCard = ({ dishes, restaurantId, restaurantName }) => {
  return (
    <View>
      <Text className="px-4 pt-6 mb-3 font-bold text-xl ">Menu</Text>
      {dishes?.map((dish) => (
        <DishRow
          key={dish?._id}
          id={dish?._id}
          name={dish?.name}
          description={dish?.short_description}
          price={dish?.price}
          image={dish?.image}
          restaurantId={restaurantId}
          restaurantName={restaurantName}
        />
      ))}
    </View>
  );
};

export default MenuCard;
1;
