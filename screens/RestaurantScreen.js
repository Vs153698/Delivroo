import { ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import RestaurantHeader from "../components/RestaurantScreenComponent/RestaurantHeader";
import MenuCard from "../components/RestaurantScreenComponent/MenuCard";
import BasketIcon from "../components/RestaurantScreenComponent/BasketIcon";
import { selectBasketItems } from "../features/basketSlice";
import { useSelector, useDispatch } from "react-redux";
import RestaurantFooter from "../components/RestaurantFooter";
import HeaderTitle from "../components/HeaderTitle";
import { SearchCircleIcon } from "react-native-heroicons/outline";
import { setRestaurant } from "../features/restaurantSlice";

const RestaurantScreen = () => {
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
      license,
      city,
    },
  } = useRoute();
  const dispatch = useDispatch();

  const naviagtion = useNavigation();
  const items = useSelector(selectBasketItems);
  const [statusBarStyle, setStatusBarStyle] = useState("light");
  const [isBackButtonVisible, setIsBackButtonVisible] = useState(true);
  useEffect(() => {
    dispatch(
      setRestaurant({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        license,
        city,
      })
    );
  }, []);
  useLayoutEffect(() => {
    naviagtion.setOptions({
      headerShown: false, // hide header
    });
  }, []);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 0) {
            setStatusBarStyle("dark");
            setIsBackButtonVisible(false);
            naviagtion.setOptions({
              headerShown: true, // show header
              headerTitle: () => <HeaderTitle name={title} address={address} />,
              headerRight: () => (
                <TouchableOpacity>
                  <SearchCircleIcon size={30} color="#00BBCC" />
                </TouchableOpacity>
              ),
              headerTitleAlign: "center",
            });
          } else {
            setStatusBarStyle("light");
            setIsBackButtonVisible(true);
            naviagtion.setOptions({
              headerShown: false, // hide header
            });
          }
        }}
      >
        <ExpoStatusBar style={statusBarStyle} />
        <RestaurantHeader
          imgUrl={imgUrl}
          title={title}
          rating={rating}
          genre={genre}
          address={address}
          short_description={short_description}
          isBackButtonVisible={isBackButtonVisible}
        />
        <MenuCard dishes={dishes} restaurantId={id} restaurantName={title} />
        <RestaurantFooter
          address={address}
          restaurantName={title}
          license={license}
          city={city}
        />
      </ScrollView>
      {items.length > 0 && <BasketIcon />}
    </>
  );
};

export default RestaurantScreen;
