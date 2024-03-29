import React from 'react'
import { useParams } from 'react-router-dom';
import Profile from '../components/User/Profile';

export default function User() {
  const { username } = useParams();

  return (
    <>
      <Profile username={username}/>
    </>
  )
}
