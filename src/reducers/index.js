import { combineReducers } from 'redux';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
	employeeForm: EmployeeFormReducer,
	sample: () => []
});