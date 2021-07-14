import React, { useContext,useEffect } from "react";
import { View,Button,StyleSheet } from "react-native";
import MyColors from "../colors/MyColors";
import { ProductsContext } from "../context/productsContext/ProductsContext";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { StackScreenProps } from "@react-navigation/stack";
import { ProductsStackParams } from "../navigation/ProductsNavigator";

interface Props extends StackScreenProps<ProductsStackParams,'ProductoImagen'>{};


export const  ProductoImagen=({navigation,route}:Props)=>{

    const {products,uploadImage}=useContext(ProductsContext);
    

    const takeImage=()=>{
        const{id}=route.params;
        console.log('entrando a camara');
        launchCamera({
            mediaType:'photo',
            quality:0.5
        },(resp)=>{
            if(resp.didCancel)return;
            //if(!resp.assets[0].uri)return;
            //console.log('data de id',id);
            
            uploadImage(resp,id!);
            
            //console.log ('este es el id del producto  ',id);
            navigation.navigate('ProductsScreen');
        });
    }

    return(
        <View style={style.container}>
            <Button 
            title='Camara'
            onPress={takeImage}
            color={MyColors.buttonColor}
            >

            </Button>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor:MyColors.backGroundColor,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center'
    }
});