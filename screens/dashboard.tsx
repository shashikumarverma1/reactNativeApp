import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable, ScrollView ,  } from 'react-native';
import React , {useState , useEffect , useContext} from 'react';
import { Menu } from '../component/menu';
import { ProductCartInfo } from '../contextProvider/ProductCart';
import { AmountInfo } from '../contextProvider/Amount';
import RazorpayCheckout from 'react-native-razorpay';
import { payment } from '../functionality/payment';


export const Dashboard=({navigation})=> {
  const [menu , setMenu] = useState(false)
  const {ProductCart, setProductCart } = useContext(ProductCartInfo)
  const {Amount, setAmount} = useContext(AmountInfo)
  const [productData , setproductData] = useState([])
useEffect(()=>{
  GetProductData()
} ,[])
const GetProductData= async()=>{

    let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    let json = await response.json();
    //  console.log(json)
     setproductData(json)
}
// console.log(productData)
  return (
    <View style={styles.container}>
 <View style={[styles.Flex , {justifyContent:'space-between'}]}>
       <Pressable onPress={()=>setMenu(true)}>
        <Text style={{paddingLeft:10 , fontSize:25 }}>menu</Text>
       </Pressable>
       <Pressable>
       <Text style={{color :'red' ,fontWeight:'bold' , fontSize:25 }}>Dasshboard</Text>
       </Pressable>
       <Pressable onPress={()=>navigation.navigate("AddToCart")}>
        <Text style={{paddingLeft:10 , fontSize:25 }}>cart {ProductCart?.length}</Text>
       </Pressable>
 </View>
 <View>
<Pressable onPress={()=>navigation.navigate('AddMoney')}>
<Text>Add money </Text>
</Pressable>
  <Text>{Amount}</Text>
 </View>
    {
      menu ?   <Menu menu={menu} setMenu={setMenu} /> : null
    }
    <ScrollView>
{
  productData.map((el ,i)=>{
    // console.log(el ,i)
    return (
   <View key={i}>
      <Pressable onPress={()=>navigation.navigate('ProductDetails' , {el})}>
       <Text style={{textAlign:'center'}}>{i}</Text>
       {/* <Text style={{marginLeft:10}}>Add to cart</Text> */}
     </Pressable>
  
   </View>
    )
  })
}
<Pressable 
onPress={async() => payment('5000' ,'sk' ,'s@gmail.com' ,'7007414506' )}
>
  <Text>pay now</Text>
</Pressable>
<Pressable 
onPress={() =>
navigation.navigate('DocumentScaner')

}
>
  <Text>scan</Text>
</Pressable>

    </ScrollView>
 

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

