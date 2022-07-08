import React,{useState,useEffect} from 'react';
import { StyleSheet,Alert } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';


const TicketTable = (props) => {

    const [tickets, setTickets] = useState([])

    useEffect(() => {
        
        axios.get('http://localhost:8000/get_tickets/')
        .then(function (response) {
            setTickets(response.data.tickets);
        })

    }, [])
    

return (
	<DataTable style={styles.container}>

	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>Type</DataTable.Title>
		<DataTable.Title>Sub-type</DataTable.Title>
		<DataTable.Title>Description</DataTable.Title>
	</DataTable.Header>

    {
        tickets.map(ticket => {
            return(
                // <DataTable.Row key={ticket.id} onPress={()=>{Alert.alert('Employee Data', `Ticket Type : ${emp.name}\n\nTicket Sub-type : ${emp.email}\n\nTicket Description : ${emp.location}`,[{text:"Edit", onPress:()=>{props.navigation.navigate("Edit",{emp:emp})}},{text:"Delete", onPress:()=>{}}])}}>
                <DataTable.Row key={ticket.id} onPress={()=>{props.navigation.navigate("Edit Details",{data:emp})}}>
                    <DataTable.Cell>{ticket.issue_type}</DataTable.Cell>
                    <DataTable.Cell>{ticket.issue_sub_type}</DataTable.Cell>
                    <DataTable.Cell>{ticket.description}</DataTable.Cell>
                </DataTable.Row>
            )
        })
    }

	</DataTable>
);
};

export default TicketTable;

const styles = StyleSheet.create({
container: {
	padding: 15,
},
tableHeader: {
	backgroundColor: '#DCDCDC',
},
});
