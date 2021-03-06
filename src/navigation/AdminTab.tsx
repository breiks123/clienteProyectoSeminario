import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Usuarios } from '../screens/UsersScreen';
import { Protected } from '../screens/ProtectedScreen';
import { Productos } from '../screens/ProductosScreen';
import { ProductsNavigator } from './ProductsNavigator';

const Tab = createMaterialTopTabNavigator();

export const AdminTab=()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Usuarios" component={Usuarios} />
      <Tab.Screen name="Productos" component={ProductsNavigator} />
      <Tab.Screen name="Mi perfil" component={Protected} />
    </Tab.Navigator>
  );
} 