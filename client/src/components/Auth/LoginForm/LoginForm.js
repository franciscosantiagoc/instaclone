import React from 'react';
import { Form, Button, Image } from 'semantic-ui-react';
import userIcon from '../../../assets/img/user-icon.png';
import './LoginForm.scss';

export default function LoginForm() {
  return (
    <Form className="login-form">
      <h2 className='register-form-title'>Entrar para ver fotos y videos</h2>
      <div className="containerIcon">
        <Image src={userIcon} />
      </div>
      <Form.Input type="text" placeholder="Correo electrónico" name="email"/>
      <Form.Input type="password" placeholder="Contraseña" name="password"/>
      <Button type="submit" className="btn-submit">
        Iniciar sesión
      </Button>
    </Form>
  )
}
