import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator }  from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import ScreenHome from '../Screens/ScreenHome'

const ClientTabs =  createBottomTabNavigator();
const RootBottombar = () => {
  return (
     <ClientTabs.Navigator
        screenOptions={
          
            {
              // Default Color is blue you can change it by following props
               activeTintColor: "blue",
             // inactiveTintColor: '#ff6b81',
              // Default Background Color is white you can change it by following props
              // activeBackgroundColor: '#ced6e0',
             // inactiveBackgroundColor: '#ced6e0',

              tabBarActiveTintColor: "#8B0039",
              tabBarInactiveTintColor:"black",
              tabBarStyle: [
                {
                  display: "flex",
                  backgroundColor:'#DCDCDC'
                },
                null
              ]
            }
          }
        >
          <ClientTabs.Screen
            name='Home'
            component={ScreenHome}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='home'
                type='material' 
                color={color} 
                size={size} />
              ),
            }}
          />

<ClientTabs.Screen
            name='Search'
            component={ScreenHome}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='search'
                type='material' 
                color={color} 
                size={size} />
              ),
            }}
          />
       <ClientTabs.Screen
            name='My cart'
            component={ScreenHome}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='cart-outline'
                type='material-community' 
                color={color} 
                size={size} />
              ),
            }}
          />
          <ClientTabs.Screen
            name='MyAccount'
            component={ScreenHome}
            options={{
                headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name='person'
                type='material' 
                
                color={color} 
                size={size} />
              ),
            }}
          />
        </ClientTabs.Navigator>
  )
}

export default RootBottombar

const styles = StyleSheet.create({})