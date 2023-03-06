import { React, useState } from 'react'
import Heropage from './Heropage'
import { useFormik } from 'formik'
import * as yup from 'yup'
import  axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate()

  const [disableSignUpButton, setDisableSignUpButton] = useState(false)
  const [message, setMessage] = useState('')
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName:'',
      email: '',
      nin: '',
      passWord: '',
      phone: '',
      streetAddress: '',
      state:'',
      lga:''
  },
  validationSchema: yup.object({
    firstName: yup.string().required('field reuired'),
    lastName: yup.string().required('field reuired'),
    email: yup.string().required('field reuired'),
    nin: yup.string().required('field reuired'),
    passWord: yup.string().required('field reuired'),
    phone: yup.string().required('field reuired'),
    streetAddress: yup.string().required('field reuired'),
    state: yup.string().required('field reuired'),
    lga: yup.string().required('field reuired')
  }),
  onSubmit: (values) => {
      console.log(values);
      setDisableSignUpButton(true)
      axios.post('http://localhost:4005/users/signup',values).then((response) => {
        console.log(response);
        if (response.data.status) {
          //localStorage.token = result.data.token
          navigate('/login')
          setDisableSignUpButton(false)
        }else{
          setMessage(response.data.message)
          setDisableSignUpButton(false)
        }
      })
  }
  })

  return (
    <>
    <Heropage formik={formik} disableSignUpButton={disableSignUpButton} message={message} />
    </>
  )
}

export default SignUp