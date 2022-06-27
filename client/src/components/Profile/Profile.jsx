import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../../gql/user';
import ImageNotFound from '../../assets/img/avatar.png';
import './Profile.scss';

export default function Profile(props) {
  const { username } = props;
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { username },
  });

  if(loading) return null;
  if(error) return <h1>El usuario no encontrado</h1>

  const { getUser } = data;

  return (
    <>
      <Grid className='profile'>
        <Grid.Column width={5} className='profile__left'>
          <Image 
          src={ImageNotFound}
          avatar
          />
        </Grid.Column>
        <Grid.Column width={11} className='profile__right'>
          <div>Header profile</div>
          <div>Followers</div>
          <div className='other'>
            <p className='name'>{getUser.name}</p>
            {getUser.siteWeb && (
              <a href={getUser.siteWeb} className='siteWeb' target='_blank'>
                {getUser.siteWeb}
              </a>
            )}
            {getUser.description && (
              <p className='description'>{getUser.description}</p>
            )}
          </div>
        </Grid.Column>
      </Grid>
    </>
  )
}
