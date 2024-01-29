
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Home } from './Home/home';


import UserDetail from './user/UserDetail';
import { UserNavigation } from './user/UserNavigation';



const Stack = createStackNavigator();
// User
export function ProductNavigation() {


  return (
    <Stack.Navigator>
      <Stack.Screen name="User" component={ UserNavigation} options={{title:'', headerShown:false}}  />
      <Stack.Screen name="Home" component={ Home} options={{title:' ', headerTransparent:true,}} />
    
    </Stack.Navigator>
  );
}
