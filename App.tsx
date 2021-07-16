import 'react-native-gesture-handler';
import React, { Children } from 'react';
import { View,Text } from 'react-native';
import { Navigator } from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/authContext/AuthContext';
import { ProductsProvider } from './src/context/productsContext/ProductsContext';
import { ClientesProvider } from './src/context/clientsContext/ClientsContext';
import { PedidosProvider } from './src/context/PedidosContext/PedidosContext';

const AppState=({children}:any)=>{
  return(
    <AuthProvider>
      <ProductsProvider>
        <ClientesProvider>
            <PedidosProvider>
              {children}
            </PedidosProvider>
        </ClientesProvider>
      </ProductsProvider>
      
    </AuthProvider>
  )
}

const App =()=>{
  return(
    <NavigationContainer>
      <AppState>
        <Navigator />

      </AppState>
    </NavigationContainer>
  )
}

export default App;
