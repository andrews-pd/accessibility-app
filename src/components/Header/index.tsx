import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Container, Avatar, Logo } from './styles';

import logoImg from '../../assets/logo.png';

export function Header() {
  return (
    <Container>
      <Avatar
        accessible
        accessibilityLabel='Imagem de perfil do usuário'
        source={{ uri: 'https://github.com/andrews-pd.png' }}
      />

      <Logo source={logoImg} />

      {/* Elementos de texto e clique já são acessíveis */}
      <TouchableOpacity accessibilityLabel='Sair da aplicação'>
        <FontAwesome name="power-off" size={24} color="#595859" />
      </TouchableOpacity>
    </Container>
  );
}