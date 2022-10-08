import { StyleSheet, Text, View ,ImageBackground, TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Icon } from 'react-native-elements';
const PanierScreen = ({navigation,route}) => {
    const[Qte,SetQte]=useState(1);
    
    const {idex}=route.params
    const[total,SetTolat]=useState(idex.prix);
    console.log("index",idex)
    const addqte=()=>{
        const qte=Qte+1;
        const prix=idex.prix;
        console.log("PRIX",prix)
        const tt=prix*qte;
        SetQte(qte)
        SetTolat(tt)
        console.log("qte",qte)
        console.log("Total",tt)

    }

    const removeqte=()=>{
        const qte=Qte-1;
        const prix=idex.prix;
        const tt=prix*qte;
        SetQte(qte)
        SetTolat(tt)
        if(Qte==1){
           SetQte(1); 
            SetTolat(prix)
            console.log("QTE",Qte)

        }
        console.log("qte",qte)


    }
  return (
    <View style={styles.container}>
        <View style={styles.viewretour}>
                <View  style={{marginLeft:-30}}>
                    <Icon
                        name="arrow-left"
                        type="material-community"
                        size={26}
                        onPress={()=>navigation.goBack()}
                       
                    
                    />
                    </View>

          
                <Text style={styles.text2}></Text>
                <Text style={styles.text2}></Text>
                <View style={{marginLeft:30}}>
                <Icon
                        name="cancel"
                        type="material-icons"
                        size={26}
                        onPress={()=>navigation.navigate('Accueil')}
                        
                    
                    />
                    </View>
                </View>
                <View style={{marginTop:10,flexDirection:"row",alignItems:"center",
                                justifyContent: "space-between",alignContent:'center',
                                }}>
                                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:15}}>
                                    <View style={{flex: 1, height: 2, backgroundColor: '#8B0000',marginLeft:40}} />
                                    <View>
                                        
                                    </View>
                                    <View style={{flex: 1, height: 2, backgroundColor: '#8B0000',marginRight:40}} />
                                
                                </View>
                                    
                             

                </View>
                <View style={{backgroundColor:'white',width:340,height:150,marginLeft:10,marginRight:4,marginTop:15,marginBottom:20,borderRadius:15,paddingTop:20}}>
                <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row',marginTop:2,marginLeft:10,marginRight:60}}>
                <ImageBackground
             style={styles.containerImage}
             source={idex.images}
               
            >    
            
        
            </ImageBackground>
            <View style={{justifyContent:'space-between',flexDirection:'column',marginTop:30,marginRight:20,alignContent:'center',alignItems:'center',}}>
            <Text style={{fontSize:18,  fontWeight:"bold",color:'#653239',}}>{idex.name}</Text>
            <Text style={{fontSize:16,  fontWeight:"bold",color:'#653239',}}>{idex.prix}$</Text>
            
            </View>
            <View style={{justifyContent:'space-evenly',flexDirection:'row',marginTop:30,alignContent:'center',alignItems:'center',marginRight:-20}} >
            <Icon
                        name="add-circle"
                        type="material-icons"
                        size={24}
                        onPress={()=>addqte()}
                       
                    
                    />
                    <Text style={{fontSize:18,marginLeft:10,marginRight:10,  fontWeight:"bold",color:'#653239',}}>{Qte}</Text>
                       <Icon
                        name="remove-circle"
                        type="material-icons"
                        size={24}
                        onPress={()=>removeqte()}
                       
                    
                    />
            </View>
           </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center',marginTop:10}}>
                                <View style={{flex: 1, height: 2, backgroundColor: '#8B0000',marginLeft:40}} />
                                <View>
                                    
                                </View>
                                <View style={{flex: 1, height: 2, backgroundColor: '#8B0000',marginRight:40}} />
                                                                
                    </View>
                    <View style={{backgroundColor:'white',height:60,marginTop:300,flexDirection:'row',justifyContent:'space-evenly',alignContent:'center',alignItems:'center',marginLeft:10,marginRight:10,borderRadius:10}}>
                        <Text style={{fontSize:18, marginRight:30, fontWeight:"bold",color:'#653239',}}>Total: {total} $</Text>
                        <TouchableOpacity  style={{height:50,width:120,alignContent:'center',
                                                    alignContent:'center',alignItems:'center',
                                                    justifyContent:'center',backgroundColor:'#8B0000',
                                                    marginLeft:60,borderRadius:90}} >
                             <Text style={{fontSize:15,  fontWeight:'700',color:'white'}}>Buy now </Text>

                        </TouchableOpacity>
                    </View>
    </View>
  )
}

export default PanierScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:15,
        backgroundColor:'#DCDCDC',
       
      },
      viewretour:{
        marginTop:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent: "space-evenly",
        alignContent:'center',

    
    },
 
        text2:{
            fontSize:20,
            fontWeight:"bold",
            color:'#8B0000',
            marginLeft:60,
            alignContent:'center',
            alignItems:'center',
          
            },
            containerImage:{
                height:70,
                width:70,
               
                
            },
})