import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from "twrnc";
import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList, ScrollView, Touchable, TouchableHighlight} from 'react-native';
import ShoppingCar from '../../components/ShoppingCar';
import { banner, categories } from '../../provider';
import ShowCategories from '../../components/ShowCategories';
import { Servicies } from '../../api';
import { TProducts } from '../../api/model';
import { CardContainers } from '../../components/CardContainers';
import axios from 'axios';

// onPress={()=>navigation.goBack()}


const HomeScreen =({navigation})=>{
  const [product, setProduct]= React.useState<TProducts[]>([])

  React.useEffect(()=>{
   
    axios.get(`https://api.escuelajs.co/api/v1/products`).then(resp =>{
      setProduct(resp.data)
    })
      
    
      
    
    
    navigation.setOptions({
      headerLeft:()=><Icon name='bars' color="#484848" size={30}style={{margin:6,height:30,marginTop:40}} />,
       headerRight:()=> <ShoppingCar/>,
    })

  },[])

  return(
    <SafeAreaView>
      <View style={tw`pt-16 px-4 flex flex-col gap-4  `}>
      <Text style={tw`text-xl`}>Deals </Text>
      {/* Banner  */}
        <View style={tw` w-full h-[200px] relative bg-blue-300 rounded-xl overflow-hidden`}>
          <Image style={tw`w-full h-full`} source={{uri: banner}} />
          <View style={tw` w-1/2 h-[200px] absolute flex flex-col items-center justify-center  z-10`}>

        <Text style={tw` text-[#fff] text-4xl z-10`}>Pizzeria </Text>
        <Text style={tw` text-[#fff] text-sm z-10`}>the  <Text style={tw` text-[#f00] text-sm z-10`}>newItalia </Text></Text>
          </View>
        </View>
        {/* Categories */}
            <ShowCategories/>
        {/* exhibitions */}
        <CardContainers title={'Pizza'} product={product} navigation={navigation}/>

      </View>
    </SafeAreaView>
    )
};

export default HomeScreen; 
//  style={tw` `}

type Props = {
  product:TProducts[]
  navigation:any
}

export function Card ({product,navigation}:Props){

  return(
    <ScrollView horizontal={true}  style={tw`h-[190px] flex flex-row gap-8`}>
      {
        product.map((product,index)=>(
          <View style={tw`mx-4 `}>
          <TouchableHighlight   onPress={() => {
            navigation.navigate('Perfil')
          }}  key={index+product.title}>
            <View  style={tw`w-[180px]   h-auto  flex flex-col justify-end items-center gap-2 rounded-xl bg-[#ffffff] shadow-xl`}>
            <Text style={tw` mb-6`}>{product.id}</Text>
             <Image style={tw`w-full h-full mt-6`} source={{uri: product.images[0]}} />
            <Text style={{color:'#484848',fontWeight:'500'}}>{product.title}</Text>
          </View>
          </TouchableHighlight>
          </View>
        ))
      }
    </ScrollView>

  )
}