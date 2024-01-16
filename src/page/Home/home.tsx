import { Text, View, Button } from "react-native";

import tw, { useDeviceContext, useAppColorScheme } from "twrnc";

export function Home({ navigation }) {
 
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);


  return (
    <View
    style={tw`w-full max-w-[430px] mx-auto   h-full flex flex-col border border-black  justify-center bg-blue-200 dark:bg-blue-600 gap-4 items-center `}
  >
    <Text>Bienvendio a mi app</Text>
    <View
      style={tw.style("    flex flex-row gap-10 justify-center items-center")}
    >
      <Text style={tw`text-black text-lg font-semibold  bg-blue-400 `}>
        sub title
      </Text>
      <Text style={tw`text-blue-400 text-lg font-semibold  bg-red-300 `}>
        sub title
      </Text>
    </View>
    <View style={tw`py-2 px-4 border rounded-xl `}>
    <Button  onPress={toggleColorScheme} title="Soy un boton"/>
    </View>
    <Text>hola</Text>
    <Button
      title="Back"
      onPress={() => {
        navigation.navigate('User')
      }}
    />
  </View>
  );
}