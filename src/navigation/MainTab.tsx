import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ClienteTabs } from './ClienteTabs';
import { Pedidos } from '../screens/PedidosScreen';
import { Reportes } from '../screens/ReportesScreen';
import MyColors from '../colors/MyColors';
import { Text } from 'react-native';
import { AdminTab } from './AdminTab';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext/AuthContext';
import { Protected } from '../screens/ProtectedScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PedidosNavigator } from './PedidosNavigator';

const Tab = createBottomTabNavigator();

export const MainTab=()=> {
    const {user}=useContext(AuthContext)
  return (
    <Tab.Navigator 
    tabBarOptions={{
        activeTintColor:MyColors.backGroundColor,
        
        style:{
            borderTopColor:MyColors.buttonColor,
            backgroundColor:MyColors.textColor
        },
        labelStyle:{
            fontSize:20
        },
        activeBackgroundColor:MyColors.titleColor
    }}
    screenOptions={({route})=>(
        {
            tabBarIcon:({color,focused,size})=>{
                let iconName:string='';
                switch (route.name) {
                    case 'Clientes':
                        iconName='users'
                        break;
                    case 'Pedidos':
                        iconName='address-book'
                        break;
                    case 'Reportes':
                        iconName='list'
                        break;
                    case 'Admin':
                        iconName='cogs'
                        break;
                    case 'Mi Perfil':
                        iconName='user-circle'
                        break;
                
                    default:
                        break;
                }
                return <Text style={{color:'black'}}>
                    <Icon name={iconName} color={MyColors.buttonColor} size={25} ></Icon>
                </Text>
            }
        }
    )}
        
    >
      <Tab.Screen name="Clientes" component={ClienteTabs} />
      <Tab.Screen name="Pedidos" component={PedidosNavigator} />
      
      {
          (user!==null&&user!=='no data')
          ?(
                (user.rol[0].name ==='admin')
                ?(<>
                    <Tab.Screen name="Reportes" component={Reportes} />
                    <Tab.Screen name="Admin" component={AdminTab} />
                    </>
                )
                :
                (
                    <Tab.Screen name="Mi Perfil" component={Protected} />
                )
          )
          :
          (
              console.log("usuario es null")
          )
      }
      
    </Tab.Navigator>
  );
} 