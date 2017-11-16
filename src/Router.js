import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
 	return (
		<Router>
			<Scene key="root">
				<Scene key="login" component={LoginForm} title="Please Login" />
				<Scene 
					onRight={() => Actions.employeeCreate()}
					rightTitle="Add"
					key="employeeList" 
					component={EmployeeList} 
					title="Employees" 
					initial 
				/>
				<Scene key="employeeCreate" component={EmployeeCreate} title="Create Employee" />
			</Scene>
		</Router>
	);
};

export default RouterComponent;