import React from 'react';
import { StyleSheet,Alert } from 'react-native';
import { DataTable } from 'react-native-paper';

const employees = [
    {
        name:'Surya',
        email:'suryamnnitk@gmail.com',
        location:'Bangalore'
    },
    {
        name:'Vishnu',
        email:'vishnu@gmail.com',
        location:'Bangalore'
    },
    {
        name:'Suhas',
        email:'suhas@gmail.com',
        location:'Udupi'
    },

]

const EmployeeTable = () => {
return (
	<DataTable style={styles.container}>

	<DataTable.Header style={styles.tableHeader}>
		<DataTable.Title>Type</DataTable.Title>
		<DataTable.Title>Email</DataTable.Title>
		<DataTable.Title>Location</DataTable.Title>
	</DataTable.Header>

    {
        employees.map(emp => {
            return(
                <DataTable.Row key={emp.email} onPress={()=>{Alert.alert('Employee Data', `Ticket Type : ${emp.name}\nTicket Sub-type : ${emp.email}\nTicket Description : ${emp.location}`)}}>
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
