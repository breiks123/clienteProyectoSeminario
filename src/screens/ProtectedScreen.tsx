import React from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MyColors from "../colors/MyColors";
import { AuthContext } from "../context/authContext/AuthContext";

export const Protected =() =>{
    const {user,logout}=useContext(AuthContext);

    return(
        <View style={styles.container}>
            <Text>
                {JSON.stringify(user,null,5)}
            </Text>
            <Button title='logout'
                    onPress={logout}
                    color={MyColors.buttonColor}
                    >

            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1,
        alignItems:'center'
    }
});