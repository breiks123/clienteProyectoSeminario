import 'react-native-gesture-handler';
import React, { Children } from 'react';
import { View,Text } from 'react-native';
import { Navigator } from './src/navigation/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/authContext/AuthContext';

const AppState=({children}:any)=>{
  return(
    <AuthProvider>
      {children}
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
