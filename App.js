import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Pressable } from 'react-native';
import React , {useState} from 'react';
// import Dashboard from './screens/dashboard';
import { Menu } from './component/menu';
import { BottomNavigation } from './navigations/Bottomnavigation';
export default function App() {
  const [menu , setMenu] = useState(false)
  return (
      <BottomNavigation/> 
  )
}

const styles = StyleSheet.create({
  container: {
 paddingTop:10,
    backgroundColor: '#fff',
 
  },
});
