
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import React from 'react';
import ScreenWelcom from './src/Screens/ScreenWelcom';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme,DarkTheme,useTheme } from "@react-navigation/native";
import RootBottombar from './src/navigation/RootBottombar';
import DetailScreen from './src/Screens/DetailScreen';
import PanierScreen from './src/Screens/PanierScreen';
const Stack=createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
          <StatusBar
        barStyle="Light-content"
        backgroundColor='#6c757d'
      />
     <NavigationContainer>
  <Stack.Navigator initialRouteName="welcom">
  <Stack.Screen name="welcom" component={ScreenWelcom}  options={{headerShown: false}}/>
  <Stack.Screen name="Accueil" component={RootBottombar}  options={{headerShown: false}}/>
  <Stack.Screen name="Detail" component={DetailScreen}  options={{headerShown: false}}/>
  <Stack.Screen name="Panier" component={PanierScreen}  options={{headerShown: false}}/>
  </Stack.Navigator>
  </NavigationContainer>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{flex:1}
})
