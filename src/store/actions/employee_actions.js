import axios from "axios";
import * as employees from './index';

const endpoints = "19ef2ad4ac144ad2b7313380f3b98db0";
const resources = "employees";

export const getEmployees = () => {
    return (dispatch) => {
        try {
            axios.get(`https://crudcrud.com/api/${endpoints}/${resources}`)
            .then(function(response) {
                let results = [...response.data];
                dispatch(employees.getEmployees(results))
            })

        } catch(err){
            dispatch(employees.errorGlobal('Error loading employees'))
        }
    }
}

export const getEmployeeById = (id) => {
    return (dispatch) => {
        try {
            axios.get(`https://crudcrud.com/api/${endpoints}/${resources}/${id}`)
            .then(function(response){
                let result = response.data;
                dispatch(employees.getEmployeeById(result));
            })
        } catch (err) {
            console.log(err);
        }
    }
}

export const createEmployee = (employee) => {
    return(dispatch) => {
        try {
            axios.post(`https://crudcrud.com/api/${endpoints}/${resources}`, employee)
            .then(function(response){
                let result = response.data;
                dispatch(employees.createEmployee(result));
                dispatch(employees.successGlobal('Success adding employee'));
            })
        } catch(err){
            console.log(err);
        }
    }
}

export const updateEmployee = (newEmployeeData, id) => {
    return(dispatch) => {
        try {
            // axios.put(`https://crudcrud.com/api/${endpoints}/${resources}/${id}`,newEmployeeData)
            // .then(function(response){
            //     let result = response.data;
            //     console.log(result);
            //     dispatch(employees.updateEmployee(result))
            //     dispatch(employees.successGlobal('Update success'));
            // })
            axios({
                method:'PUT',
                url:`https://crudcrud.com/api/${endpoints}/${resources}/${id}`,
                headers:{
                    'Content-Type':'application/json',
                    'Cache-Control':'no-cache',
                },
                data:newEmployeeData
            }).then(function(response){
                //let result = response.data;
                console.log(response.data);
                //dispatch(employees.updateEmployee(result));
                dispatch(employees.successGlobal());
            })
        } catch(err){
            console.log(err);
        }
    }
}

export const deleteEmployee = (id) => {
    return(dispatch) => {
        try {
            axios.delete(`https://crudcrud.com/api/${endpoints}/${resources}/${id}`)
            .then(function(response){
                console.log(response);
                dispatch(employees.deleteEmployee());
                dispatch(employees.successGlobal('Employee deleted'));
            })
        } catch(err){
            console.log(err);
        }
    }
}