import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import tw from 'twrnc'
import { COLOR } from '../provider';

const CreatePostBoton =({changePage})=>{

  return(
    <View style={tw`w-full h-16 flex justify-center items-center`}>
    <TouchableWithoutFeedback onPress={changePage}>
    <View style={tw`bg-[${COLOR.SHADOW}] px-8  py-3 rounded-xl`} >
      <Text style={tw`font-semibold text-white text-xl`}>CreatePost </Text>
    </View>
    </TouchableWithoutFeedback>
    </View>
    )
};

export default CreatePostBoton; 