import React, { useState } from 'react';
import { Form, Button, Image } from 'semantic-ui-react';
import userIcon from '../../../assets/img/user-icon.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../gql/user';
import { setToken, decodeToken } from '../../../utils/token';
import useAuth from '../../../hooks/useAuth';
import './LoginForm.scss';

export default function LoginForm() {
  const [error, setError] = useState('')
  const [login] = useMutation(LOGIN);

  const { setUser } = useAuth();
  

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required('El email es obligatorio'),
      password: Yup.string()
        .required("Ingrese una contraseña"),
    }),
    onSubmit: async (formData) => {
      setError("");
      try {
        const { data } = await login({
          variables: {
            input: formData,
          }
        });
        const { token } = data.login;
        setToken(token);
        setUser(decodeToken(token));
      } catch (error) {
        setError(error.message);
        console.log(error)
      }
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
      {error && <p className='submit-error'>{error}</p>}
    </Form>
  )
}



function initialValues() {
  return {
    email: '',
    password: '',
  }
}