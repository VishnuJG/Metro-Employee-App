import React, { useState, useEffect } from "react";
import { StyleSheet, Alert } from "react-native";
import { DataTable } from "react-native-paper";
import axios from "axios";
import Constants from "expo-constants";
const { manifest } = Constants;
const uri = `http://${manifest.debuggerHost.split(":").shift()}:8000`;

const TicketTable = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get(`${uri}/api/get_tickets/`).then(function (response) {
      setTickets(response.data.tickets);
    });
  }, []);

  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Type</DataTable.Title>
        <DataTable.Title>Sub-type</DataTable.Title>
        <DataTable.Title>Description</DataTable.Title>
      </DataTable.Header>

      {tickets.map((ticket) => {
        return (
          <DataTable.Row
            key={ticket.id}
            onPress={() => {
              Alert.alert(
                "Employee Data",
                `Ticket Type : ${ticket.issue_type}\n\nTicket Sub-type : ${ticket.issue_sub_type}\n\nTicket Description : ${ticket.description}`
              );
            }}
          >
            <DataTable.Cell>{ticket.issue_type}</DataTable.Cell>
            <DataTable.Cell>{ticket.issue_sub_type}</DataTable.Cell>
            <DataTable.Cell>{ticket.description}</DataTable.Cell>
          </DataTable.Row>
        );
      })}
    </DataTable>
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
});
