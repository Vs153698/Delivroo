import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategiryCard from "./CategiryCard";
import { Sanityclient } from "../../Sanity";
import { CategoryFetchQuery } from "../../SanityQueries";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    Sanityclient.fetch(CategoryFetchQuery)
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {categories?.map((category) => (
        <CategiryCard key={category._id} imgUrl={category?.image} title={category?.name} />
      ))}
    </ScrollView>
  );
};

export default Categories;
