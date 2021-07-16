import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button,FlatList } from "react-native";

import MyColors from "../../colors/MyColors";

import { PedidosStackParams } from "../../navigation/PedidosNavigator";
import { PedidosContext } from "../../context/PedidosContext/PedidosContext";



interface Props extends StackScreenProps<PedidosStackParams,'PedidosScreen'>{};
export const PedidosScreen=({navigation}:Props)=>{

    const {pedidos}=useContext(PedidosContext);
    
    
    return(
        <View 
            style={{
               flex:1,
                marginHorizontal:5
            }}
        >
            <FlatList 
                data={pedidos}
                //keyExtractor={(p)=>p._id}
                keyExtractor={(item) => item._id}
                renderItem={({item})=>(
                    <>
                    <View style={style.itemImage}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={
                            ()=>navigation.navigate('PedidoDetalleScreen',{
                                id:item._id,
                                name:item.nombreCLiente
                            })
                        }
                        >
                        <View style={style.itemContainer}> 
                            <Text style={style.itemText}>nombre cliente: {item.nombreCLiente}</Text>
                            <Text style={style.itemText}>fecha de entrega: {item.fechaEntrega}</Text>
                            <Text style={style.itemText}>Pago total:  {item.pagoTotal}</Text>
                            
                        </View>

                    </TouchableOpacity>
                 
                        
                        
                </View>
                    </>
                )
                }
                ItemSeparatorComponent={()=>(
                    <View style={style.itemSeparator}/> 
                )}
            />
            <View style={style.buttonCreate}> 
                    <Button
                        color={MyColors.buttonColor}
                        
                        title='Nuevo Pedido'
                        onPress={()=>{navigation.navigate('PedidoSelClienteScreen',{})}}
                    />
                        
                    
            </View>
            

        </View>
       
    )
}
const style = StyleSheet.create({
    itemContainer:{
        backgroundColor:MyColors.backGroundColor,
        width:500
        
    },
    itemText:{
        fontSize:17,
        color:MyColors.buttonColor
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
    },
    newItemButton:{
        color:MyColors.buttonColor,
        fontSize:30
    },
    buttonCreate:
    {
        justifyContent:'center',
        alignContent:'center',
        marginBottom:10,
        marginTop:10
    }
});