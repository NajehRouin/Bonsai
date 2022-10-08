import {  StyleSheet, TextInput, View, Keyboard, Button,Text,TouchableOpacity ,FlatList,ScrollView,Dimensions} from 'react-native'
import React,{useState}  from 'react'
import { Icon } from 'react-native-elements';
import { Feather, Entypo } from "@expo/vector-icons";
import { colors } from '../../styles';
import { donnee } from '../../Data';
import ListItemhorizontal from '../components/ListItemhorizontal';
import ListItemvertical from '../components/ListItemvertical';

const SCREEN_WIDTH = Dimensions.get('window').width;
const ScreenHome = ({navigation}) => {
  const [clicked,setCLicked]=useState();
  const [searchPhrase, setSearchPhrase]=useState()
  const [Alle,setAll]=useState(true);
  const [Outdoors,setOutdoors]=useState(true);
  const [Indoors,setIndors]=useState(true);
  return (
    <View style={ styles.container}>
      <Text style={styles.baseText}>
      Bon
      <Text style={styles.innerText}>Sai</Text>
    </Text>
    <Text style={{marginLeft:25,fontSize:13,fontStyle:'italic',fontWeight:'bold',color:'#8B0000'}}>Rouin</Text>
      <View style={{   flexDirection:"row",justifyContent:'space-between',alignContent:'center',alignItems:'center'}}>

    
      <View
        style={
         
          clicked
            ? styles.searchBar__clicked
            : styles.searchBar__unclicked
            
        }
      >

     {/* search Icon */}
     <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setCLicked(true);
          }}
        />
           {/* cross Icon, depending on whether the search bar is clicked or not */}
           {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
            Keyboard.dismiss();
              setSearchPhrase("");
              setCLicked(false);
          }}/>
        )}

        </View>
        <View style={{marginRight:10,justifyContent:'center',marginTop:15}}>
   <Icon
                      name="notifications-none"
                      type="material"
                      size={35}
                      color='#653239'
              
                 
                  
                  />
   </View>

     </View>
     <View style={styles.Bouttonheader}>
     <TouchableOpacity
      onPress={()=>{
        setOutdoors(true)
        setIndors(true)
      setAll(true)
       
        
      }}
                    
                     >
                         <View  style={{...styles.deliveryButton,backgroundColor:Alle?colors.green:colors.grey5}} >
                            <Text style={styles.deliveryText}>All</Text>
                         </View>
                     </TouchableOpacity>

                     <TouchableOpacity
                             onPress={()=>{
                             
                                setAll(false)
                                setOutdoors(false)
                                setIndors(true)
                                
                                
                            }
                        }
                     >
                         <View  style={{...styles.deliveryButton,backgroundColor:Outdoors?colors.grey5:colors.green }} >
                            <Text style={styles.deliveryText}>Outdoors</Text>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity
                             onPress={()=>{
                              setAll(false)
                              setIndors(false)
                              setOutdoors(true)
                         
                            }
                        }
                     >
                         <View  style={{...styles.deliveryButton,backgroundColor:Indoors?colors.grey5:colors.green }} >
                            <Text style={styles.deliveryText}>Indoors</Text>
                         </View>
                     </TouchableOpacity>
                     
      </View>
      <View style={{marginBottom:10}}>
    
                      
                           
              
      <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
                   // style={{marginTop:10,marginBottom:10 }}
                    //horizontal={true}
                   
                      data={donnee}
                      keyExtractor={(item,index)=>index.toString()}
                      renderItem=
                    {
                        ({item,index})=>(
                  
                        
                     
                        <TouchableOpacity
                        onPress={()=>{
                          Keyboard.dismiss
                         // Alert.alert("One ",item.name+" :"+item.login);
                        

                      }} 
                    
                        >
               
                                    <ListItemhorizontal
                                        //screenwidth={SCREEN_WIDTH*0.8}
                                        images={item.images}
                                        name={item.name}
                                      prix={item.prix}
                                        OnpressList={()=>{
                                          console.log("iteeeeeeeeeeeeeeem",item);
                                       //  navigation.navigate("DetailOne",{id:index,_id:item._id })
                                        }}
                                  
                                        
                                    />
                                    
                                    </TouchableOpacity>
                       
                   
                     
                      )
                 
                    }
                 
                />
             
      </View>

     
    
                      
              <ScrollView  horizontal={true}>            
              <View style={{ width:SCREEN_WIDTH }}>
      <FlatList
    
                   // style={{marginTop:10,marginBottom:10 }}
                    //horizontal={true}
                   
                      data={donnee}
                      keyExtractor={(item,index)=>index.toString()}
                      renderItem=
                    {
                        ({item,index})=>(
                  
                        
                     
                        <View
                        onPress={()=>{
                          Keyboard.dismiss
                         // Alert.alert("One ",item.name+" :"+item.login);
                        

                      }} 
                    
                        >
               
                                    <ListItemvertical
                                        //screenwidth={SCREEN_WIDTH*0.8}
                                        images={item.images}
                                        name={item.name}
                                      prix={item.prix}
                                        OnpressList={()=>
                                        {console.log("iteeeeeeeeeeeeeeem",item);
                                          navigation.navigate("Detail",{id:item,_id:item.id })
                                        }
                                      }
                                  
                                        
                                    />
                                    
                                    </View>
                       
                   
                     
                      )
                 
                    }
                 
                />
                </View>
             </ScrollView> 
       
      </View>

 
  )
}

export default ScreenHome

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#DCDCDC',
    },
    baseText: {
      color:'#696969',
      marginTop:30,
      marginLeft:20,
     
       fontSize:20
    },
    innerText: {
      color: '#696969',
      fontWeight:"bold",
      fontSize:20
    },

    textName:{
      color:'#696969',
     marginTop:40,
     marginLeft:30,
      fontWeight:"bold",
      fontSize:20

    },
  
    searchBar__unclicked: {
      marginTop:15,
      padding: 5,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "#ffffff",
      borderRadius: 15,
      alignItems: "center",
    
      marginLeft:20
    },
    searchBar__clicked: {
      marginTop:15,
      padding: 5,
      marginLeft:20,
      flexDirection: "row",
      width: "80%",
      backgroundColor: "#ffffff",
      borderRadius: 15,
      alignItems: "center",
      borderWidth:1,
      justifyContent: "space-evenly",
    },
    input: {
      fontSize: 20,
      marginLeft: 10,
      width: "90%",
    },
    Bouttonheader:{
      marginTop:20,
      marginLeft:20,
      flexDirection:'row',
      justifyContent:'space-evenly'
    
      //height:parameters.headerHeight,
    
    
      
    },
    deliveryButton:{
      paddingHorizontal:20,
      borderRadius:30,
      paddingVertical:5
  },
  deliveryText:{
    marginLeft:5,
    fontSize:16
}
})