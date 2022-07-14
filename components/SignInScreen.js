import React, { useContext, useState } from "react";
import { StyleSheet, Text, Button, View, TextInput } from "react-native";
import { AuthContext } from "../App";

export default function SignInScreen() {
  const { authContext, state } = useContext(AuthContext);
  const { login } = authContext;

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (name, val) => {
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: val,
      };
    });
  };

  return (
    <View style={styles.container}>
      {state.error ? <Text style={{ color: "red" }}>{state.error}</Text> : null}
      <TextInput
        style={styles.input}
        onChangeText={(val) => handleChange("username", val)}
        placeholder="Enter Username"
        value={user.username}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(val) => handleChange("password", val)}
        value={user.password}
        placeholder="Enter password"
      />

      <Button title="Login" onPress={() => login(user)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    // paddingTop:20,
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: "50%",
    padding: 10,
  },
});
