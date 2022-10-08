import { View, Text,ImageBackground,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import img from '../../assests/images/bonsai-en-fleur2.png'
import { Icon } from 'react-native-elements';
const  ScreenWelcom=({navigation}) =>{
  return (
    <View style={styles.container}>
  
     <ImageBackground source={img} resizeMode="cover" style={styles.image}>
      <TouchableOpacity  style={styles.View} onPress={()=>{
      
                                                          navigation.navigate('Accueil')
                                                          
                                                          }}  > 
      <View style={{marginLeft:20,color:'#FFFFFF'}}>
      <Text style={styles.text}>Get Start 
   
   </Text>
      </View>
   
   <View style={{marginRight:30,justifyContent:'center',  alignItems:'center'}}>
   <Icon
                      name="arrow-right-circle"
                      type="material-community"
                      size={35}
                     
              
                 
                  
                  />
   </View>
 
      </TouchableOpacity>



 


     </ImageBackground>
    </View>
  )
}
export default ScreenWelcom
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#111111'
    },
    image: {
        height:370,
        width:370,
        marginTop:150,
        marginLeft:-1,
        marginRight:10,
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "#FFFFFF",
      fontSize: 30,
      fontWeight: "normal",
      lineHeight: 70,
      opacity:1
    },
    View:{
        marginTop:110,
        marginLeft:80,
        marginRight:80,
        borderRadius:20,
        flexDirection:"row",
        justifyContent:'space-between',
        backgroundColor:"#A9A9A9",
        alignContent: 'center',
        alignItems:'center',
     opacity:0.5
    }
  });