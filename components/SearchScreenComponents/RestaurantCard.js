import { View, Text, Image } from "react-native";
import React from "react";
import { urlFor } from "../../Sanity";
import DishRow from "../RestaurantScreenComponent/DishRow";

const RestaurantCard = ({ item }) => {
  return (
    <View>
      <View className={`w-full mb-3 rounded-lg bg-white shadow`}>
        <Image
          source={{ uri: urlFor(item.image).url() }}
          className="h-44 w-full rounded-t-lg opacity-95 "
        />
        <Text className=" text-lg font-bold px-3 py-2 ">{item.name}</Text>
        <Text className=" text-md text-gray-400 px-3 pb-3 ">
          {item.short_description}
        </Text>
        {item?.dishes?.map((dish) => (
          <View key={dish._id} >
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              image={dish.image}
              description={dish.short_description}
              price={dish.price}
              restaurantId={item._id}
              restaurantName={item.name}
              lat={item.lat}
              long={item.long}
              city={item.city}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default RestaurantCard;
