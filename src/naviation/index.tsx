
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../page/Home/HomeScreen';
import tw from "twrnc";
import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


import { ProductNavigation } from '../page/ProductNavigation';
import User from '../page/Perfil/User';
import { PostNavigation } from '../page/post/PostNavigation';
import UserIndex from '../page/Perfil';




const Tab = createBottomTabNavigator();

export function MyBottomTabs() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Perfil" component={UserIndex}  options={{title:'', tabBarIcon:({color})=><Icon name='user' color={color} size={30} style={{height:50,padding:20}} />}} />
      <Tab.Screen name="Home" component={PostNavigation}  options={{title:' ', tabBarIcon:({color})=><Icon name='home' color={color} size={30} style={{height:50,padding:20}} />} } />
      <Tab.Screen name="Settings" options={{title:'',tabBarIcon:({color})=><Icon name='cog' color={color} size={30} style={{height:50,padding:20}} />}}  component={ProductNavigation} />
    </Tab.Navigator>
  );
}
function IconBoton(){
  return(
    <Image style={tw`w-full h-30 mb-12 `} source={require('../../assets/IconApp.png')} />

  )
}