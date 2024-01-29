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
} from "react-native";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
import { COLOR } from "../../provider";
import Context, { TContext } from "../../provider/context";
import React from "react";
import api from '../../api/api'
import axios from "axios";


const imgUser =
  "https://imgs.search.brave.com/hhwqvsFRHqwddmNLFT97JAldr6yNi60l4ir0wftDGHs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3VzZXItcG5n/LWljb24tZmlsZS11/c2VyLWljb24tYmxh/Y2stMDEtcG5nLTMx/MS5wbmc";

const User = () => {
  const context: TContext = Context();


  React.useEffect(()=>{
    axios.get(api.apiUser.getUserID(context.auth.showData.id)).then(data =>{
      context.chargeUserInfo(data.data.body)
  })
    
  },[])
  return (
    <View style={tw`relative`}>
        <View style={tw`z-30 absolute right-6 top-6 bg-red-300`}>
      <TouchableWithoutFeedback  onPress={()=>context.logout()}>

        <Text>Sing-Out</Text>
      </TouchableWithoutFeedback>
        </View>
        <View style={tw`z-30 absolute right-6 top-20 bg-red-300`}>
      <TouchableWithoutFeedback  onPress={()=>console.log('context.',( context.auth.showData.id))}>

        <Text>see aut</Text>
      </TouchableWithoutFeedback>
        </View>
        <View style={tw`z-30 absolute right-6 top-40 bg-red-300`}>
      <TouchableWithoutFeedback  onPress={()=>console.log('context.',( context.userInfo))}>

        <Text>see userInfo</Text>
      </TouchableWithoutFeedback>
        </View>
      
      <View
        style={tw`w-full flex justify-center items-center h-1/2  bg-[${COLOR.SHADOW}]    rounded-bl-[60px]`}
      >
        <Image
          style={tw`w-48 h-48 border border-black rounded-full `}
          source={{ uri: imgUser }}
        />
      </View>
      <View style={tw`bg-[${COLOR.SHADOW}] relative  `}>
        <View
          style={tw`flex pt-6 gap-3 h-auto flex-col justify-center items-center bg-[${COLOR.BACKGROUND_MOVIL}] rounded-tr-[60px]`}
        >
          <Text style={tw` font-bold text-[32px]  `}>{context?.auth?.showData?.name}</Text>

          <Text style={tw` font-semibold text-[24px]`}>Data </Text>
        </View>
        <View style={tw`bg-[${COLOR.BACKGROUND_MOVIL}] flex flex-row gap-4 justify-center pt-8`} >
          <Text>Datos </Text>
          <Text>Info</Text>
        
        </View>
       
      </View>
      <View style={tw`  w-[80%] mx-10 h-24  bg-[${COLOR.BACKGROUND_MOVIL}] absolute -bottom-10 flex flex-row justify-between items-center  px-8 `}>
          <View style={tw`flex items-center gap-2`}>
            <Text>post liked</Text>
            <Text>{context?.userInfo?.viewPostLike.length}</Text>
          </View>
          <View style={tw`flex items-center gap-2`}>
            <Text>followers</Text>
            <Text>{context?.userInfo?.followers.length}</Text>
          </View>
          <View style={tw`flex items-center gap-2`}>
            <Text>youFollow</Text>
            <Text>{context?.userInfo?.youFollow.length}</Text>
          </View>
        </View>
      {/* <Button title='boton' onPress={()=> }/> */}
    </View>
  );
};

export default User;
