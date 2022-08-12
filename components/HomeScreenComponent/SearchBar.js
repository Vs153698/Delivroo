import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { AdjustmentsIcon, SearchIcon } from 'react-native-heroicons/outline'

const SearchBar = () => {
    return (
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 items-center">
                <SearchIcon color="gray" size={20} />
                <TextInput  keyboardType='default' placeholder="Restaurants and cuisines" />
            </View>
            <TouchableOpacity activeOpacity={.5}  >
            <AdjustmentsIcon color="#00CCBB" size={25}  />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar