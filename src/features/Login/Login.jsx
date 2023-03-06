import React from 'react'
import LandingPageNav from '../../components/LandingPageNav'
import HeroPage from './HeroPage'
import { useFormik } from 'formik'
import * as yup from 'yup'
import  axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      nin: '',
      passWord:'',
      
  },
  validationSchema: yup.object({
    nin: yup.string().required('field reuired'),
    passWord: yup.string().required('field reuired'),
    
  }),
  onSubmit: (values) => {
      console.log(values);
      axios.post('http://localhost:4005/users/login',values).then((response) => {
        console.log(response);
        if (response.data.status) {
          //localStorage.token = result.data.token
          navigate('/dashboard')
        }else{
          alert('no')
        }
      })
  }
  })
  return (
    <>
      <HeroPage formik={formik} />
    </>
  )
}

export default Login