import React, { useRef, useState, useContext } from 'react';
import { FlatList, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  ButtonText
} from './styles';

const CARD_WIDTH = 90;
const CARD_MARGIN = 22;
const CARD_STEP = CARD_WIDTH + CARD_MARGIN;

const PLACEHOLDER_COLORS = [
  '#1a1a2e', '#16213e', '#1C1C24', '#2A2A35', '#12121a',
];

// ─── Dados placeholder por categoria ──────────────────────────
const CATEGORIES = [
  {
    id: 'emalta',
    label: '🔥 Em alta',
    series: [
      { id: '1', title: 'The Bear', episodes: 18 },
      { id: '2', title: 'Severance', episodes: 19 },
      { id: '3', title: 'The Last of Us', episodes: 9 },
      { id: '4', title: 'House of Dragon', episodes: 20 },
      { id: '5', title: 'Silo', episodes: 10 },
    ],
  },
  {
    id: 'drama',
    label: 'Drama',
    series: [
      { id: '6', title: 'Breaking Bad', episodes: 62 },
      { id: '7', title: 'Succession', episodes: 39 },
      { id: '8', title: 'Dark', episodes: 26 },
      { id: '9', title: 'Ozark', episodes: 44 },
      { id: '10', title: 'The Crown', episodes: 60 },
    ],
  },
  {
    id: 'acao',
    label: 'Ação',
    series: [
      { id: '11', title: 'The Boys', episodes: 32 },
      { id: '12', title: 'Reacher', episodes: 16 },
      { id: '13', title: 'Peaky Blinders', episodes: 36 },
      { id: '14', title: 'Jack Ryan', episodes: 30 },
      { id: '15', title: 'Tulsa King', episodes: 19 },
    ],
  },
  {
    id: 'terror',
    label: 'Terror',
    series: [
      { id: '16', title: 'The Haunting of Hill House', episodes: 10 },
      { id: '17', title: 'Midnight Mass', episodes: 7 },
      { id: '18', title: 'The Fall of House Usher', episodes: 8 },
      { id: '19', title: 'Marianne', episodes: 8 },
      { id: '20', title: 'Archive 81', episodes: 8 },
    ],
  },
  {
    id: 'comedia',
    label: 'Comédia',
    series: [
      { id: '21', title: 'Abbott Elementary', episodes: 40 },
      { id: '22', title: 'What We Do in the Shadows', episodes: 49 },
      { id: '23', title: 'Only Murders in the Building', episodes: 30 },
      { id: '24', title: 'Ghosts', episodes: 60 },
      { id: '25', title: 'Ted Lasso', episodes: 34 },
    ],
  },
];

// ─── Carrossel reutilizável ────────────────────────────────────
// Cada categoria tem seu próprio estado de índice isolado
function Carousel({ data }) {
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (next) => {
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setIndex(next);
  };

  const renderItem = ({ item, index: i }) => (
    <SeriesCard>
      <SeriesCover style={{ backgroundColor: PLACEHOLDER_COLORS[i % 5] }}>
        <Text style={{ fontSize: 28 }}>🎬</Text>
      </SeriesCover>
      <SeriesTitle numberOfLines={2}>{item.title}</SeriesTitle>
      <SeriesEpisodes>{item.episodes} ep.</SeriesEpisodes>
    </SeriesCard>
  );

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
        data={data}
        keyExtractor={(item) => item.id}
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
        onMomentumScrollEnd={(e) => {
          const newIndex = Math.round(e.nativeEvent.contentOffset.x / CARD_STEP);
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
  const initials = user?.name?.[0]?.toUpperCase() || '?';

  return (
    <Background>
      <Header>
        <HeaderGreeting>
          <HeaderSubtitle>Bem-vindo de volta</HeaderSubtitle>
          <HeaderTitle>{user.name}</HeaderTitle>
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

      <ScrollView showsVerticalScrollIndicator={false}>
      <ButtonsWrapper>
        <DropDown>
          <ButtonText>Categorias</ButtonText>
        </DropDown>
        <ButtonList onPress={() => navigation.navigate('Watched')}>
          <ButtonText>Assistidos</ButtonText>
        </ButtonList>
        <ButtonList>
          <ButtonText>Minha lista</ButtonText>
        </ButtonList>
      </ButtonsWrapper>

        <Container>
          {CATEGORIES.map((category) => (
            <React.Fragment key={category.id}>
              <SectionLabel>{category.label}</SectionLabel>
              <Carousel data={category.series} />
            </React.Fragment>
          ))}
        </Container>
      </ScrollView>
    </Background>
  );
}