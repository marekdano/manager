import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
 	return (
		<Router>
			<Scene key="root">
				<Scene key="login" component={LoginForm} title="Please Login" />
				<Scene 
					onRight={() => console.log('right!!!')}
					rightTitle="Add"
					key="employeeList" 
					component={EmployeeList} 
					title="Employees" 
					initial 
				/>
			</Scene>
		</Router>
	);
};

export default RouterComponent;