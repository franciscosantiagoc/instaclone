import React from 'react'
import { Form, Button } from 'semantic-ui-react';
import  { useFormik } from 'formik';
import * as Yup from 'yup';
import './RegisterForm.scss';

export default function RegisterForm(props) {
  const { setShowLogin } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      name: Yup.string().required('Tu nombre es obligatorio'),
      username: Yup.string().matches(/^[a-zA-Z0-9-]*$/,
        'El nombre del usuario no puede tener espacios'
      ).required('El nombre del usuario es obligatorio'),
      email: Yup.string()
        .email('El email no es valido')
        .required('El email es obligatorio'),
      password: Yup.string()
        .required('La contraseña es obligatorio')
        .oneOf([Yup.ref('repeatPassword')],'Las contraseñas no coinciden'),
      repeatPassword: Yup.string()
      .required('La contraseña es obligatorio')
      .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
    }),
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
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name && true}/>

      <Form.Input 
        type='text'
        placeholder='Nombre de usuario'
        name='username'
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.errors.username && true}/> 

      <Form.Input 
        type='text'
        placeholder='Correo electronico'
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email && true}/> 
      
      <Form.Input 
        type='password'
        placeholder='Contraseña'
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password && true}/>

      <Form.Input 
        type='password'
        placeholder='Repetir contraseña'
        name='repeatPassword'
        onChange={formik.handleChange}
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword && true}/>      

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