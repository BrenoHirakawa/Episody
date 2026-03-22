import React, { useRef, useContext, useState } from 'react';
import {
  Platform,
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView,
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
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function AddGenero() {
  const { loadingAuth } = useContext(AuthContext);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const initials = user?.nome?.[0]?.toUpperCase() || '?';

  async function addGenero() {
    try {
      const response = await api.post('/genero', {
        nome: nome,
        descricao: descricao + ' - ' + user.nome,
      });

      navigation.navigate('AddSerie', { genero_id: response.data.id });
    } catch (err) {
      console.log('ERRO AO CADASTRAR', err);
    }
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
          <MiddleText>Crie a Categoria</MiddleText>
          <SmallText>Comece criando a sua categoria preferida</SmallText>
        </TextGroup>

        <InputGroup>
          <AreaInput>
            <Input
              placeholder="Nome da Categoria"
              placeholderTextColor="#7e7e7e"
              value={nome}
              onChangeText={text => setNome(text)}
            />
          </AreaInput>
          <DescriptionInput>
            <Input
              placeholder="Descrição"
              placeholderTextColor="#7e7e7e"
              value={descricao}
              onChangeText={text => setDescricao(text)}
              multiline={true}
            />
          </DescriptionInput>
        </InputGroup>

        <SubmitButton onPress={() => addGenero()}>
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
