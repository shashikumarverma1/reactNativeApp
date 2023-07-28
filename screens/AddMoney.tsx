import React , {useContext, useState} from "react"
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { AmountInfo } from "../contextProvider/Amount";

export const  AddMoney=({navigation})=> {
const [num, setnum]=useState(0)
const {Amount, setAmount} = useContext(AmountInfo)
// console.log(num + 1)
  return (
    <View style={styles.container}>
        <Text>Current Amoun : {Amount}</Text>
<Text style={{textAlign:'center'}}>AddMoney</Text>
<TextInput
        style={{}}
        onChangeText={(e)=>setnum(parseInt(e))}
        // value={num}
        placeholder="Enter Amount"
        keyboardType="numeric"
      />
<Pressable onPress={()=>{setAmount(Amount + num)
setnum(0)
}}>
    <Text>Add</Text>
</Pressable>
<Pressable onPress={()=>navigation.navigate('Dashboard')}>
    <Text>Go back</Text>
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
