import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";

import MyColors from "../../colors/MyColors";
import { AuthContext } from "../../context/authContext/AuthContext";

import { ClientesContext } from "../../context/clientsContext/ClientsContext";
import { useForm } from "../../hooks/useForm";
import { ClienteG } from "../../interfaces/responseIntefaces";


import {ClientesPotencialesStackParams}from '../../navigation/ClientesPotencialesNavigation'


interface Props extends StackScreenProps<ClientesPotencialesStackParams,'ClientePotencialScreen'>{};
export const ClientePotencial=({navigation,route}:Props)=>{

    const {addCliente}=useContext(ClientesContext);
    const {user}=useContext(AuthContext);

    const {nombre,apellidos,email,ci,zona,calleNumero,telefono,tipoCliente,onChange}=useForm({
        
        nombre:'',
        apellidos:'',
        email:'',
        telefono:'',
        ci:'',
        zona:'',
        calleNumero:'',
        tipoCliente:'',
        claseCliente:false

    })
    const save=()=>{
        var dataTosend:ClienteG={
            nombre:nombre,
            apellidos:apellidos,
            email:email,
            telefono:telefono,
            ci:ci,
            zona:zona,
            calleNumero:calleNumero,
            tipoCliente:tipoCliente,
            claseCliente:false
        }
        
        if(user!==null&&user!=='no data')
            addCliente(dataTosend,user.id!);
        navigation.navigate('ClientesPotencialesScreen');

    }
    const {name}=route.params;
    useEffect(()=>{
        navigation.setOptions({
            title:(name)? name:'NUEVO CLIENTE'
        })
    },[]);
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>
                    Nombre
                </Text>
                <TextInput
                    placeholder='Nombre(s)'
                    style={styles.inputStyle}
                    onChangeText={ (value) => onChange(value, 'nombre') }
                    value={ nombre }
                />

                <Text style={styles.label}>
                    Apellidos
                </Text>
                <TextInput
                    placeholder='Apellidos'
                    style={styles.inputStyle}
                    value={ apellidos }
                    onChangeText={ (value) => onChange(value, 'apellidos') }
                />

                <Text style={styles.label}>
                    Email
                </Text>
                <TextInput
                    placeholder='Email'
                    style={styles.inputStyle}
                    onChangeText={ (value) => onChange(value, 'email') }
                    value={ email }
                />

                <Text style={styles.label}>
                    CI
                </Text>
                <TextInput
                    placeholder='CI'
                    style={styles.inputStyle}
                    value={ci}
                    onChangeText={ (value) => onChange(value, 'ci') }
                />
                <Text style={styles.label}>
                    Telefono
                </Text>
                <TextInput
                    placeholder='Telefono'
                    style={styles.inputStyle}
                    value={telefono}
                    onChangeText={ (value) => onChange(value, 'telefono') }
                />
                <Text style={styles.label}>
                    Zona
                </Text>
                <TextInput
                    placeholder='Zona'
                    style={styles.inputStyle}
                    value={zona}
                    onChangeText={ (value) => onChange(value, 'zona') }
                />
                <Text style={styles.label}>
                    Calle y numero
                </Text>
                <TextInput
                    placeholder='Calle y numero'
                    style={styles.inputStyle}
                    value={calleNumero}
                    onChangeText={ (value) => onChange(value, 'calleNumero') }
                />
                <Text style={styles.label}>
                    Tipo de Cliente 
                </Text>
                <TextInput
                    placeholder='Mayorista/Minorista/Otros'
                    style={styles.inputStyle}
                    value={tipoCliente}
                    onChangeText={ (value) => onChange(value, 'tipoCliente') }
                />
                <View style={styles.buttoStyle}>
                <Button 
                    title='Guardar'
                    color={MyColors.buttonColor}
                    onPress={save}
                    
                ></Button>
                </View>
               
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:MyColors.backGroundColor,
        flex:1,
        marginTop:5,
        marginHorizontal:10
    },
    label:{
        color:MyColors.buttonColor,
        fontSize:17
    },
    inputStyle:{
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:20,
        borderColor:MyColors.buttonColor,
        height:40,
        marginTop:5,
        marginBottom:10
    },
    buttonContainerStyle:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'center',
        marginRight:5,
        marginHorizontal:10
    },
    buttoStyle:{
        marginBottom:10
    }
});