import axios from "axios";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  RootTagContext,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import tw from "twrnc";
import api from "../../api/api";
import { TPost, TUser } from "../../provider/schema";
import Context, { TContext } from "../../provider/context";
import LikePost from "../../components/LikePost";
const imgPerfil = 'https://imgs.search.brave.com/0JdzpeiLxCY4_XJt2LAysFTcum_hG5NKJmY5HgvHAcM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzEy/OC8xMjUzOC8xMjUz/ODQ0NC5wbmc'
const stile = `text-red-600 text-xl`;
const BlogsDetail = (Props: any) => {
  const {auth }: TContext = Context();
  const [post, setPost] = React.useState<TPost | null>();
  const { navigation, route } = Props;
  React.useEffect(() => {
    
    (async () => {
      axios.get(api.apiPost.getPostID(route.params.params.id)).then((data) => {
        setPost(data.data.body);
      });
    })();
  }, []);

  return (
    <View style={tw`relative h-full pt-10 px-5 mb-20 w-full flex items-center bg-blue-300`}>
      <View >

      <Text style={tw`text-2xl text-center font-semibold mb-10`} >{post?.title}</Text>
      <Text style={tw`text-xl  font-light`} >{post?.detail}</Text>
      </View>
      <View style={tw`absolute bottom-4 w-full px-10 flex flex-row justify-between items-center`}>
        {
          auth.showData && <LikePost/>
        }
        <View style={tw`flex items-center gap-1`}>
          <Text style={tw`font-semibold`}>{auth?.showData?.id == post?.owner_id?'editar ':' escrito por' }:</Text>
          <Text>{post?.owner_name}</Text>
        </View>
         
        <View>
        <Text>hola</Text>

        <Text>{post?.userThatLike.length > 0? post?.userThatLike.length : ''}</Text>
        </View>
        
      </View>
    </View>
  );
};

export default BlogsDetail;
