import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { Protected } from '../screens/ProtectedScreen';
import MyColors from '../colors/MyColors';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoadingScreen } from '../screens/LoadingScreen';
import { ClienteTabs } from './ClienteTabs';
import { MainTab } from './MainTab';

const Stack = createStackNavigator();

export const Navigator=()=> {

  const {status,user}=useContext(AuthContext);
  if(status==='verificando')
    return(<LoadingScreen/>)

  
  return (
    <Stack.Navigator
        screenOptions={{headerShown:false,
                cardStyle:{
                    backgroundColor:MyColors.backGroundColor
                }
        }}
        >
          {
            (status ==='auntenticado')
            ?(
              <>
                <Stack.Screen name="Clientes" component={MainTab} />
              </>
            )
            :
            (
              <Stack.Screen name="Login" component={LoginScreen} />
            )
          }
      
      
      
    </Stack.Navigator>
  )
}