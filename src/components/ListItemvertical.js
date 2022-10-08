import { StyleSheet, Text, View ,Image,TouchableOpacity,Dimensions, Alert} from 'react-native'
import React from 'react'

import { Icon } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;
const ListItemvertical = (props,OnpressList) => {

  return (
      <View>
      
     <View style={ {...styles.smallCardSelected}}>
     <TouchableOpacity onPress={props.OnpressList } >  
      <View style={styles.cardBlanc}>
                                             <Image
                                                        style={{marginTop:-20,height:115,width:115,marginStart:-50}}
                                                        source={props.images}
                                                    
                                                    />
                                                <View>
                                                     <Text style={{...styles.smallCardTextSelected} }>{props.name}</Text>
                                                     <Text style={{...styles.smallCardTextprix}}>${props.prix}</Text>
                                                </View>
                                                  
                                               
                                               </View>
                                               </TouchableOpacity>
                                               
                                               <View style={{marginTop:20,marginBottom:10,marginLeft:10,marginRight:10,justifyContent:'space-between',flexDirection:'row'}}>
                                               <View style={{marginTop:9}}>
                                                  <Text style={{marginLeft:10}}>Monstera is a type of tropical plant that is popular</Text>
                                               </View>
                                               <View style={{marginTop: 30,}}>
                                               <Icon
                                                  name="add-circle"
                                                  type="material"
                                                  size={35}
                                                  color='#DC143C'
                                                  onPress={()=>{
                                                    console.log(props)
                                                  }}
                                                 />
                                                 </View>
                                               </View>
                                                </View>
                                              
                                                </View>
  )
}

export default ListItemvertical

const styles = StyleSheet.create({

    smallCardSelected:{
        borderRadius:20,
        backgroundColor:"#D3D3D3",
         width:SCREEN_WIDTH*0.9,
        marginTop:20,
        marginHorizontal:15,
        
        height:180,
        marginBottom:10
        
    
    },
    cardBlanc:{
        backgroundColor:'#FFFFFF',
        justifyContent:'space-evenly',
       flexDirection: "row",
       borderBottomEndRadius:100,
       width:SCREEN_WIDTH*0.75,
       borderBottomStartRadius:20,
       borderTopStartRadius:20,
       borderTopEndRadius:5,
       height:90,
       
    },
    
    smallCardTextSelected:{
    marginTop:20,
    fontSize:15,
    marginStart:-30,
    
      fontWeight:'bold',
      color:'#8B0000',
    },
    smallCardTextprix:{
        fontSize:15,
        marginStart:-25,
          fontWeight:'bold',
          color:'#653239',
          fontSize:15
        },

})