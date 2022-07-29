import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { AuthContext } from "../App";

export default function Home({ navigation }) {
  const { authContext, state } = useContext(AuthContext);
  const { logout } = authContext;

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Text>
          Hello {state.user["username"]} - {state.user["id"]}{" "}
        </Text>
      </View>
      {state.user.groups[0] == 1 ? (
        <View style={styles.button}>
          <Button
            title="Add Ticket"
            onPress={() => navigation.navigate("Add Ticket")}
          />
        </View>
      ) : null}
      <View style={styles.button}>
        <Button
          title="View Tickets"
          onPress={() => navigation.navigate("View Tickets")}
        />
      </View>

      {state.isLoggedIn ? (
        <View style={styles.button}>
          <Button title="Logout" onPress={() => logout()} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 20,
  },
});
