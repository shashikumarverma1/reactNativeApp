
import { StyleSheet, Text, View , Pressable, Dimensions } from 'react-native';
const width=Dimensions.get("window").width
export const  Home=()=> {
  return (
    <View style={styles.container}>
<Text>Home</Text>
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
