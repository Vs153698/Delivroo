import { View, Text, SafeAreaView, Image, StatusBar } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    return (
        <SafeAreaView>
             <ExpoStatusBar style="dark" />
            <View className="mt-10 ml-2 flex-row pb-3 items-center mx-4 space-x-2"  >
                <Image source={{uri: "https://links.papareact.com/wru"}} className="h-7 w-7 bg-gray-300 rounded-full"  />
                <View>
                    <Text className="font-bold text-gray-400 text-xs" >Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen