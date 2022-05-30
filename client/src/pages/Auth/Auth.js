import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import RegisterForm from '../../components/Auth/RegisterForm';
import LoginForm from '../../components/Auth/LoginForm';
import instaclone from '../../assets/img/instaclone.png'
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Container fluid className="auth">
      <Image src={instaclone} />

      <div className='container-form'>
        {
          showLogin ? <LoginForm setShowLogin={setShowLogin}/> : <RegisterForm setShowLogin={setShowLogin} />
        }
      </div>

      <div className='change-form'>
        <p>
        {
          showLogin ? (
            <>
              ¿No estas registrado?
              <span onClick={() => setShowLogin(!showLogin)}>Registrate</span>
            </>
          ) : (
            <>
              Entrar a tu cuenta
              <span onClick={() => setShowLogin(!showLogin)}>Iniciar sesión</span>
            </>
          )
        }
        </p>
      </div>
    </Container>
  )
}
