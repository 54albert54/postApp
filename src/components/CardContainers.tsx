import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView} from 'react-native';
import tw from "twrnc";
import { Card } from '../page/Home/HomeScreen';
import { TProducts } from '../api/model';

type Props = {
  title:string
  product:TProducts[]
  navigation:any
}
export function CardContainers({title , product , navigation}:Props){




  
  return(
    <View>
      <View style={tw`flex flex-row justify-between `}>
        <Text style={tw`text-xl font-semibold `}>{title}</Text>
        <Text style={tw`text-xl font-semibold text-red-400 underline-offset-1 `} >See all</Text>
      </View>

        <Card navigation={navigation} product={product}/>


    </View>
  )
}