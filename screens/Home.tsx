import React , {useContext} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
const width=Dimensions.get("window").width
import { CountInfo } from '../contextProvider/ProductCount';
export const  Home=()=> {
const {name , setname} = useContext(CountInfo)
  return (
    <View style={styles.container}>
<Text>Home</Text>
<Text>{name}</Text>
<Pressable onPress={()=>setname("monu")}>
  <Text>
    change name
  </Text>
</Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop:20,
    marginLeft:10,
    paddingTop:20,
    // height:'110%',
  
  },
  menuItem:{
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:10
    
  }
});
