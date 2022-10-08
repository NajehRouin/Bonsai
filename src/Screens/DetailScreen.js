import { StyleSheet, Text, View,ScrollView, TouchableOpacity,Linking ,ImageBackground} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
const DetailScreen = ({navigation,route}) => {
  
    const {id,_id}=route.params
    console.log("id",_id)
    console.log("index",id)
  return (
    <View style={styles.container}>
    <ScrollView>
      <View>
      <View style={styles.viewretour}>
                <View style={styles.view2retour}>
                    <Icon
                        name="arrow-left"
                        type="material-community"
                        size={26}
                        onPress={()=>navigation.goBack()}
                    
                    />

                </View>
                <Text style={styles.text2}> Details {id.name} </Text>
                </View>
                <View>
                <ImageBackground
             style={styles.containerImage}
             source={id.images}
               
            >    
            
        
            </ImageBackground>

        </View>
        <View style={{flexDirection: 'row', alignItems: 'center',marginTop:15}}>
  <View style={{flex: 1, height: 2, backgroundColor: '#8B0000',marginLeft:40}} />
  <View>
    
  </View>
  <View style={{flex: 1, height: 2, backgroundColor: '#8B0000',marginRight:40}} />
</View>


        <View style={{backgroundColor:'white',width:250,height:200,marginLeft:50,marginRight:40,marginTop:15,marginBottom:20,borderRadius:15,}}>
           <View style={{alignContent:'center',justifyContent:'space-between',flexDirection:'row',marginTop:5,marginLeft:60,marginRight:60}}>
            <Text style={{fontSize:16,  fontWeight:"bold",color:'#8B0000',}}>Name:</Text>
            <Text style={{fontSize:16,  fontWeight:"bold",color:'#653239',}}>{id.name}</Text>
           </View>
           <View style={{alignContent:'center',justifyContent:'space-between',flexDirection:'row',marginTop:10,marginLeft:60,marginRight:80}}>
            <Text style={{fontSize:16,  fontWeight:"bold",color:'#8B0000'}}>Price:</Text>
            <Text style={{fontSize:16,  fontWeight:"bold",color:'#653239'}}>{id.prix}$</Text>
           </View>
           <View style={{alignContent:'center',justifyContent:'space-between',flexDirection:'row',marginTop:10,marginLeft:10,marginRight:83}}>
            <Text style={{fontSize:16,  fontWeight:"bold",color:'#8B0000'}}>Description:</Text>
            <Text style={{fontSize:13,  fontWeight:"bold",color:'#653239'}}>Monstera is a type of tropical plant that is popular</Text>
           </View>
           <TouchableOpacity style={{height:50,width:120,alignContent:'center',
                                      justifyContent:'space-between',flexDirection:'row',
                                       backgroundColor:'#8B0000',alignItems:'center',
                                          borderRadius:10,marginTop:20,marginLeft:65}}
                                          onPress={()=>{
                                            navigation.navigate('Panier',{idex:id})
                                          }}
            >
  
            <Text style={{fontSize:13,marginLeft:10,  fontWeight:'700',color:'white'}}>Add To Cart </Text>
            <Icon name='cart-plus'
                type='material-community' 
                color='white' 
                size={18} 
                style={{marginRight:10}}
                />
        

           </TouchableOpacity>
        </View>
                </View>
                </ScrollView>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop:15,
        backgroundColor:'#DCDCDC',
    
       
      },
      viewretour:{
        flexDirection:"row",
        alignItems:"baseline",
        justifyContent: "space-between",
    
    },
    view2retour:{
        margin:10,
        width:40,
        height:40,
        // backgroundColor:colors.cardbackground,
        alignItems:"center",
        justifyContent: 'center',
        borderRadius:20,
        },
        text2:{
            fontSize:20,
            fontWeight:"bold",
            color:'#8B0000',
            marginTop:10,
            alignContent:'center',
            alignItems:'center',
            marginRight:80
            },
            containerImage:{
                height:300,
                width:300,
                marginTop:5,
                marginLeft:40,
                marginRight:50
                
            },

})