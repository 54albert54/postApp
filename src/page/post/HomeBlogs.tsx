import axios from 'axios';
import React from 'react';
import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import tw from 'twrnc'
import api from '../../api/api';
import { COLOR } from '../../provider';
import { TPost } from '../../provider/schema';
import CreatePostBoton from '../../components/CreatePostBoton';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import Context, { TContext } from '../../provider/context';
const HomeBlogs =({navigation})=>{
  const [blogPost , setBlogPost] = React.useState<TPost[] >([])
  const { auth}: TContext = Context();

  useFocusEffect(
    React.useCallback(()=>{
    (async () => {
      axios.get(api.apiPost.getAllPost()).then(data => setBlogPost(data.data.body)
      );
    })();

  },[])
  )
  const changePage = ()=>{
    navigation.navigate('createPost')
  }

  return(
    <SafeAreaView >
      <View style={tw`pt-10 pl-5 mb-2 w-full flex items-center`} >
      <Text style={tw`text-4xl font-bold`}>HomeBlogs</Text>
      </View>
      <View>
      <ScrollView style={tw`w-full h-[80%]  px-4 flex gap-8`}>
      {
        blogPost.map((element )=>( 
          <TouchableHighlight style={tw`w-auto  my-4 flex gap-8`}  key={element?.id} onPress={()=>{navigation.navigate('blogsDetail',{params:{...element}})   }}  
           >
          <View style={tw` bg-[${COLOR.MAIN2}] px-6 py-6 w-screen rounded-xl`}>
            <Text style={tw`text-white font-semibold`} >{element?.title}</Text>
          </View>
          </TouchableHighlight>
        ))
      }
      </ScrollView>
      </View>
      {
       auth  && <CreatePostBoton title={'Create Post'} changePage={changePage} />
      }
   
    </SafeAreaView>
    )
};

export default HomeBlogs; 