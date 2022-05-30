import React from 'react';
import { Form, Button, Image } from 'semantic-ui-react';
import userIcon from '../../../assets/img/user-icon.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './LoginForm.scss';

export default function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required('El email es obligatorio'),
      password: Yup.string()
        .required("Ingrese una contraseña"),
    }),
    onSubmit: (formData) => {
      console.log(formData)
    }
  })
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <h2 className='register-form-title'>Entrar para ver fotos y videos</h2>
      <div className="containerIcon">
        <Image src={userIcon} />
      </div>
      <Form.Input 
        type="text" 
        placeholder="Correo electrónico" 
        name="email" 
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email && true}
      />
      <Form.Input 
        type="password" 
        placeholder="Contraseña" 
        name="password" 
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password && true}
      />
      <Button type="submit" className="btn-submit">
        Iniciar sesión
      </Button>
    </Form>
  )
}



function initialValues() {
  return {
    email: '',
    password: '',
  }
}