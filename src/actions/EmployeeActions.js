import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from "./types";

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);

  // make a call to web API
  return dispatch => {
    dispatch({ type: EMPLOYEE_CREATE });
    Actions.employeeList({ type: "reset" });
  };
};

export const employeesFetch = () => {
  console.log("employeeFetch");

  return dispatch => {
    // make request to web API getting the list of employees

    // inside the response callback place following
    dispatch({ type: EMPLOYEES_FETCH_SUCCESS });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  // const { currentUser } = firebase.auth();

  return dispatch => {
    // make request to web API to save an employee

    dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
    Action.employeeList({ type: "reset" });
  };
};
