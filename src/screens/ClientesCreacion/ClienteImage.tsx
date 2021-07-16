import React, { useContext,useEffect } from "react";
import { View,Button,StyleSheet } from "react-native";
import MyColors from "../../colors/MyColors";
//import { ProductsContext } from "../context/productsContext/ProductsContext";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { StackScreenProps } from "@react-navigation/stack";
//import { ProductsStackParams } from "../navigation/ProductsNavigator";
import {ClientesStackParams} from "../../navigation/ClientesRegularesNavigation"
import { ClientesContext } from "../../context/clientsContext/ClientsContext";
interface Props extends StackScreenProps<ClientesStackParams,'ClienteImagen'>{};


export const  ClienteImagen=({navigation,route}:Props)=>{

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
            navigation.navigate('ClientesScreen');
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