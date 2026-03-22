import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import { AuthContext } from '../../contexts/auth';

import api from '../../services/api';

import {
  Background,
  Container,
  ArrowButton,
  ArrowImage,
  ExitButton,
  InvisibleHeader,
  ExitButtonText,
  OptionsWrapper,
  Options,
  OptionsText,
  FotoCircle,
  NomeUser,
  UserWrapper,
  AvatarButton,
  Avatar,
  AvatarFallback,
  AvatarFallbackText,
  SubmitText,
} from './styles';

import { launchImageLibrary } from 'react-native-image-picker';

export default function Profile() {
  const navigation = useNavigation();
  const { user, signOut, updateUser } = useContext(AuthContext);
  const initials = user?.nome?.[0]?.toUpperCase() || '?';
  const [pfp, setPfp] = useState('');
  const formData = new FormData();

  async function pickImage() {
    launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, async response => {
      if (response.didCancel || response.errorCode) return;
      const asset = response.assets[0];
      setPfp(asset);

      // Só chama a API depois que a imagem foi selecionada
      const formData = new FormData();

      console.log('ASSET:', asset.fileName, asset.uri, asset.type);

      formData.append('file', {
        uri: asset.uri,
        name: asset.fileName || 'pfp.jpg',
        type: asset.type || 'image/jpeg',
      });

      try {
        const response = await api.put('/user/edit', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        updateUser(response.data); // ← troca isso
      } catch (err) {
        console.log('ERRO:', err.response?.data);
      }
    });
  }

  return (
    <Background>
      <InvisibleHeader>
        <ArrowButton onPress={() => navigation.navigate('Home')}>
          <ArrowImage
            source={require('../../assets/icons/ArrowL.png')}
            resizeMode="contain"
          ></ArrowImage>
        </ArrowButton>
      </InvisibleHeader>

      <Container>
        <UserWrapper>
          <AvatarButton onPress={() => pickImage()}>
            {pfp ? (
              <Image
                source={{ uri: pfp.uri }}
                style={{ width: '100%', height: '100%' }}
              />
            ) : user?.imagem ? (
              <Image
                source={{
                  uri: `http://192.168.0.18:3000/files/${user.imagem}`,
                }}
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <AvatarFallback>
                <AvatarFallbackText>{initials}</AvatarFallbackText>
              </AvatarFallback>
            )}
          </AvatarButton>

          <NomeUser>{user.nome}</NomeUser>
        </UserWrapper>

        <OptionsWrapper>
          <Options>
            <OptionsText>Minha Lista</OptionsText>
          </Options>
          <Options>
            <OptionsText>Configurações do aplicativo</OptionsText>
          </Options>
          <Options>
            <OptionsText>Conta</OptionsText>
          </Options>
          <Options>
            <OptionsText>Ajuda</OptionsText>
          </Options>
        </OptionsWrapper>

        <ExitButton onPress={() => signOut()}>
          <ExitButtonText>SAIR</ExitButtonText>
        </ExitButton>
      </Container>
    </Background>
  );
}
