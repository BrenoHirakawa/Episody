import React, { useRef, useState, useContext, useCallback } from 'react';
import { FlatList, Text, ScrollView, View, Image } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../../services/api';

import { AuthContext } from '../../contexts/auth';

import {
  Background,
  Header,
  HeaderNav,
  NavButton,
  NavIcon,
  AvatarButton,
  Avatar,
  AvatarFallback,
  AvatarFallbackText,
  HeaderGreeting,
  HeaderSubtitle,
  HeaderTitle,
  Container,
  SectionLabel,
  CarouselWrapper,
  ArrowButton,
  SeriesCard,
  SeriesCover,
  SeriesTitle,
  SeriesEpisodes,
  ArrowImage,
  ButtonsWrapper,
  DropDown,
  ButtonList,
  ButtonText,
  AddGeneroButton,
  AddGeneroText,
  AddButtonWrapper,
  SubmitNewSeries,
} from './styles';

const CARD_WIDTH = 90;
const CARD_MARGIN = 22;
const CARD_STEP = CARD_WIDTH + CARD_MARGIN;

const PLACEHOLDER_COLORS = [
  '#1a1a2e',
  '#16213e',
  '#1C1C24',
  '#2A2A35',
  '#12121a',
];

// ─── Carrossel reutilizável ────────────────────────────────────
// Cada categoria tem seu próprio estado de índice isolado
function Carousel({ data, genero_id }) {
  const navigation = useNavigation();
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);
  const dataComAdicionar = [...data, { id: 'add', isAddButton: true }];

  const scrollTo = next => {
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setIndex(next);
  };

  const renderItem = ({ item, index: i }) => {
    if (item.isAddButton) {
      return (
        <SeriesCard
          onPress={() => navigation.navigate('AddSerie', { genero_id })}
        >
          <SeriesCover style={{ backgroundColor: '#1C1C24' }}>
            <Text style={{ fontSize: 32, color: '#7B2CBF' }}>+</Text>
          </SeriesCover>
          <SeriesTitle>Adicionar</SeriesTitle>
        </SeriesCard>
      );
    }
    return (
      <SeriesCard
        onPress={() => navigation.navigate('Serie', { serie: item })}
      >
        <SeriesCover style={{ backgroundColor: PLACEHOLDER_COLORS[i % 5] }}>
          {item.imagem ? (
            <Image
              source={{ uri: `http://192.168.0.18:3000/files/${item.imagem}` }}
              style={{ width: '100%', height: '100%', borderRadius: 6 }}
              resizeMode="cover"
            />
          ) : (
            <Text style={{ fontSize: 28 }}>🎬</Text>
          )}
        </SeriesCover>
        <SeriesTitle numberOfLines={2}>{item.nome}</SeriesTitle>
        <SeriesEpisodes>{item.ano}</SeriesEpisodes>
      </SeriesCard>
    );
  };

  return (
    <CarouselWrapper>
      <ArrowButton
        onPress={() => scrollTo(Math.max(index - 1, 0))}
        disabled={index === 0}
      >
        <ArrowImage
          source={require('../../assets/icons/ArrowL.png')}
          resizeMode="contain"
          style={{ opacity: index === 0 ? 0.3 : 1 }}
        />
      </ArrowButton>

      <FlatList
        ref={listRef}
        data={dataComAdicionar}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_STEP}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 4 }}
        getItemLayout={(_, i) => ({
          length: CARD_STEP,
          offset: CARD_STEP * i,
          index: i,
        })}
        onMomentumScrollEnd={e => {
          const newIndex = Math.round(
            e.nativeEvent.contentOffset.x / CARD_STEP,
          );
          setIndex(newIndex);
        }}
        style={{ flex: 1 }}
      />

      <ArrowButton
        onPress={() => scrollTo(Math.min(index + 1, data.length - 1))}
        disabled={index === data.length - 1}
      >
        <ArrowImage
          source={require('../../assets/icons/ArrowR.png')}
          resizeMode="contain"
          style={{ opacity: index === data.length - 1 ? 0.3 : 1 }}
        />
      </ArrowButton>
    </CarouselWrapper>
  );
}

// ─── Tela principal ───────────────────────────────────────────
export default function Home() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const initials = user?.nome?.[0]?.toUpperCase() || '?';
  const [generos, setGeneros] = useState([]);

  useFocusEffect(
    useCallback(() => {
      loadGeneros();
    }, []),
  );

  async function loadGeneros() {
    const response = await api.get('/genero/all');
    const generosData = response.data;
    console.log('GENEROS:', JSON.stringify(generosData));

    // Para cada gênero, buscar as séries
    const generosComSeries = await Promise.all(
      generosData.map(async genero => {
        const seriesResponse = await api.get(
          `/serie/genero?genero_id=${genero.id}`,
        );
        return {
          id: genero.id,
          label: genero.nome,
          series: seriesResponse.data,
        };
      }),
    );

    setGeneros(generosComSeries);
  }

  return (
    <Background>
      <Header>
        <HeaderGreeting>
          <HeaderSubtitle>Bem-vindo de volta</HeaderSubtitle>
          <HeaderTitle>{user.nome}</HeaderTitle>
        </HeaderGreeting>

        <HeaderNav>
          <NavButton onPress={() => navigation.navigate('Home')}>
            <NavIcon source={require('../../assets/icons/home-icon.png')} />
          </NavButton>
          <NavButton onPress={() => navigation.navigate('Search')}>
            <NavIcon source={require('../../assets/icons/search-icon.png')} />
          </NavButton>
          <AvatarButton onPress={() => navigation.navigate('Profile')}>
            {user?.avatar? (
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
        </HeaderNav>
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ButtonsWrapper>
          <ButtonList onPress={() => navigation.navigate('Watched')}>
            <ButtonText>Assistidos</ButtonText>
          </ButtonList>
          <ButtonList>
            <ButtonText onPress={() => navigation.navigate('MyList')}>Minha lista</ButtonText>
          </ButtonList>
        </ButtonsWrapper>

        <Container>
          {generos.map(category => (
            <View key={category.id}>
              <SectionLabel>{category.label}</SectionLabel>
              <Carousel data={category.series} genero_id={category.id} />
            </View>
          ))}
        </Container>
      </ScrollView>

      <AddButtonWrapper>
        <AddGeneroButton onPress={() => navigation.navigate('AddGenero')}>
          <AddGeneroText>+</AddGeneroText>
        </AddGeneroButton>
      </AddButtonWrapper>
    </Background>
  );
}
