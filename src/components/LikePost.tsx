import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from 'twrnc'
export default function LikePost(){
  return(
    <View>
   

      <Icon name="thumbs-up" fill={'black'} color={'#484848'} size={32} styles={tw`w-16 h-16 fill-[#484848]`}/>
   
  </View>

  )
}