import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useContext } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, Button,FlatList } from "react-native";

import MyColors from "../colors/MyColors";

import { ClientesStackParams } from "../navigation/ClientesRegularesNavigation";
import { ClientesContext } from "../context/clientsContext/ClientsContext";



interface Props extends StackScreenProps<ClientesStackParams,'ClientesScreen'>{};
export const ClientesRegulares=({navigation}:Props)=>{

    const {clientes}=useContext(ClientesContext);
    
    
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
                            ()=>navigation.navigate('ClienteDetailScreen',{
                                id:item._id,
                                name:item.nombre
                            })
                        }
                        >
                        <View style={style.itemContainer}> 
                            <Text style={style.itemText}>nombre: {item.nombre}</Text>
                            <Text style={style.itemText}>Apellidos: {item.apellidos}</Text>
                            <Text style={style.itemText}>Correo electronico:  {item.email}</Text>
                            
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
                            :
                            (
                                <Button
                                    
                                    color={MyColors.buttonColor}
                                    title='subir Imagen'
                                    onPress={()=>navigation.navigate('ClienteImagen',{
                                        id:item._id,
                                        name:item.nombre
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
            <View style={style.buttonCreate}> 
                    <Button
                        color={MyColors.buttonColor}
                        
                        title='Nuevo Cliente'
                        onPress={()=>{navigation.navigate('ClienteScreen',{})}}
                    />
                        
                    
            </View>
            

        </View>
       
    )
}
const style = StyleSheet.create({
    itemContainer:{
        backgroundColor:MyColors.backGroundColor,
        width:280
        
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