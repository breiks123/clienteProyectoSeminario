import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { ImagePickerResponse } from "react-native-image-picker";
import apiCasaReal from "../../api/casaRealApi";
import { itemPedido, Pedido, Producto, ProductoG, ProductosResponse } from "../../interfaces/responseIntefaces";


type PedidosContextProps ={
    pedidos:Pedido[]
    loadPedidos: () => Promise<void>;
    addPedido: ( dataProducto:Pedido ) => Promise<void>;
    addItem:(data:itemPedido)=>Promise<void>
    
}


export const PedidosContext = createContext({}as PedidosContextProps);


export const PedidosProvider = ({children}:any)=>{
    const [pedidos, setPedidos] = useState <Pedido[]>([]);
    const [listaItem, setListaItem] = useState <itemPedido[]>([]);

    useEffect(()=>{
        loadPedidos();
    },[]);
    const loadPedidos = async() => {
        
        const respon = await apiCasaReal.get<any>('/api/pedidos');
        setPedidos([...respon.data.serverResponse]);
        //console.log(respon.data)
    }
    const addItem=async(data:itemPedido)=>{
            //pedido?.productosPedido?.push(data);
            setListaItem([...listaItem,data]);
    }

    const addPedido = async(  dataPedido:Pedido ) => {
        const respon = await apiCasaReal.post('/api/pedidos',{
            nombreCLiente:dataPedido.nombreCLiente,
            nombreVendedor:dataPedido.nombreVendedor,
            vendedorId:dataPedido.vendedorId,
            clienteId:dataPedido.clienteId,
            fechaEntrega:dataPedido.fechaEntrega,
            pagoTotal:dataPedido.pagoTotal,
            metodoPago:dataPedido.metodoPago,//efectivo-cuenta bancaria
            productosPedido:listaItem
        });
        setPedidos([...pedidos,respon.data.serverResponse])
    }

    return(
        <PedidosContext.Provider value={{
                pedidos,
                loadPedidos,
                addPedido,
                addItem
        }}
        >
            {children}
        </PedidosContext.Provider>

    )
}