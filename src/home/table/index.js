import React,{useEffect} from "react";
import { useSelector,useDispatch} from "react-redux";
import { getEmployees } from "../../store/actions/employee_actions";
import {Table} from "react-bootstrap";
import Loader from "../../utils/loader";


const EmployeesTable = ({handleShow,editEmployeeAction}) => {
    const employees = useSelector(state=>state.employees);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getEmployees())
    },[dispatch])

    return (
        <div className="table_container">
            <h1>Employees Table</h1>
            <div className="employees_table">
                <Table responsive="sm" bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Position</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            employees && employees.employees ?
                                employees.employees.map((employee)=>(
                                    <tr key={employee._id}>
                                        <td>{employee.name}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.position}</td>
                                        <td>{employee.salary}</td>
                                        <td className="action_btn remove_btn"
                                            onClick={()=>handleShow(employee._id)}
                                        >
                                            Remove
                                        </td>
                                        <td className="action_btn edit_btn"
                                            onClick={()=>editEmployeeAction(employee._id)}
                                        >
                                            Edit
                                        </td>
                                    </tr>
                                ))
                            :
                            <Loader/>
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default EmployeesTable;