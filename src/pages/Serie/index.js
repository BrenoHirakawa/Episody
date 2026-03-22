import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import {
  Background,
  InvisibleHeader,
  ArrowButton,
  ArrowImage,
  CoverBanner,
  CoverPlaceholder,
  InfoContainer,
  SerieTitle,
  SerieGenre,
  SectionLabel,
  Description,
  WatchedButton,
  WatchedButtonText,
  FavoriteButton,
  FavoriteButtonText,
} from './styles';

export default function Serie() {
  const navigation = useNavigation();
  const route = useRoute();
  const { serie } = route.params;

  const [assistido, setAssistido] = useState(false);
  const [favorito, setFavorito] = useState(false);

  async function marcarAssistido() {
    try {
      await api.patch(`/userSerie?serie_id=${serie.id}`, {
        assistido: !assistido,
        favorito: favorito,
        nota: 0,
      });
      setAssistido(!assistido);
    } catch (err) {
      console.log('ERRO:', err.response?.data);
    }
  }

  async function marcarFavorito() {
    try {
      await api.patch(`/userSerie?serie_id=${serie.id}`, {
        assistido: assistido,
        favorito: !favorito,
        nota: 0,
      });
      setFavorito(!favorito);
    } catch (err) {
      console.log('ERRO:', err.response?.data);
    }
  }

  return (
    <Background>
      <InvisibleHeader>
        <ArrowButton onPress={() => navigation.goBack()}>
          <ArrowImage
            source={require('../../assets/icons/ArrowL.png')}
            resizeMode="contain"
          />
        </ArrowButton>
      </InvisibleHeader>

      <ScrollView showsVerticalScrollIndicator={false}>
        {serie.imagem ? (
          <CoverBanner
            source={{ uri: `http://192.168.0.18:3000/files/${serie.imagem}` }}
            resizeMode="cover"
          />
        ) : (
          <CoverPlaceholder>
            <Text style={{ fontSize: 48 }}>🎬</Text>
          </CoverPlaceholder>
        )}

        <InfoContainer>
          <SerieTitle>{serie.nome}</SerieTitle>
          {serie.genero?.nome && <SerieGenre>{serie.genero.nome}</SerieGenre>}

          {serie.sinopse && (
            <>
              <SectionLabel>Sinopse</SectionLabel>
              <Description>{serie.sinopse}</Description>
            </>
          )}

          {serie.ano && (
            <>
              <SectionLabel>Ano</SectionLabel>
              <Description>{serie.ano}</Description>
            </>
          )}

          <WatchedButton onPress={marcarAssistido}>
            <WatchedButtonText>
              {assistido ? '✓ Assistido' : 'Marcar como assistido'}
            </WatchedButtonText>
          </WatchedButton>

          <FavoriteButton onPress={marcarFavorito}>
            <FavoriteButtonText>
              {favorito ? '♥ Favoritado' : 'Adicionar aos favoritos'}
            </FavoriteButtonText>
          </FavoriteButton>
          
        </InfoContainer>
      </ScrollView>
    </Background>
  );
}