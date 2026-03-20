import React, { useRef, useState, useContext } from 'react';
import { FlatList, Text } from 'react-native';
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
  EmptyState,
  EmptyIcon,
  EmptyText,
  EmptySubText,
  ArrowImage,
} from './styles';

const CARD_WIDTH = 90;
const CARD_MARGIN = 22;
const CARD_STEP = CARD_WIDTH + CARD_MARGIN;

const SERIES = [
  { id: '1', title: 'Breaking Bad', episodes: 62 },
  { id: '2', title: 'Dark', episodes: 26 },
  { id: '3', title: 'The Bear', episodes: 18 },
  { id: '4', title: 'Severance', episodes: 19 },
  { id: '5', title: 'Succession', episodes: 39 },
  { id: '6', title: 'Silo', episodes: 10 },
];

const PLACEHOLDER_COLORS = [
  '#1a1a2e', '#16213e', '#1C1C24', '#2A2A35', '#12121a',
];

export default function Home() {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);

  const initials = user?.name?.[0]?.toUpperCase() || '?';

  const scrollTo = (next) => {
    listRef.current?.scrollToIndex({ index: next, animated: true });
    setIndex(next);
  };

  const scrollLeft = () => scrollTo(Math.max(index - 1, 0));
  const scrollRight = () => scrollTo(Math.min(index + 1, SERIES.length - 1));

  const renderItem = ({ item, index }) => (
    <SeriesCard>
      <SeriesCover style={{ backgroundColor: PLACEHOLDER_COLORS[index % 5] }}>
        <Text style={{ fontSize: 32 }}>🎬</Text>
      </SeriesCover>

      <SeriesTitle numberOfLines={2}>{item.title}</SeriesTitle>
      <SeriesEpisodes>{item.episodes} episódios</SeriesEpisodes>
    </SeriesCard>
  );

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

      <Container>
        <SectionLabel>Suas Séries</SectionLabel>

        {SERIES.length === 0 ? (
          <EmptyState>
            <EmptyIcon>📺</EmptyIcon>
            <EmptyText>Nenhuma série ainda</EmptyText>
            <EmptySubText>Adicione sua primeira série para começar!</EmptySubText>
          </EmptyState>
        ) : (
          <CarouselWrapper>
            <ArrowButton onPress={scrollLeft} disabled={index === 0}>
              <ArrowImage source={require('../../assets/icons/ArrowL.png')} resizeMode="contain"/>
            </ArrowButton>

            <FlatList
              ref={listRef}
              data={SERIES}
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
                const newIndex = Math.round(
                  e.nativeEvent.contentOffset.x / CARD_STEP
                );
                setIndex(newIndex);
              }}
              style={{ flex: 1 }}
            />

            <ArrowButton
              onPress={scrollRight}
              disabled={index === SERIES.length - 1}
            >
              <ArrowImage source={require('../../assets/icons/ArrowR.png')} resizeMode="contain"/>
            </ArrowButton>
          </CarouselWrapper>
        )}
      </Container>
    </Background>
  );
}