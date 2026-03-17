import React, { useState, useContext } from 'react';
import { Platform } from 'react-native';

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
  Icons
} from './styles'

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth'

export default function SignIn() {
  
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  function handleLogin(){
    signIn(email, password);
  }
  
  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <TitleGroup>
          <Title>EPISODY</Title>

          <Logo
            source={require('../../assets/botao-play-1.png')}
          />
        </TitleGroup>



        <TextGroup>
          <MiddleText>Entre com sua conta!</MiddleText>
          <SmallText>Sua próxima maratona começa aqui</SmallText>
        </TextGroup>
        
        <InputGroup>

          <AreaInput>
            <Input placeholder="E-mail/ Nome de usuário"
            placeholderTextColor="#F5F5F5"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
          </AreaInput>
          <AreaInput>
            <Input placeholder="Senha"
            placeholderTextColor="#F5F5F5"
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
          </AreaInput>
        </InputGroup>
        

        <SubmitButton onPress={handleLogin}>
          <SubmitText>LOGIN</SubmitText>
        </SubmitButton>

        <LinkGroup>
          <SmallText>
            Não tem uma conta? 
          </SmallText>
          <Link onPress={() => navigation.navigate('SignUp') }>
            <LinkText> Cadastrar</LinkText>
          </Link>
        </LinkGroup>
        

      </Container>
    </Background>
  );
}
