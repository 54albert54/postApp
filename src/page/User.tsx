import { ScrollView, Text, View } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";
import tw, { useDeviceContext, useAppColorScheme } from "twrnc";
export function User() {
  return (
    <View style={tw`h-full flex-1  gap-4 bg-red-300`}>
      <View>
        <Text>User</Text>
      </View>
      <ScrollView horizontal={true}  style={tw`h-[100px] flex flex-row gap-4`}>
      {
        Array(7).fill('_').map((_,index)=>(
          <View style={tw`w-[300px] m-4 h-[200px] rounded-xl bg-slate-300 shadow-xl`}>
            <Text>{index}</Text>
          </View>
        ))
      }
    </ScrollView>
    <View style={tw`flex-3`}>
    <Text style={tw`text-2xl font-semibold`}>Sections</Text>
    <Text style={tw`text-2xl font-semibold`}>Sections</Text>
    </View>
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});