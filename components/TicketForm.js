import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8000`;
import { AuthContext } from "../App";
import axios from "axios";

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append("photo", {
    name: "Something",
    type: photo.type + "/" + photo.uri.split(".").at(-1),
    uri: Platform.OS === "ios" ? photo.uri.replace("file://", "") : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });
  console.log(data);
  return data;
};

export default function TicketForm({ navigation }) {
  const firstUpdate = useRef(true);
  const { authContext, state } = useContext(AuthContext);
  const [image, setImage] = React.useState(null);
  const [ticket, setTicket] = useState({
    issue_type: "", //issue_type
    issue_sub_type: "", //issue_sub_type
    description: "", //description
    priority: "",
  });

  const handleChange = (name, val) => {
    setTicket((prevValue) => {
      return {
        ...prevValue,
        [name]: val,
      };
    });
  };

  const handleUploadPhoto = () => {
    // fetch(`${uri}/api/raiseTicket`, {
    //   method: "POST",
    //   body: createFormData(image, { ...ticket, user: state.user.id }),
    // })
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log("response", response);
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //   });

    const body = createFormData(image, {
      ...ticket,
      user: state.user.username,
    });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    axios
      .post(`${uri}/api/raiseTicket`, body, config)
      .then(function (response) {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
    }
  };

  // useEffect(() => {
  //   if ( firstUpdate .current ) {
  //     firstUpdate .current = false;
  //     return;
  //   }
  //   console.log(employees);
  //   onEmpUpdate({
  //     name: "",
  //     email:"",
  //     location:""
  //   });
  //   Alert.alert('Ticket Added')
  // }, [employees])

  const onSubmit = (e) => {
    e.preventDefault();
    // if(!emp.name){
    //   Alert.alert('Invalid Name', 'Invalid Name field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    // }
    // else if(!emp.location){
    //   Alert.alert('Invalid Location', 'Invalid Name field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    // }
    // else if(!emp.email){
    //   Alert.alert('Invalid Email', 'Invalid Email field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    // }
    // else if(!/\S+@\S+\.\S+/.test(emp.email)){
    //   Alert.alert('Invalid Email', 'Invalid Email field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    // }
    // if(!id){
    //   Alert.alert('Invalid Id', 'Invalid ID field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    // }

    setEmployees((prevValue) => {
      return [...prevValue, emp];
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Metro Ticket App</Text>

        <View style={styles.picker}>
          <RNPickerSelect
            placeholder={{ label: "Select Issue Type", value: null }}
            onValueChange={(value) => handleChange("issue_type", value)}
            items={[
              { label: "Hardware", value: "Hardware" },
              { label: "Network", value: "Network" },
              { label: "Portal Access", value: "Portal Access" },
              { label: "Configuration", value: "Configuration" },
              { label: "Installation", value: "Installation" },
            ]}
          />
        </View>

        <TextInput
          style={styles.input}
          onChangeText={(val) => handleChange("issue_sub_type", val)}
          value={ticket.issue_sub_type}
          placeholder="Enter Ticket sub-type"
        />

        <TextInput
          style={styles.input}
          onChangeText={(val) => handleChange("description", val)}
          value={ticket.description}
          multiline={true}
          placeholder="Enter ticket Description"
        />

        <View style={styles.picker}>
          <RNPickerSelect
            placeholder={{ label: "Select Priority", value: null }}
            onValueChange={(value) => handleChange("priority", value)}
            items={[
              { label: "High", value: "High" },
              { label: "Medium", value: "Medium" },
              { label: "Low", value: "Low" },
            ]}
          />
        </View>

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image.uri }}
              style={{ width: 200, height: 200 }}
            />
          )}
        </View>

        <Button title="Submit" color="green" onPress={handleUploadPhoto} />
      </View>
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
    // height: 40,
    margin: 12,
    borderWidth: 1,
    width: "75%",
    padding: 10,
  },
  picker: {
    margin: 12,
    borderWidth: 1,
    width: "75%",
    padding: 10,
  },
});
