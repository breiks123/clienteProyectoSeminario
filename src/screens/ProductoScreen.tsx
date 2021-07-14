import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet,Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { add } from "react-native-reanimated";
import MyColors from "../colors/MyColors";
import { ProductsContext } from "../context/productsContext/ProductsContext";
import { useForm } from "../hooks/useForm";
import { ProductoG } from "../interfaces/responseIntefaces";
import { ProductsStackParams } from "../navigation/ProductsNavigator";

interface Props extends StackScreenProps<ProductsStackParams,'ProductScreen'>{};
export const Producto=({navigation,route}:Props)=>{

    const {addProduct}=useContext(ProductsContext);

    const {nombreProducto,precio,stock,estado,categoria,onChange}=useForm({
        nombreProducto:'',
        precio:'',
        stock:'',
        estado:true,
        categoria:''

    })
    const save=()=>{
        var dataTosend:ProductoG={
            nombreProducto:nombreProducto,
            precio:precio,
            stock:stock,
            estado:true,
            categoria:categoria
        }
        addProduct(dataTosend);
        navigation.navigate('ProductsScreen');

    }
    const {name}=route.params;
    useEffect(()=>{
        navigation.setOptions({
            title:(name)? name:'NUEVO PRODUCTO'
        })
    },[]);
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>
                    Nombre del producto
                </Text>
                <TextInput
                    placeholder='Producto'
                    style={styles.inputStyle}
                    onChangeText={ (value) => onChange(value, 'nombreProducto') }
                    value={ nombreProducto }
                />

                <Text style={styles.label}>
                    categoria
                </Text>
                <TextInput
                    placeholder='Categoria'
                    style={styles.inputStyle}
                    value={ categoria }
                    onChangeText={ (value) => onChange(value, 'categoria') }
                />

                <Text style={styles.label}>
                    Precio por unidad
                </Text>
                <TextInput
                    placeholder='solo numeros'
                    style={styles.inputStyle}
                    onChangeText={ (value) => onChange(value, 'precio') }
                    value={ precio }
                />

                <Text style={styles.label}>
                    Stock
                </Text>
                <TextInput
                    placeholder='solo Numeros'
                    style={styles.inputStyle}
                    value={stock}
                    onChangeText={ (value) => onChange(value, 'stock') }
                />
                
                <Button 
                    title='Guardar'
                    color={MyColors.buttonColor}
                    onPress={save}
                    
                ></Button>
                <View style={styles.buttonContainerStyle}>
                    <Button
                        color={MyColors.buttonColor}
                        title='Sacar Imagen'
                        onPress={()=>{}}
                        >

                    </Button>
                    <View style={styles.buttoStyle}/>
                    <Button
                    color={MyColors.buttonColor}
                        title="Galeria"
                        onPress={()=>{}}
                    >

                    </Button>
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
        marginRight:10
    }
});