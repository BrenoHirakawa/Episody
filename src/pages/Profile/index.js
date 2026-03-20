import React, {useContext} from "react";
import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';

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
  UserWrapper
} from './styles';


export default function Profile() {
  const navigation = useNavigation();
  const { user,signOut } = useContext(AuthContext);
  
  return(

  <Background>
    <InvisibleHeader>
      <ArrowButton onPress={() => navigation.navigate('Home') }>
        <ArrowImage source={require('../../assets/icons/ArrowL.png')} resizeMode="contain"></ArrowImage>
      </ArrowButton>
    </InvisibleHeader>

    <Container>

      <UserWrapper>

        <FotoCircle source={require('../../assets/icons/pepe.jpg')}>
        </FotoCircle>

        <NomeUser>{user.name}</NomeUser>
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



      <ExitButton onPress={ () => signOut()}>
        <ExitButtonText>SAIR</ExitButtonText>
      </ExitButton>

    </Container>
  </Background>

  );

}