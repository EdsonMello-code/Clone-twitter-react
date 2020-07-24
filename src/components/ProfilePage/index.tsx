import React from 'react';

import Feed from '../Feed'

import { 
  Container,
  Banner,
  Avatar,
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton
 } from './styles';

const ProfilePage: React.FC = () => {
  return (
  <Container >
    <Banner>
      <Avatar />
    </Banner>
    <ProfileData>
      <EditButton outlined>Editar perfil</EditButton>
      <h1>Edson Souza</h1>
      <h2>@Edson_Souza</h2>

      <p>Developer</p>
      <ul>
        <li>
          <LocationIcon />
          Mata Grande, Brasil 
        </li>
        <li>
          <CakeIcon />
          Nascido(a) em 30 julho de 2001
        </li>
      </ul>

      <Followage>
        <span>
          Seguindo <strong>32</strong>
        </span>
        <span>
          <strong>94 </strong> seguidores
        </span>
      </Followage>
      <Feed />
    </ProfileData>
  </Container>
  )
}

export default ProfilePage;

// Parado em 1:06:17