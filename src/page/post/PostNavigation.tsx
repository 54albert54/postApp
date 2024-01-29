import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import HomeBlogs from './HomeBlogs';
import BlogsDetail from './BlogsDetail';
import CreatePost from './CreatePost';






const Stack = createStackNavigator();
// User
export function PostNavigation() {


  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeBlogs" component={ HomeBlogs} options={{title:'', headerTransparent:true}}  />
      <Stack.Screen name="blogsDetail" component={ BlogsDetail} options={{title:' ', }} />
      <Stack.Screen name="createPost" component={ CreatePost} options={{title:' ', }} />
    
    </Stack.Navigator>
  );
}