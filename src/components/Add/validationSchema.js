import * as Yup from 'yup'

export const formValues = {
    name:'',
    age:'',
    position:'',
    salary:''
}

export const validation = () => (
    Yup.object({
        name:Yup.string().required('Name is required'),
        age:Yup.number().required('Age is required').min(0).max(100),
        position:Yup.string().required('Position is required'),
        salary:Yup.number().required('Salary is required')
    })
)