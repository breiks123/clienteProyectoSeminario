import React from "react";
import { View,ActivityIndicator } from "react-native";
import MyColors from "../colors/MyColors";

export const LoadingScreen=()=>{
    return(
        <View style={
            {
                justifyContent:'center',
                flex:1,
                alignItems:'center'
            }
        }>
            <ActivityIndicator
                size={50}
                color={MyColors.buttonColor}
            />
        </View>
    )
}