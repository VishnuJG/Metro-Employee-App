import React from 'react';
import { StyleSheet,Alert } from 'react-native';
import { DataTable } from 'react-native-paper';

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

const EmployeeTable = () => {
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
                <DataTable.Row key={emp.email} onPress={()=>{Alert.alert('Employee Data', `Ticket Type : ${emp.name}\n\nTicket Sub-type : ${emp.email}\n\nTicket Description : ${emp.location}`,[{text:"Edit", onPress:}])}}>
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
