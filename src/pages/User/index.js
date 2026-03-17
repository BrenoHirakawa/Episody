import React, { useContext, useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';

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
  TitleGroup
} from './styles'

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  
  const { signUp, loadingAuth } = useContext(AuthContext)
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    if(nome === '' || email === '' || password === '') return;

    signUp(email, password, nome);
  }

  const navigation = useNavigation();
  
  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        keyboardVerticalOffset={20}
      >

        <TitleGroup>
          <Title>EPISODY</Title>

          <Logo
            source={require('../../assets/botao-play-1.png')}
          />
        </TitleGroup>



        <TextGroup>
          <MiddleText>Crie sua conta</MiddleText>
          <SmallText>Comece a organizar suas séries favoritas</SmallText>
        </TextGroup>
        
        <InputGroup>
          <AreaInput>
            <Input placeholder="Nome"
            placeholderTextColor="#F5F5F5"
            value={nome}
            onChangeText={ (text) => setNome(text) }
            />
          </AreaInput>
          <AreaInput>
            <Input placeholder="E-mail"
            placeholderTextColor="#F5F5F5"
            value={email}
            onChangeText={ (text) => setEmail(text) }            
            />
          </AreaInput>
          <AreaInput>
            <Input placeholder="Senha"
            placeholderTextColor="#F5F5F5"
            value={password}
            onChangeText={ (text) => setPassword(text) }
            secureTextEntry={true} 
            />
          </AreaInput>          
        </InputGroup>
        

        <SubmitButton onPress={handleSignUp}>
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color="#FFF" />
            ) : (
              <SubmitText>CADASTRAR</SubmitText>
            )
          }
        </SubmitButton>

        <LinkGroup>
          <SmallText>
            Já tem uma conta? 
          </SmallText>
          <Link onPress={() => navigation.navigate('SignIn') }>
            <LinkText> Entrar</LinkText>
          </Link>
        </LinkGroup>
        

      </Container>
    </Background>
  );
}
