import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import AllUser from './AllUser';
import UserDetail from './UserDetail';




const Stack = createStackNavigator();
// User
export function UserNavigation() {


  return (
    <Stack.Navigator>
      <Stack.Screen name="AllUser" component={ AllUser} options={{title:'All User'}}  />
      <Stack.Screen name="UserDetail" component={ UserDetail} options={{title:' ', headerTransparent:true,}} />
    
    </Stack.Navigator>
  );
}