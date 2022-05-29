import React, { useState } from 'react';
import { Container, Image } from 'semantic-ui-react';
import RegisterForm from '../../components/Auth/RegisterForm';
import instaclone from '../../assets/img/instaclone.png'
import "./Auth.scss";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <Container fluid className="auth">
      <Image src={instaclone} />

      <div className='container-form'>
        {
          showLogin ? <p>formulario login </p> : <RegisterForm setShowLogin={setShowLogin} />
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
