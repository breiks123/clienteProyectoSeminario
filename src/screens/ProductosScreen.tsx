import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button,FlatList } from "react-native";
//import {  } from "react-native-gesture-handler";
import MyColors from "../colors/MyColors";
import { ProductsContext } from "../context/productsContext/ProductsContext";
import { ProductsStackParams } from "../navigation/ProductsNavigator";

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



interface Props extends StackScreenProps<ProductsStackParams,'ProductsScreen'>{};
export const Productos=({navigation}:Props)=>{

    const {products,loadProducts}=useContext(ProductsContext);
    useEffect(()=>{
        navigation.setOptions({
            headerRight:()=>(
                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={{marginRight:10}}
                    onPress={()=>navigation.navigate('ProductScreen',{})}
                >
                    <Text>Nuevo Producto</Text>    
                </TouchableOpacity>
            )
        })
    },[])
    
    return(
        <View 
            style={{
               flex:1,
                marginHorizontal:5
            }}
        >
            <FlatList 
                data={products}
                //keyExtractor={(p)=>p._id}
                keyExtractor={(item) => item._id}
                renderItem={({item})=>(
                    <>
                    <View style={style.itemImage}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={
                            ()=>navigation.navigate('ProductDetailScreen',{
                                id:item._id,
                                name:item.nombreProducto
                            })
                        }
                        >
                        <View style={style.itemContainer}> 
                            <Text style={style.itemText}>nombre: {item.nombreProducto}</Text>
                            <Text style={style.itemText}>Precio: {item.precio}</Text>
                            <Text style={style.itemText}>En stok:  {item.stock}</Text>
                            
                        </View>

                    </TouchableOpacity>
                    <View style={style.imageSeparator}></View>
                        {
                            
                            (item.uriImagen != undefined)
                            ?(
                                <Image
                                source={{uri:('http://192.168.0.20:8000'+item.uriImagen)}}
                                style={{
                                    width:90,
                                    height:80
                                }}
                                />

                                
                            )
                            :
                            (
                                <Button
                                    
                                    color={MyColors.buttonColor}
                                    title='subir Imagen'
                                    onPress={()=>navigation.navigate('ProductoImagen',{
                                        id:item._id,
                                        name:item.nombreProducto
                                    })}
                                    >

                                </Button>
                            )
                            
                        }
                        
                        </View>
                    </>
                )
                }
                ItemSeparatorComponent={()=>(
                    <View style={style.itemSeparator}/> 
                )}
            />

        </View>
       
    )
}
const style = StyleSheet.create({
    itemContainer:{
        backgroundColor:MyColors.backGroundColor,
        width:280
        
    },
    itemText:{
        fontSize:20
    },
    itemSeparator:{
        borderBottomWidth:2,
        marginVertical:5,
        //backgroundColor:MyColors.backGroundColor,
        borderBottomColor:MyColors.buttonColor
    },
    imageSeparator:{
        
    },
    itemImage:{
        
        flexDirection:'row',
        //justifyContent:'space-between',
        alignItems:'stretch'
    }
});