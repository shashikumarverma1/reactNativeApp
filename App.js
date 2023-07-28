import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable } from 'react-native';
import React , {useState} from 'react';
import ContextProvider from './contextProvider/userDetails';
import { BottomNavigation } from './navigations/Bottomnavigation';
import ContextProviderProductCart from './contextProvider/ProductCart'
import ContextProviderAmount from './contextProvider/Amount'
export default function App() {

  return (
    <ContextProviderAmount>
<ContextProvider>  
<ContextProviderProductCart>
<BottomNavigation/> 
</ContextProviderProductCart>
    </ContextProvider>
    </ContextProviderAmount>

  )
}

const styles = StyleSheet.create({
  container: {
 paddingTop:10,
    backgroundColor: '#fff',
 
  },
});
