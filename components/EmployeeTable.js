import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet,Alert } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';


const baseUrl = 'http://127.0.0.1:8000';


const employees = [
    {
        name:'Installation',
        email:'Sample Installation',
        location:'Request for installation of the sample bot'
    },
    {
        name:'Configuration',
        email:'Sample configuration',
        location:'Configure the new sample demo bot as soon as possible'
    },
    {
        name:'Resource',
        email:'Provide resource',
        location:'Provide suitable resource for work'
    },

]



const EmployeeTable = (props) => {
    
    useEffect(() => {
        axios({method: 'get',url: 'http://127.0.0.1:8000/get_tickets/',}).then((response) => {console.log(response.data);}).catch(error => console.log(error));;
      }, []);


return (
	<DataTable style={styles.container}>

	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>Type</DataTable.Title>
		<DataTable.Title>Sub-type</DataTable.Title>
		<DataTable.Title>Description</DataTable.Title>
	</DataTable.Header>

    {
        employees.map(emp => {
            return(
                <DataTable.Row key={emp.email} onPress={()=>{Alert.alert('Employee Data', `Ticket Type : ${emp.name}\n\nTicket Sub-type : ${emp.email}\n\nTicket Description : ${emp.location}`,[{text:"Edit", onPress:()=>{props.navigation.navigate("Edit",{data:emp})}}])}}>
                    <DataTable.Cell>{emp.name}</DataTable.Cell>
                    <DataTable.Cell>{emp.email}</DataTable.Cell>
                    <DataTable.Cell>{emp.location}</DataTable.Cell>
                </DataTable.Row>
            )
        })
    }

	</DataTable>
);
};

export default EmployeeTable;

const styles = StyleSheet.create({
container: {
	padding: 15,
},
tableHeader: {
	backgroundColor: '#DCDCDC',
},
});
