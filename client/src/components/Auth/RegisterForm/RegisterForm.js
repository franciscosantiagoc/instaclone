import React from 'react'
import { Form, Button } from 'semantic-ui-react';
import  { useFormik } from 'formik';
import './RegisterForm.scss';

export default function RegisterForm(props) {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: null,
    onSubmit: (formValue) => {
      console.log("Form enviado")
      console.log(formValue)
    }
  })

  return (
    <>
      <h2 className='register-form-title'>Registrate para conectar con tus amigos</h2>
      <Form className='register-form' onSubmit={formik.handleSubmit}>
        <Form.Input 
        type='text'
        placeholder='Nombre y apellidos'
        name='name'
        onChange={formik.handleChange}/>

      <Form.Input 
        type='text'
        placeholder='Nombre de usuario'
        name='username'
        onChange={formik.handleChange}/> 

      <Form.Input 
        type='text'
        placeholder='Correo electronico'
        name='email'
        onChange={formik.handleChange}/> 
      
      <Form.Input 
        type='password'
        placeholder='Contraseña'
        name='password'
        onChange={formik.handleChange}/>

      <Form.Input 
        type='password'
        placeholder='Repetir contraseña'
        name='repeatPassword'
        onChange={formik.handleChange}/>     

      <Button className='btn-submit' type='submit'>Registrarse</Button>   

      </Form>     
    </>
  )
}


function initialValues() {
  return {
    name: '',
    username: '',
    email: '',
    password: '',
    repeatPassword: ''
  }
}