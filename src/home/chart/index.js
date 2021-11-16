import React,{useEffect} from 'react';
import { getEmployees } from '../../store/actions/employee_actions';
import {useDispatch} from 'react-redux'
import Loader from '../../utils/loader';
import {Bar} from 'react-chartjs-2';


const SalaryChart = ({employeesData}) => {
    const dispatch = useDispatch();
      
    
    useEffect(()=>{
        dispatch(getEmployees())
    },[dispatch])

    return (
        <>
            <div className="chart_container">
                <h1>Employees Salary Chart</h1>
                <div className="bar_chart">
                    {
                        employeesData ?
                            <Bar
                                data={{
                                    labels: employeesData.map((item)=>(
                                        item.name
                                    )),
                                    datasets:[
                                        {
                                            label:'Employees Salary',
                                            data: employeesData.map((item)=>(
                                                item.salary
                                            )),
                                            backgroundColor: [
                                                'rgba(255, 99, 132, 0.2)',
                                                'rgba(54, 162, 235, 0.2)',
                                                'rgba(255, 206, 86, 0.2)',
                                                'rgba(75, 192, 192, 0.2)',
                                                'rgba(153, 102, 255, 0.2)',
                                                'rgba(255, 159, 64, 0.2)',
                                              ],
                                              borderColor: [
                                                'rgba(255, 99, 132, 1)',
                                                'rgba(54, 162, 235, 1)',
                                                'rgba(255, 206, 86, 1)',
                                                'rgba(75, 192, 192, 1)',
                                                'rgba(153, 102, 255, 1)',
                                                'rgba(255, 159, 64, 1)',
                                              ],
                                              borderWidth: 1,
                                        }
                                    ]
                                }}

                                options={{
                                    scales: {
                                        yAxes: [
                                          {
                                            ticks: {
                                              beginAtZero: true,
                                            },
                                          },
                                        ],
                                      },
                                }}
                                
                            />
                        :
                        <Loader/>
                    }
                </div>
            </div>
        </>
    )
}

export default SalaryChart;