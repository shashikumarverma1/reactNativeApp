import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable } from 'react-native';
import React , {useState} from 'react';
import { Menu } from '../component/menu';
export const Dashboard=({navigation})=> {
  const [menu , setMenu] = useState(false)
  return (
    <View style={styles.container}>
 <View style={[styles.Flex , {justifyContent:'space-between'}]}>
       <Pressable onPress={()=>setMenu(true)}>
        <Text style={{paddingLeft:10 , fontSize:25 }}>menu</Text>
       </Pressable>
       <Pressable>
       <Text style={{color :'red' ,fontWeight:'bold' , fontSize:25 }}>Dasshboard</Text>
       </Pressable>
       <Pressable onPress={()=>navigation.navigate("Profile")}>
        <Text style={{paddingLeft:10 , fontSize:25 }}>profile</Text>
       </Pressable>
 </View>
    {
      menu ?   <Menu menu={menu} setMenu={setMenu} /> : null
    }
 

     </View>
  )
}

const styles = StyleSheet.create({
  container: {
 paddingTop:10,
    backgroundColor: '#fff',
    marginTop:20
  },
  justify:{  flexDirection: 'row',display:'flex'  },
  Flex: {
    display: 'flex', flexDirection: 'row', 
  },
});

