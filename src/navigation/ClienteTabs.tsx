import React from 'react';
import { Text } from 'react-native';
//import { ClientRegular } from '../screens/ClientsRegulares';
import { AgendaReunion } from '../screens/AgendaReuniones';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyColors from '../colors/MyColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ClientesNavigator } from './ClientesRegularesNavigation';
import { ClientesPotencialesNavigator } from './ClientesPotencialesNavigation';
import { ReunionesNavigator } from './ReunionesNavigator';

const Tab = createMaterialTopTabNavigator();

export const ClienteTabs=()=> {
  return (
    <Tab.Navigator
      tabBarOptions={{
        pressColor:MyColors.buttonColor,
        indicatorStyle:{
          backgroundColor:MyColors.buttonColor
        },
        showIcon:true,
        activeTintColor:MyColors.buttonColor,
        style:{
          backgroundColor:MyColors.textColor
        }
        
      }}
      screenOptions={({route})=>(
        {
            tabBarIcon:({color,focused,})=>{
                let iconName:string='';
                switch (route.name) {
                    case 'Clientes Regulares':
                        iconName='address-book'
                        break;
                    case 'Clientes Potenciales':
                        iconName='user'
                        break;
                    case 'Agenda Negociacion':
                        iconName='calendar'
                        break;
                
                    default:
                        break;
                }
                return <Text style={{color:color}}>
                  <Icon name={iconName} color={MyColors.titleColor} size={25} ></Icon> 
                </Text>
            }
        }
    )}

    >
      <Tab.Screen name="Clientes Regulares" component={ClientesNavigator} />
      <Tab.Screen name="Clientes Potenciales" component={ClientesPotencialesNavigator} />
      <Tab.Screen name="Agenda Negociacion" component={ReunionesNavigator} />
    </Tab.Navigator>
  );
} 