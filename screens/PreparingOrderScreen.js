import { SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const naviagtion = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      naviagtion.navigate("Delivery");
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/preparing.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-center font-bold my-10 text-gray-800 text-lg"
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>
      <Progress.Circle
        size={60}
        indeterminate={true}
        color="#00CCBB"
        borderWidth={4}
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
