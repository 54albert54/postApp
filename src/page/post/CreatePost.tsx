import { Button, StyleSheet, Text, View , Image , RootTagContext , TouchableWithoutFeedback , SafeAreaView ,FlatList ,ScrollView , TouchableHighlight} from 'react-native';
import { useFormik } from "formik";
import * as Yup from "yup";
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import api from '../../api/api';
import Context, { TContext } from '../../provider/context';
import tw from 'twrnc'

const initialValue = () => ({
  // Define las propiedades iniciales del formulario
  title: "",
  detail: "",
});
const ValidationSchema = () => {
  return {
    title: Yup.string().required("Debes de tener un titulo."),
    detail: Yup.string().required("Debes de tener de que hablaras."),
  };
};
const CreatePost =({navigation})=>{
  const {auth}: TContext = Context();
  const [error, setError] = React.useState("");
  const [value, onChangeText] = React.useState({ title: "", detail: "" });

  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object(ValidationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      const { detail, title } = values;
      onChangeText({ detail, title });
      (async()=>{
        axios({
          method: "post",
          url: api.apiPost.getAllPost(),
          headers:{
            'Authorization': `Bearer ${auth.token}`,
          },
          data: {
            title: title,
            detail: detail,
          },
        })
          .then((data) => {
            navigation.goBack();
            console.log('value',values);
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
      value={formik.values.title}
      onChangeText={(text) => formik.setFieldValue("title", text)}
    />
    <TextInput
      placeholder="detail"
      autoCapitalize="none"
      
      editable
        multiline
        numberOfLines={4}
        maxLength={40}
      style={styles.inputText}
      value={formik.values.detail}
      onChangeText={(text) => formik.setFieldValue("detail", text)}
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
      <Text style={styles.errors}>{formik.errors.title}</Text>
      <Text style={styles.errors}>{formik.errors.detail}</Text>
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