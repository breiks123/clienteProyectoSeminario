import { StackActions } from "@react-navigation/routers";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import { ProductoDetail } from "../screens/ProductoDetailScreen";
import { ProductoImagen } from "../screens/ProductoImagen";
import { Producto } from "../screens/ProductoScreen";
import { Productos } from "../screens/ProductosScreen";
import { ReunionDetalle } from "../screens/Reuniones/ReunionDetalleScreeen";
import { Reuniones } from "../screens/Reuniones/ReunionesScreen";
import { ReunionNueva } from "../screens/Reuniones/ReunionNuevaScreen";

export type ReunionesStackParams={
    ReunionesScreen:undefined,
    ReunionScreen:{id?:string,name?:string},
    ReunionDetailScreen:{id?:string,name?:string}
}
const Stack = createStackNavigator<ReunionesStackParams>();


export const ReunionesNavigator = ()=>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="ReunionesScreen" component={Reuniones} options={{title:"REUNIONES"}}/>
            <Stack.Screen name="ReunionScreen" component={ReunionNueva} options={{title:"Nueva Reunion"}}/>
            <Stack.Screen name="ReunionDetailScreen" component={ReunionDetalle} options={{title:"Detalle de la reunion"}}/>
        </Stack.Navigator>
    )
}