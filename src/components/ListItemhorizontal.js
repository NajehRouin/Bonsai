import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native'
import React from 'react'

import { Icon } from 'react-native-elements';
const ListItemhorizontal = (props, OnpressList) => {
  return (
    <View>
       
     <View style={ {...styles.smallCardSelected}}>
     <TouchableOpacity onPress={props.OnpressList } >  
      <View style={{backgroundColor:'#FFFFFF',  justifyContent:'space-evenly',
       flexDirection: "row",borderBottomEndRadius:75,
       borderBottomStartRadius:20,borderTopStartRadius:20,borderTopEndRadius:5}}>
                                           
                                                <View>
                                                     <Text style={{...styles.smallCardTextSelected} }>{props.name}</Text>
                                                </View>
                                                    <Image
                                                        style={{height:100,width:100,marginLeft:30}}
                                                        source={props.images}
                                                    
                                                    />
                                               
                                               </View>
                                               </TouchableOpacity>
                                               <View style={{marginTop:2}}>
                                                  <Text style={{marginLeft:10}}>Monstera is a type of tropical plant that is popular</Text>
                                               </View>
                                               <View style={{marginTop:2,marginBottom:10,marginLeft:10,marginRight:10,alignContent:'center',alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
                                               <Text style={{color:'#653239',fontWeight:'bold',fontSize:17,marginLeft:5}}>${props.prix}</Text>
                                               <Icon
                                                  name="add-circle"
                                                  type="material"
                                                  size={35}
                                                  color='#DC143C'
                                                 />
                                                 
                                               </View>
                                                </View>
                                               
    </View>
  )
}

export default ListItemhorizontal

const styles = StyleSheet.create({

  smallCardSelected:{
    borderRadius:20,
    backgroundColor:"#D3D3D3",
     width:200,
    marginTop:30,
    marginHorizontal:10,
    
    height:180

},

smallCardTextSelected:{
marginTop:50,
fontSize:15,
marginLeft:10,
  fontWeight:'bold',
  color:'#8B0000',
},



})