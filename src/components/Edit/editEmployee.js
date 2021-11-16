import React,{useState, useEffect} from 'react';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import { getEmployeeById, updateEmployee} from '../../store/actions/employee_actions'; 
import { clearCurrentEmplyee } from '../../store/actions';
import { validation, formValues } from '../Add/validationSchema';
import Loader from '../../utils/loader';
import { 
    TextField, 
    Button, 
    Divider, 
} from '@material-ui/core';


const EditEmployee = (props) => {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.notifications);
    const employees = useSelector(state => state.employees);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState(formValues);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formData,
        validationSchema: validation,
        onSubmit:(values,{resetForm})=>{
            setIsSubmitting(true);
            dispatch(updateEmployee(values,props.match.params.id))
        }
    })

    const errorHelper = (formik,values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    })

    useEffect(()=>{
        if(notifications && notifications.success){
            props.history.push("/")
        }
        if(notifications && notifications.error){
            setIsSubmitting(false);
        }
    },[notifications, props.history])

    useEffect(()=>{
        dispatch(getEmployeeById(props.match.params.id))
    },[dispatch, props.match.params])

    useEffect(()=>{
        if(employees && employees.current){
            setFormData(employees.current)
        }
    },[employees])

    useEffect(()=>{
        return()=>{
            dispatch(clearCurrentEmplyee())
        }
    },[dispatch])


    return (
        <>
            <div className="edit_container">   
                <h1>Edit Employee</h1>
                <div className="edit_form">
                    {
                        isSubmitting ?
                            <Loader/>
                        :
                            <form className="mt-3 employee_form" onSubmit={formik.handleSubmit}>
                                <h5>Name</h5>
                                <div className="form-group">
                                    <TextField
                                        style={{width:'100%'}}
                                        name="name"
                                        label="Enter employee's name"
                                        variant="outlined"
                                        {...formik.getFieldProps('name')}
                                        {...errorHelper(formik,'name')}
                                    />
                                </div>
                                <Divider className="mt-3 mb-3"/>

                                <div className="form-group">
                                <h5>Age</h5>
                                    <TextField
                                        style={{width:'100%'}}
                                        name="age"
                                        label="Enter employee's age"
                                        variant="outlined"
                                        {...formik.getFieldProps('age')}
                                        {...errorHelper(formik,'age')}
                                    />
                                </div>

                                <Divider className="mt-3 mb-3"/>

                                <div className="form-group">
                                <h5>Position</h5>
                                    <TextField
                                        style={{width:'100%'}}
                                        name="position"
                                        label="Enter employee's position"
                                        variant="outlined"
                                        {...formik.getFieldProps('position')}
                                        {...errorHelper(formik,'position')}
                                    />
                                </div>

                                <Divider className="mt-3 mb-3"/>
                                
                                <div className="form-group">
                                <h5>Salary</h5>
                                    <TextField
                                        style={{width:'100%'}}
                                        name="salary"
                                        label="Enter employee's salary"
                                        variant="outlined"
                                        {...formik.getFieldProps('salary')}
                                        {...errorHelper(formik,'salary')}
                                    />
                                </div>
                                <Divider className="mt-3 mb-3"/>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Edit Employee
                                </Button>
                            </form>

                    }
                </div>
            </div>
        </>
    )
}

export default EditEmployee