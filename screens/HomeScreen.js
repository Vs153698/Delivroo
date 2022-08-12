import { SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/HomeScreenComponent/Header'
import SearchBar from '../components/HomeScreenComponent/SearchBar'
import Categories from '../components/HomeScreenComponent/Categories'


const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
    return (
        <SafeAreaView className="bg-white pt-10">
            <Header />
            <SearchBar />
            <ScrollView contentContainerStyle={{
                paddingBottom: 100,
            }} className="bg-gray-100">
                <Categories />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen