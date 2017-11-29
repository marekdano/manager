import { combineReducers } from 'redux';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
	employeeForm: EmployeeFormReducer,
	employees: EmployeeReducer,
	sample: () => []
});