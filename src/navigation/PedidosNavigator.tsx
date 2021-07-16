import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { PedidoCrearScreen } from "../screens/Pedidos/PedidoCrearScreen";
import { PedidosDetalle } from "../screens/Pedidos/PedidoDetalle";
import { PedidosSelClienteScreen } from "../screens/Pedidos/PedidoSelClienteScreen";
import { PedidosScreen } from "../screens/Pedidos/PedidosScreen";
import { SeleccionarProductosScreen } from "../screens/Pedidos/SeleccionProductosScreen";

export type PedidosStackParams={
    PedidosScreen:undefined,
    PedidoSelClienteScreen:{id?:string,name?:string},
    PedidoCrearScreen:{id?:string,name?:string}
    SeleccionProductosScreen:{id?:string,name?:string},
    PedidoDetalleScreen:{id?:string,name?:string}
    
}
const Stack = createStackNavigator<PedidosStackParams>();


export const PedidosNavigator = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="PedidosScreen" component={PedidosScreen} options={{title:"PEDIDOS"}}/>
            <Stack.Screen name="PedidoSelClienteScreen" component={PedidosSelClienteScreen} options={{title:"Seleccione un cliente"}}/>
            <Stack.Screen name="PedidoCrearScreen" component={PedidoCrearScreen} options={{title:"Crear Pedido"}}/>
            <Stack.Screen name="SeleccionProductosScreen" component={SeleccionarProductosScreen} options={{title:"Seleccione Productos"}}/>
            <Stack.Screen name="PedidoDetalleScreen" component={PedidosDetalle} options={{title:"Detalle del pedido"}}/>
        </Stack.Navigator>
    )
}