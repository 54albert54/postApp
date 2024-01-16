import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView} from 'react-native';
import { categories } from '../provider';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";

const ShowCategories =()=>{

  return(
    <>
    <Text style={tw`text-xl`}>Categories </Text>
    <ScrollView horizontal={true}  style={tw`h-[100px] flex flex-row gap-4`}>
      {
        categories.map((category,index)=>(
          <View style={tw`w-[80px] m-4 h-auto p-2 flex flex-col justify-center items-center gap-2 rounded-xl bg-[#312f30] shadow-xl`}>
            <Icon name={category.icon} color={category.color} size={30}style={{width:30,height:30}} />
            <Text style={{color:'#fff',fontWeight:'500'}}>{category.name}</Text>
          </View>
        ))
      }
    </ScrollView>

</>
    )
    
};

export default ShowCategories; 