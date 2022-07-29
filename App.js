import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useReducer, useMemo } from "react";
import { useDimensions } from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import Constants from "expo-constants";
const { manifest } = Constants;

import TicketForm from "./components/TicketForm";
import Home from "./components/Home";
import TicketTable from "./components/TicketTable";
import LoadingScreen from "./components/LoadingScreen";
import SignInScreen from "./components/SignInScreen";

const Stack = createNativeStackNavigator();
export const AuthContext = React.createContext();
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8000`;

export default function App() {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "USER_LOADING":
          return {
            ...prevState,
            isLoading: true,
            isLoggedIn: false,
            user: null,
          };
        case "AUTH_ERROR":
          return {
            ...prevState,
            userToken: null,
            isLoading: false,
            isLoggedIn: false,
            error: action.error,
            user: null,
          };
        case "LOGGED_IN":
          async function setToken(key, value) {
            await SecureStore.setItemAsync(key, value);
          }
          setToken("userToken", action.token);
          return {
            ...prevState,
            isLoading: false,
            isLoggedIn: true,
            userToken: action.token,
            error: null,
            user: action.user,
          };
        case "LOGGED_OUT":
          async function deleteToken() {
            await SecureStore.deleteItemAsync("userToken");
          }
          deleteToken();
          return {
            ...prevState,
            isLoggedIn: false,
            userToken: null,
            isLoading: false,
            error: null,
            user: null,
          };
        default:
          return state;
      }
    },
    {
      isLoading: true,
      isLoggedIn: false,
      userToken: null,
      error: null,
      user: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    const verifyTokenAsync = async (userToken) => {
      dispatch({ type: "USER_LOADING" });
      axios
        .post(`${uri}/auth/getUserFromToken`, { token: userToken })
        .then((response) => {
          console.log(response);
          dispatch({
            type: "LOGGED_IN",
            user: response.data["user"],
            token: response.data["token"],
          });
        })
        .catch((err) => {
          dispatch({ type: "AUTH_ERROR" });
          console.log("Auth error");
        });
    };

    const fetchTokenAsync = async () => {
      let userToken = "";

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // let something = await SecureStore.deleteItemAsync("userToken");
        userToken = await SecureStore.getItemAsync("userToken");
        console.log(userToken);
        verifyTokenAsync(userToken);
      } catch (e) {
        // Restoring token failed
        console.log(e);
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
    };

    fetchTokenAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      login: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "USER_LOADING" });
        axios
          .post(`${uri}/auth/login`, data)
          .then(function (response) {
            dispatch({
              type: "LOGGED_IN",
              token: response.data["token"],
              user: response.data["user"],
            });
          })
          .catch((e) => {
            dispatch({ type: "AUTH_ERROR", error: "Credentials didn't match" });
            console.log(e);
          });
      },
      logout: () => dispatch({ type: "LOGGED_OUT" }),
      signup: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: "LOGGED_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ authContext, state }}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen
              options={{ headerShown: false }}
              name="LoadingScreen"
              component={LoadingScreen}
            />
          ) : state.userToken == null ? (
            <Stack.Screen name="Login" component={SignInScreen} />
          ) : (
            <>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Home" }}
              />
              <Stack.Screen name="Add Ticket" component={TicketForm} />
              <Stack.Screen name="View Tickets" component={TicketTable} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
