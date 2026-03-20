import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #0B0B0F;
`;

// ─── Header ───────────────────────────────────────────────────
export const Header = styled.View`
  background-color: #13131a;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #2A2A35;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderGreeting = styled.View`
  flex: 1;
`;

export const HeaderSubtitle = styled.Text`
  color: #A0A0B2;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const HeaderTitle = styled.Text`
  color: #F5F5F5;
  font-size: 26px;
  font-weight: 700;
`;

export const HeaderNav = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const NavButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

export const NavIcon = styled.Image`
  width: 22px;
  height: 22px;
  tint-color: #A0A0B2;
`;

export const AvatarButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  overflow: hidden;
`;

export const Avatar = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 18px;
`;

export const AvatarFallback = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #7B2CBF;
  align-items: center;
  justify-content: center;
`;

export const AvatarFallbackText = styled.Text`
  color: #F5F5F5;
  font-size: 15px;
  font-weight: 700;
`;

// ─── Tab bar ──────────────────────────────────────────────────
export const TabBar = styled.View`
  flex-direction: row;
  background-color: #13131a;
  padding: 10px 20px;
  gap: 8px;
  border-bottom-width: 1px;
  border-bottom-color: #2A2A35;
`;

export const TabButton = styled.TouchableOpacity`
  flex: 1;
  height: 34px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ active }) => active ? '#7B2CBF' : '#1C1C24'};
  border-width: 1px;
  border-color: ${({ active }) => active ? '#7B2CBF' : '#2A2A35'};
`;

export const TabText = styled.Text`
  font-size: 12px;
  font-weight: ${({ active }) => active ? '600' : '400'};
  color: ${({ active }) => active ? '#F5F5F5' : '#A0A0B2'};
`;

// ─── Filtro de categorias (chips horizontais) ──────────────────
export const FilterBar = styled.ScrollView`
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

export const FilterChip = styled.TouchableOpacity`
  height: 32px;
  padding-horizontal: 14px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: ${({ active }) => active ? '#7B2CBF' : '#1C1C24'};
  border-width: 1px;
  border-color: ${({ active }) => active ? '#7B2CBF' : '#2A2A35'};
`;

export const FilterChipText = styled.Text`
  font-size: 12px;
  color: ${({ active }) => active ? '#F5F5F5' : '#A0A0B2'};
  font-weight: ${({ active }) => active ? '600' : '400'};
`;

// ─── Container geral do scroll ────────────────────────────────
export const Container = styled.View`
  padding: 24px 0 48px;
  gap: 16px;
`;

export const SectionLabel = styled.Text`
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 600;
  padding-horizontal: 20px;
  margin-bottom: 4px;
`;

// ─── Carrossel ────────────────────────────────────────────────
export const CarouselWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 8px;
`;

export const ArrowButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

export const ArrowImage = styled.Image`
  height: 30px;
  width: 30px;
`;

export const SeriesCard = styled.View`
  width: 90px;
  margin-right: 22px;
`;

export const SeriesCover = styled.View`
  width: 90px;
  height: 130px;
  border-radius: 6px;
  background-color: #1C1C24;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: 1px;
  border-color: #2A2A35;
`;

export const SeriesTitle = styled.Text`
  color: #F5F5F5;
  font-size: 11px;
  font-weight: 600;
  margin-top: 6px;
  line-height: 15px;
`;

export const SeriesEpisodes = styled.Text`
  color: #A0A0B2;
  font-size: 10px;
  margin-top: 2px;
`;

// ─── Grid 3 colunas ───────────────────────────────────────────
export const GridWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-horizontal: 16px;
  gap: 12px;
`;

export const GridCard = styled.View`
  width: 30%;
`;

export const GridCover = styled.View`
  width: 100%;
  aspect-ratio: 0.7;
  border-radius: 6px;
  background-color: #1C1C24;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: 1px;
  border-color: #2A2A35;
`;

export const GridTitle = styled.Text`
  color: #D0D0DC;
  font-size: 10px;
  margin-top: 5px;
  line-height: 14px;
`;
