
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { ImagePickerResponse } from "react-native-image-picker";
import apiCasaReal from "../../api/casaRealApi";
import { Producto, ProductoG, ProductosResponse } from "../../interfaces/responseIntefaces";


type ProductsContextProps ={
    products:Producto[]
    loadProducts: () => Promise<void>;
    addProduct: ( dataProducto:ProductoG ) => Promise<void>;
    updateProduct: ( productName: string, productId: string ) => Promise<void>;
    deleteProduct: ( id: string ) => Promise<void>;
    loadProductById: ( id: string ) => Promise<Producto>;
    uploadImage: ( data: any, id: string ) => Promise<void>; // TODO: cambiar ANY
    
}


export const ProductsContext = createContext({}as ProductsContextProps);


export const ProductsProvider = ({children}:any)=>{
    const [products, setProducts] = useState <Producto[]>([]);

    useEffect(()=>{
        loadProducts();
    },[]);
    const loadProducts = async() => {
        
        const respon = await apiCasaReal.get<any>('/api/productos');
        setProducts([...respon.data.serverResponse]);
        //console.log(respon.data)
    }

    const addProduct = async(  dataProducto:ProductoG ) => {
        const respon = await apiCasaReal.post('/api/productos',{
            nombreProducto:dataProducto.nombreProducto,
            categoria:dataProducto.categoria,
            estado:dataProducto.estado,
            precio:dataProducto.precio,
            stock:dataProducto.stock
        });
        setProducts([...products,respon.data.serverResponse])
    }

    const updateProduct = async( productName: string, productId: string ) =>{
        
    }

    const deleteProduct = async( id: string ) => {
        
    }

    const loadProductById = async( id: string ) => {
        throw new Error('Not implemented');
    };

    // TODO: cambiar ANY
    const uploadImage = async( data: ImagePickerResponse, id: string ) => {
        const fileToUpload ={
            uri:data.assets[0].uri,
            type:data.assets[0].type,
            name:data.assets[0].fileName,
        }
        console.log('este es el archivo para subir ',fileToUpload)
        const formData = new FormData();
        formData.append('image1',fileToUpload);
        //console.log("este es el end point::: ",`/api/uploadImagenProducto/${id}`)
        const resp= await apiCasaReal.post(`/api/uploadImagenProducto/${id}`,formData);
        console.log('esta es la respuesta del sevidor :::',resp)
        loadProducts();
    }

    return(
        <ProductsContext.Provider value={{
            products,
            loadProductById,
            addProduct,
            loadProducts,
            updateProduct,
            deleteProduct,
            uploadImage


        }}
        >
            {children}
        </ProductsContext.Provider>

    )
}