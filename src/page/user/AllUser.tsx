import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import axios from 'axios';
import React from 'react';
import api from '../../api/api';
 import tw from 'twrnc'
import { COLOR } from '../../provider';
import Context, { TContext } from '../../provider/context';


//UserDetail
const AllUser =({navigation})=>{
  const {auth }: TContext = Context();
  const [users , setUsers] = React.useState([])
    
  React.useEffect(()=>{
    axios.get(api.apiUser.getAllUser()).then(data => {setUsers(data.data.body)})

 },[])


  return(
    <View style={tw`w-full  flex gap-8`}>
      
      <ScrollView style={tw`w-full  px-4 flex gap-8`}>
      {
        users.map((element )=>{
          
        return  auth?.showData?.id != element.id?<ShowUsers key={element?.id} element={element} navigation={navigation} />:''
        
      }
        )
      }
      </ScrollView>
    </View>
    )
};

export default AllUser; 


const ShowUsers = ({element,navigation}:any)=>{
  return(
    ( 
      <TouchableHighlight style={tw`w-auto  my-4 flex gap-8`}   onPress={()=>{navigation.navigate('UserDetail',{params:{...element}})   }}  
       >
      <View style={tw` bg-[${COLOR.MAIN}] px-6 py-6 w-screen rounded-xl`}>
        <Text style={tw`text-white font-semibold`} >{element?.name}</Text>
      </View>
      </TouchableHighlight>
    )
  )
}