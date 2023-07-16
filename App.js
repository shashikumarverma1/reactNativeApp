import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable } from 'react-native';
import React , {useState} from 'react';
import ContextProvider from './contextProvider/userDetails';
import { BottomNavigation } from './navigations/Bottomnavigation';
import ContextProvidercount from './contextProvider/ProductCount';
export default function App() {

  return (
<ContextProvider>  
<ContextProvidercount>
<BottomNavigation/> 
</ContextProvidercount>


    </ContextProvider>
 
  
   
  )
}

const styles = StyleSheet.create({
  container: {
 paddingTop:10,
    backgroundColor: '#fff',
 
  },
});
