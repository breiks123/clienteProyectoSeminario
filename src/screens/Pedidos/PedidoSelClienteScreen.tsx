import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button,FlatList } from "react-native";
import MyColors from "../../colors/MyColors";
import { ClientesContext } from "../../context/clientsContext/ClientsContext";
import { PedidosStackParams } from "../../navigation/PedidosNavigator";




interface Props extends StackScreenProps<PedidosStackParams,'PedidosScreen'>{};
export const PedidosSelClienteScreen=({navigation}:Props)=>{

    const {clientes,loadAllClientes}=useContext(ClientesContext);
    
    return(
        <View 
            style={{
               flex:1,
                marginHorizontal:5
            }}
        >
            <FlatList 
                data={clientes}
                //keyExtractor={(p)=>p._id}
                keyExtractor={(item) => item._id}
                renderItem={({item})=>(
                    <>
                    <View style={style.itemImage}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={
                            ()=>navigation.navigate('SeleccionProductosScreen',{
                                id:item._id,
                                name:item.nombre
                            })
                        }
                        >
                        <View style={style.itemContainer}> 
                            <Text style={style.itemText}>nombre: {item.nombre}</Text>
                            <Text style={style.itemText}>Apellidos: {item.apellidos}</Text>
                            <Text style={style.itemText}>Direccion:  {item.calleNumero}</Text>
                            
                        </View>

                    </TouchableOpacity>
                    <View style={style.imageSeparator}></View>
                        {
                            
                            (item.uriavatar != undefined)
                            ?(
                                <Image
                                source={{uri:('http://192.168.0.20:8000'+item.uriavatar)}}
                                style={{
                                    width:90,
                                    height:80
                                }}
                                />

                                
                            )
                            :(
                                console.log("test")
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