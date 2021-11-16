import React,{useEffect,useState} from 'react';
import EmployeesTable from '../home/table'
import SalaryChart from './chart';
import {
    Modal,
    Button,
    ButtonToolbar,
    ButtonGroup
} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { deleteEmployee, getEmployees} from '../store/actions/employee_actions';



const Home = (props) => {
    const employees = useSelector(state => state.employees);
    let employeesData = employees.employees;
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();
    const[removeAlert, setRemoveAlert] = useState(false);
    const [toRemove,setToRemove] = useState(null);
    
    const handleClose = () => setRemoveAlert(false);
    
    const handleShow = (id=null) => {
        setToRemove(id);
        setRemoveAlert(true);
    }

    const handleDelete = () => {
        dispatch(deleteEmployee(toRemove));
    }

    useEffect(()=>{
        handleClose();
        if(notifications){
            dispatch(getEmployees())
        }
    },[dispatch, notifications])

    const editEmployeeAction = (id) => {
        props.history.push(`/edit-employee/${id}`)
    }



    return (
        <>
            <div className="home_container">
                <EmployeesTable
                    handleShow={(id)=>handleShow(id)}
                    editEmployeeAction={(id)=>editEmployeeAction(id)}
                />
            </div>
            <div className="add_button">
                <ButtonToolbar>
                    <ButtonGroup>
                        <LinkContainer to="/create-employees">
                            <Button variant="secondary">Add Employee</Button>
                        </LinkContainer>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
            <div>
                <SalaryChart
                    employeesData={employeesData}
                />
            </div>
            <Modal show={removeAlert} onHide={handleClose}>
                <Modal.Header closeButton>
                        <Modal.Title>Are you really sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        There is no going back
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={()=>handleDelete()}>
                            Delete
                        </Button>
                    </Modal.Footer>
            </Modal>
        </>
    )
}

export default Home
