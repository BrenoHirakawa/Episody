import React, { useState, useContext, useCallback } from 'react';
import { Image, Text, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import api from '../../services/api';

import {
  Background,
  Header,
  HeaderGreeting,
  HeaderSubtitle,
  HeaderTitle,
  HeaderNav,
  NavButton,
  NavIcon,
  AvatarButton,
  AvatarFallback,
  AvatarFallbackText,
  ArrowButton,
  ArrowImage,
  Container,
  SectionLabel,
  GridWrapper,
  GridCard,
  GridCover,
  GridCoverImage,
  GridTitle,
  EmptyWrapper,
  EmptyText,
} from './styles';

export default function Watched() {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const initials = user?.nome?.[0]?.toUpperCase() || '?';
  const [series, setSeries] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadAssistidos();
    }, []),
  );

  async function loadAssistidos() {
    try {
      const response = await api.get('/userSerie/assistidos');
      setSeries(response.data);
    } catch (err) {
      console.log('ERRO:', err.response?.data);
    }
  }

  return (
    <Background>
      <Header>
        <ArrowButton onPress={() => navigation.goBack()}>
          <ArrowImage
            source={require('../../assets/icons/ArrowL.png')}
            resizeMode="contain"
          />
        </ArrowButton>

        <HeaderGreeting>
          <HeaderSubtitle>Sua lista de</HeaderSubtitle>
          <HeaderTitle>Assistidos</HeaderTitle>
        </HeaderGreeting>

        <HeaderNav>
          <NavButton onPress={() => navigation.navigate('Home')}>
            <NavIcon source={require('../../assets/icons/home-icon.png')} />
          </NavButton>
          <AvatarButton onPress={() => navigation.navigate('Profile')}>
            {user?.imagem ? (
              <Image
                source={{ uri: `http://192.168.0.18:3000/files/${user.imagem}` }}
                style={{ width: '100%', height: '100%', borderRadius: 18 }}
              />
            ) : (
              <AvatarFallback>
                <AvatarFallbackText>{initials}</AvatarFallbackText>
              </AvatarFallback>
            )}
          </AvatarButton>
        </HeaderNav>
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <SectionLabel>Séries assistidas</SectionLabel>

          {series.length === 0 ? (
            <EmptyWrapper>
              <EmptyText>Nenhuma série assistida ainda 📺</EmptyText>
            </EmptyWrapper>
          ) : (
            <GridWrapper>
              {series.map((item, i) => (
                <GridCard
                  key={item.serie?.id || i}
                  onPress={() => navigation.navigate('SerieDetail', { serie: item.serie })}
                >
                  <GridCover>
                    {item.serie?.imagem ? (
                      <GridCoverImage
                        source={{ uri: `http://192.168.0.18:3000/files/${item.serie.imagem}` }}
                        resizeMode="cover"
                      />
                    ) : (
                      <Text style={{ fontSize: 24 }}>🎬</Text>
                    )}
                  </GridCover>
                  <GridTitle numberOfLines={2}>{item.serie?.nome}</GridTitle>
                </GridCard>
              ))}
            </GridWrapper>
          )}
        </Container>
      </ScrollView>
    </Background>
  );
}