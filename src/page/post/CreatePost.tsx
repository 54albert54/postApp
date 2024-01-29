import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import { useFormik } from "formik";
import * as Yup from "yup";
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import api from '../../api/api';
import Context, { TContext } from '../../provider/context';
import tw from 'twrnc'
import { useFocusEffect } from '@react-navigation/native';

const initialValue = (value:any) => ({
  // Define las propiedades iniciales del formulario
  title: value.title,
  detail: value.detail,
});

const CreatePost =(Props: any)=>{
  const { navigation, route } = Props;
  const {auth}: TContext = Context();
  const [isOwn , setIsOwn] = React.useState(false)
  const [error, setError] = React.useState("");
  const [value, onChangeText] = React.useState({ title: "", detail: "" });

  const titleMjs = isOwn?'Edita el titulo.':"Debes de tener un titulo."
  const detailMjs = isOwn?'Edita el mensaje.':"Debes de tener de que hablaras."
  const ValidationSchema = () => {
    return {
      title: Yup.string().required(titleMjs),
      detail: Yup.string().required(detailMjs),
    };
  };

  useFocusEffect(
    React.useCallback(()=>{
      if (route?.params?.params){
        setIsOwn(route.params.params.isOwnPost)
      onChangeText({
        title:route.params.params.title,
        detail:route.params.params.detail 
      })
    }
    
    },[]) 
 )



  const formik = useFormik({
    initialValues: initialValue(value),
    validationSchema: Yup.object(ValidationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      const { detail, title } = values;
      onChangeText({ detail, title });
      (async()=>{
        axios({
          method: isOwn?"put":"post",
          url:isOwn?api.apiPost.getPostID(route.params.params.id) :api.apiPost.getAllPost(),
          headers:{
            'Authorization': `Bearer ${auth.token}`,
          },
          data: {
            title: title,
            detail: detail,
          },
        })
          .then((data) => {
            isOwn?navigation.navigate('HomeBlogs'):navigation.goBack();
          })
          .catch((err) => console.log("hey error " + err));
      })()
    },
  });



  return(
    <View>
    <Text style={styles.title}>Create Post</Text>
    <TextInput
      placeholder="title"
      maxLength={40}
      autoCapitalize="none"
      style={styles.input}
      value={value.title}
      onChangeText={(text) => {
        formik.setFieldValue("title", text)
        onChangeText({...value,title:text})
      }}
    />
    <TextInput
      placeholder="detail"
      autoCapitalize="none"
      
      editable
        multiline
        numberOfLines={4}
        maxLength={40}
      style={styles.inputText}
      value={value.detail}
      onChangeText={(text) => {
        formik.setFieldValue("detail", text)
        onChangeText({...value,detail:text})
      }}
    />
    <View style={tw` flex flex-row justify-between px-20 mt-20`}>
    <Button
      title="Enviar"
      onPress={() => {
        formik.handleSubmit();
      }}
    />
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
    </View>
   
   
    <View style={styles.errorContainer}>
      <Text style={styles.errors}>{formik.errors?.title}</Text>
      <Text style={styles.errors}>{formik.errors?.detail}</Text>
      <Text style={styles.errors}>{error}</Text>
    </View>
  
  </View>
    )
};

export default CreatePost; 

const styles = StyleSheet.create({
  title: {
    width: "100%",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  inputText: {
    width: "90%",
    height:280,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  errorContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
  errors: {
    marginVertical: "auto",
    color: "#f00",
    fontSize: 16,
  },
});