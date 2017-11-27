import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS
} from './types';

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	console.log(name, phone, shift);

	// make a call to web API
	return (dispatch) => {
		dispatch({ type: EMPLOYEE_CREATE });
		Actions.employeeList({ type: 'reset' });
	};
};

export const employeesFetch = () => {
	return (dispatch) => {
		// make request to web API getting the list of employees

		// inside the response callback
		//dispatch({ type: EMPLOYEE_FETCH_SUCCESS, payload: __value__ });
	};
};

