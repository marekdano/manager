import { combineReducers } from 'redux';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
	employeeorm: EmployeeFormReducer,
	sample: () => []
});