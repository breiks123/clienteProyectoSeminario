import React, { useContext,useEffect } from "react";
import { View,Button,StyleSheet } from "react-native";
import MyColors from "../../colors/MyColors";
//import { ProductsContext } from "../context/productsContext/ProductsContext";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { StackScreenProps } from "@react-navigation/stack";
//import { ProductsStackParams } from "../navigation/ProductsNavigator";
import {ClientesPotencialesStackParams} from "../../navigation/ClientesPotencialesNavigation"
import { ClientesContext } from "../../context/clientsContext/ClientsContext";
interface Props extends StackScreenProps<ClientesPotencialesStackParams,'ClientePotencialImagen'>{};


export const  ClientePotencialImagen=({navigation,route}:Props)=>{

    const {clientes,uploadImageCliente}=useContext(ClientesContext);
    

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
            
            uploadImageCliente(resp,id!);
            
            //console.log ('este es el id del producto  ',id);
            navigation.navigate('ClientesPotencialesScreen');
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