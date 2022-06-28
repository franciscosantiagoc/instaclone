import React from 'react';
import { Link } from 'react-router-dom'
import './UserNotFound.scss';

export default function UserNotFound() {
  return (
    <div className='user-not-found'>
      <p>Usuario no encontrado</p>
      <p>Es posible que el enlace que has seguido sea incorrecto o que el usuario no exista</p>
      <Link to='/' className='btn-home'>Volver al inicio</Link>
    </div>
  )
}
