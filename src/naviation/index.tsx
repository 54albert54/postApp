
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../page/Home/HomeScreen';
import tw from "twrnc";
import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
// import IconApp from '../../assets/IconApp.png'
import SettingsScreen from '../page/SettingsScreen';
import User from '../page/Perfil/User';
import { ProductNavigation } from '../page/ProductNavigation';


const Tab = createBottomTabNavigator();

export function MyBottomTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Perfil" component={User}  options={{title:'Profile'}} />
      <Tab.Screen name="Home" component={HomeScreen}  options={{title:' ', headerTransparent:true} } />
      <Tab.Screen name="Settings" options={{title:'Settings '}} component={ProductNavigation} />
    </Tab.Navigator>
  );
}
function IconBoton(){
  return(
    <Image style={tw`w-full h-30 mb-12 `} source={require('../../assets/IconApp.png')} />

  )
}