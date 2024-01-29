import { Button, StyleSheet, Text, View , Image , RootTagContext,TextInput , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import Context, { TContext } from '../../provider/context'
import Login from './Login';
import tw from 'twrnc'
import User from './User';
const UserIndex =()=>{
  const context:TContext = Context()

  if(!context.auth){
    return (<Login/>)
  }else{
     return ( <User/>)
  }

};

export default UserIndex; 