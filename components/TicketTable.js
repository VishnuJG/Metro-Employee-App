import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Alert, View, ScrollView } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import axios from "axios";
import SweetAlert from "react-native-sweet-alert";
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8000`;
import { AuthContext } from "../App";

const TicketTable = () => {
  const [tickets, setTickets] = useState([]);
  const { authContext, state } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`${uri}/api/get_tickets/${state.user.id}`)
      .then(function (response) {
        setTickets(response.data.tickets);
      });
  }, []);

  function deleteTicket() {
    SweetAlert.showAlertWithOptions(
      {
        title: "Hello",
        subTitle: "hello ",
        confirmButtonTitle: "OK",
        confirmButtonColor: "#000",
        otherButtonTitle: "Cancel",
        otherButtonColor: "#dedede",
        style: "success",
        cancellable: true,
      },
      (callback) => console.log("callback")
    );
  }

  const LeftContent = (props) => <Avatar.Icon {...props} icon="check" />;
  return (
    <View>
      <ScrollView>
        {tickets.map((ticket) => {
          return (
            <Card key={ticket.id} style={styles.cardstyle}>
              <Card.Title title={"# " + ticket.id} left={LeftContent} />
              <Card.Content>
                <Title>Type : {ticket.issue_type}</Title>
                <Paragraph>User ID : {ticket.username}</Paragraph>
                <Paragraph>Ticket Sub-type : {ticket.issue_sub_type}</Paragraph>
                <Paragraph>Created Time : {ticket.created_datetime}</Paragraph>
                <Paragraph>Ticket Description : {ticket.description}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: `${uri}${ticket.image}` }} />
              <Card.Actions>
                <Button
                  onPress={() => {
                    console.log("Hello edit");
                  }}
                >
                  Edit
                </Button>
                <Button
                  onPress={() => {
                    deleteTicket();
                  }}
                >
                  Delete
                </Button>
              </Card.Actions>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TicketTable;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
  cardstyle: {
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    borderRadius: 20,
    flex: 1,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: "95%",
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    marginRight: 50,
    bottom: 0,
    padding: 5,
  },
});
