import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList} from 'react-native';
 import tw  from "twrnc";
 import Icon from 'react-native-vector-icons/FontAwesome5';
const ShoppingCar =()=>{

  return(
    <View style={tw`flex flex-row gap-4 justify-center items-center`} >
      <Text style={tw` mt-8 text-red-500 text-lg`}>Track Order</Text>
      <Icon name='cart-plus' color="#484848" size={30}style={{margin:10,height:30,marginTop:40,marginRight:30}}  />
    </View>
    )
};

export default ShoppingCar; 