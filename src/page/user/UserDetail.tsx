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
import { TUser } from "../../provider/schema";
import { COLOR } from "../../provider";
const imgPerfil = 'https://imgs.search.brave.com/0JdzpeiLxCY4_XJt2LAysFTcum_hG5NKJmY5HgvHAcM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzEy/OC8xMjUzOC8xMjUz/ODQ0NC5wbmc'
const stile = `text-red-600 text-xl`;
const UserDetail = (Props: any) => {
  const [users, setUsers] = React.useState<TUser | null>();
  const { navigation, route } = Props;
  React.useEffect(() => {
    (async () => {
      axios.get(api.apiUser.getUserID(route.params.params.id)).then((data) => {
        setUsers(data.data.body);
      });
    })();
  }, []);

  return (
    <View style={tw``}>
      <View style={tw`mt-10 flex items-center pt-10 w-full bg-[${COLOR.SHADOW}]    rounded-br-[60px]`}>
          <Image style={tw`w-48 h-48 mb-10`} source={{uri:imgPerfil}} />
        
        </View>
      <View style={tw`bg-[${COLOR.SHADOW}] `}>
        <View style={tw`bg-[${COLOR.BACKGROUND_MOVIL}] rounded-tl-[60px]`}>
      <View style={tw`pt-20 pl-5 mb-20 w-full flex items-center `}>
        
        <Text style={tw`text-4xl font-bold mb-4`}>{users?.name}</Text>
        <Text style={tw`text-xl font-light`}>{users?.userName}</Text>
      </View>
      
      <View style={tw`w-full flex flex-row justify-between px-10`}>
        <View style={tw` flex items-center gap-2 `}>
          <Text style={tw`${stile}`}>Fallowers</Text>
          <Text>{users?.followers?.length}</Text>
        </View>

        <View style={tw`flex items-center gap-2`}>
          <Text style={tw`${stile}`}>Post Follows</Text>
          <Text>{users?.viewPostLike?.length}</Text>
        </View>

        <View style={tw`flex items-center gap-2`}>
          <Text style={tw`${stile}`}>Fallwer</Text>
          <Text>{users?.youFollow?.length}</Text>
        </View>
      </View>
      </View>
      </View>
    
     
    </View>
  );
};

export default UserDetail;
