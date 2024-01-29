import {
  TextInput,
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  RootTagContext,
  TouchableWithoutFeedback,
  SafeAreaView,
  FlatList,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import api from "../../api/api";
import Context, { TContext } from "../../provider/context";
import { useFormik } from "formik";
import * as Yup from "yup";

import tw from "twrnc";
import React from "react";
import axios from "axios";

const initialValue = () => ({
  // Define las propiedades iniciales del formulario
  userName: "",
  password: "",
});
const ValidationSchema = () => {
  return {
    userName: Yup.string().required("Se necesita un usuario."),
    password: Yup.string().required("Se necesita una contraseña."),
  };
};
const Login = () => {
  const context: TContext = Context();
  const [error, setError] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [auth, setAuth] = React.useState({ userName: "", password: "" });

  const formik = useFormik({
    initialValues: initialValue(),
    validationSchema: Yup.object(ValidationSchema()),
    validateOnChange: false,
    onSubmit: (values) => {
      const { password, userName } = values;
      setAuth({ password, userName });
    },
  });
  React.useEffect(() => {
    
    axios({
      method: "post",
      url: api.apiAuth.send,
      data: {
        userName: auth.userName,
        password: auth.password,
      },
    })
      .then((data) => {
        if (data.data.body.showData) {          
          context.login(data.data.body);
        }
        // context.login(data.data.body)
      })
      .catch((err) => console.log("hey error " + err));
  }, [auth]);

  return (
    <View>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        placeholder="userName"
        autoCapitalize="none"
        style={styles.input}
        value={formik.values.userName}
        onChangeText={(text) => formik.setFieldValue("userName", text)}
      />
      <TextInput
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        style={styles.input}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button
        title="Entrar"
        onPress={() => {
          formik.handleSubmit();
        }}
      />
      <View style={styles.errorContainer}>
        <Text style={styles.errors}>{formik.errors.userName}</Text>
        <Text style={styles.errors}>{formik.errors.password}</Text>
        <Text style={styles.errors}>{error}</Text>
      </View>
      <Text>user : prueba-user - password :123456</Text>
    </View>
  );
};

export default Login;

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
