import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Home } from './Home/home';
import { User } from './User';

const Stack = createStackNavigator();
// User
export function ProductNavigation() {
  

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={ Home} />
      <Stack.Screen name="User" component={ User} />
    
    </Stack.Navigator>
  );
}
