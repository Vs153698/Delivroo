import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../../Sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemWithId,
} from "../../features/basketSlice";

const DishRow = ({ id, name, description, price, image,restaurantId }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemWithId(state, id));
  const [isPressed, setIsPressed] = useState(false);
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image,restaurantId }));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id, name, description, price, image }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        activeOpacity={0.6}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="INR" />
            </Text>
          </View>
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              className="h-20 w-20 p-4 bg-gray-300"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity
              disabled={items?.length === 0}
              onPress={removeItemFromBasket}
            >
              <MinusCircleIcon
                size={40}
                color={items?.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
            <Text>{items?.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
