import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategiryCard from "./CategiryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategiryCard
        imgUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
        title={"Others"}
      />
      <CategiryCard
        imgUrl="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
        title={"Royal"}
      />
      <CategiryCard
        imgUrl="https://assets.cntraveller.in/photos/6182a42236c22389b7a54bf8/master/pass/New%20BLR%20Res.%20lead%20Image.jpg"
        title={"Korean"}
      />
      <CategiryCard
        imgUrl="https://b.zmtcdn.com/data/pictures/5/20089345/78ccb33e96fa7a0cc6b450d81f75e61a_featured_v2.jpg"
        title={"Chinease"}
      />
      <CategiryCard
        imgUrl="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2947%2Ftrend20200930101748.jpg"
        title={"Thai"}
      />
      <CategiryCard
        imgUrl="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?cs=srgb&dl=pexels-chan-walrus-941861.jpg&fm=jpg"
        title={"Continental"}
      />
      <CategiryCard
        imgUrl="https://cdn.downtoearth.org.in/library/large/2019-05-31/0.68487000_1559290735_70-20190615-dte-english.jpg"
        title={"Indian"}
      />
      <CategiryCard
        imgUrl="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80"
        title={"Others"}
      />
      <CategiryCard
        imgUrl="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2947%2Ftrend20200930101748.jpg"
        title={"Thai"}
      />
    </ScrollView>
  );
};

export default Categories;
