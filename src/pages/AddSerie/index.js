import React, { useRef, useContext, useState } from 'react';
import {
  Platform,
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import api from '../../services/api';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  Title,
  MiddleText,
  SmallText,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
  LinkGroup,
  TextGroup,
  InputGroup,
  TitleGroup,
  Header,
  AvatarButton,
  Avatar,
  AvatarFallback,
  AvatarFallbackText,
  HeaderGreeting,
  HeaderSubtitle,
  HeaderTitle,
  HeaderNav,
  NavButton,
  NavIcon,
  DescriptionInput,
  SubmitImage,
} from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

import { launchImageLibrary } from 'react-native-image-picker';

export default function AddSerie() {
  const { loadingAuth } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [ano, setAno] = useState('');

  const route = useRoute();
  const { genero_id } = route.params;

  const [descricao, setDescricao] = useState('');
  const [cover, setCover] = useState('');

  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const initials = user?.nome?.[0]?.toUpperCase() || '?';

  async function addSerie() {
    try {
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('sinopse', sinopse);
      formData.append('ano', String(parseInt(ano)));
      formData.append('genero_id', genero_id); 

      if (cover) {
        formData.append('file', {
          uri: cover.uri,
          name: cover.fileName || 'cover.jpg',
          type: cover.type || 'image/jpeg',
        });
      }

      await api.post('/serie', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      navigation.navigate('Home');

    } catch (err) {
      console.log('ERRO:', JSON.stringify(err.response?.data));
      console.log('ERRO:', err.response?.data);
    }
  }

  async function pickImage() {
    launchImageLibrary({ mediaType: 'photo', quality: 0.8 }, response => {
      if (response.didCancel || response.errorCode) return;
      const asset = response.assets[0];
      setCover(asset);
    });
  }

  return (
    <Background>
      <Header>
        <HeaderGreeting>
          <HeaderSubtitle>Bem-vindo de volta</HeaderSubtitle>
          <HeaderTitle>{user?.nome}</HeaderTitle>
        </HeaderGreeting>

        <HeaderNav>
          <NavButton onPress={() => navigation.navigate('Home')}>
            <NavIcon source={require('../../assets/icons/home-icon.png')} />
          </NavButton>
          <NavButton onPress={() => navigation.navigate('Search')}>
            <NavIcon source={require('../../assets/icons/search-icon.png')} />
          </NavButton>
          <AvatarButton onPress={() => navigation.navigate('Profile')}>
            {user?.avatar ? (
              <Avatar source={{ uri: user.avatar }} />
            ) : (
              <AvatarFallback>
                <AvatarFallbackText>{initials}</AvatarFallbackText>
              </AvatarFallback>
            )}
          </AvatarButton>
        </HeaderNav>
      </Header>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={20}
      >
        <TextGroup>
          <MiddleText>Cadastre sua série!</MiddleText>
          <SmallText></SmallText>
        </TextGroup>

        <SubmitImage onPress={() => pickImage()}>
          {cover ? (
            <Image
              source={{ uri: cover.uri }}
              style={{ width: '100%', height: '100%', borderRadius: 0 }}
            />
          ) : (
            <SubmitText>ADD IMAGE</SubmitText>
          )}
        </SubmitImage>

        <InputGroup>
          <AreaInput>
            <Input
              placeholder="Nome"
              placeholderTextColor="#7e7e7e"
              value={nome}
              onChangeText={text => setNome(text)}
            />
          </AreaInput>
          <AreaInput>
            <Input
              placeholder="Sinopse"
              placeholderTextColor="#7e7e7e"
              value={sinopse}
              onChangeText={text => setSinopse(text)}
            />
          </AreaInput>
          <AreaInput>
            <Input
              placeholder="Ano"
              placeholderTextColor="#7e7e7e"
              value={ano}
              onChangeText={text => setAno(text)}
            />
          </AreaInput>
        </InputGroup>

        <SubmitButton onPress={() => addSerie()}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#FFF" />
          ) : (
            <SubmitText>CADASTRAR</SubmitText>
          )}
        </SubmitButton>
      </Container>
    </Background>
  );
}
