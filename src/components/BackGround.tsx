import React from 'react'
import { View } from 'react-native'
import MyColors from '../colors/MyColors'

export const Background = () => {
    return (
        <View 
            style={{
                position: 'absolute',
                backgroundColor: MyColors.titleColor,
                top: -350,
                width: 1000,
                height: 1200,
                transform: [
                    { rotate: '-70deg' }
                ]
            }}
        />
    )
}