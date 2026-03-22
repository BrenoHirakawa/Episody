import styled from 'styled-components/native';

// ─── Layout base ──────────────────────────────────────────────
export const Background = styled.View`
  flex: 1;
  background-color: #0b0b0f;
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px 0;
`;

// ─── Header ───────────────────────────────────────────────────
export const Header = styled.View`
  background-color: #13131a;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #2a2a35;
  flex-direction: row;
  justify-content: space-between;
`;

// Barra de ícones (home, busca, avatar)
export const HeaderNav = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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
  tint-color: #a0a0b2;
`;

// Avatar circular
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

// Fallback quando não há foto — exibe a inicial do nome com fundo roxo
export const AvatarFallback = styled.View`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: #7b2cbf;
  align-items: center;
  justify-content: center;
`;

export const AvatarFallbackText = styled.Text`
  color: #f5f5f5;
  font-size: 15px;
  font-weight: 700;
`;

// Saudação abaixo da nav
export const HeaderGreeting = styled.View`
  flex: 1;
`;

export const HeaderSubtitle = styled.Text`
  color: #a0a0b2;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const HeaderTitle = styled.Text`
  color: #f5f5f5;
  font-size: 26px;
  font-weight: 700;
`;

// ─── Section ──────────────────────────────────────────────────
export const SectionLabel = styled.Text`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  padding-horizontal: 20px;
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
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ArrowText = styled.Text`
  color: ${({ disabled }) => (disabled ? '#3a3a4a' : '#F5F5F5')};
  font-size: 26px;
  font-weight: 300;
  line-height: 30px;
  margin-top: -2px;
`;

export const ArrowImage = styled.Image`
  height: 30px;
  width: 30px;
`;

// ─── Card da série ────────────────────────────────────────────
export const SeriesCard = styled.TouchableOpacity`
  width: 90px;
  margin-right: 22px;
  position: relative;
`;

export const SeriesCover = styled.View`
  width: 90px;
  height: 112px;
  border-radius: 2px;
  background-color: #1c1c24;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-width: 1px;
  border-color: #2a2a35;
`;

export const SeriesBadge = styled.View`
  position: absolute;
  top: 10px;
  left: 8px;
  background-color: ${({ color }) => color || '#7B2CBF'};
  border-radius: 6px;
  padding: 2px 7px;
`;

export const SeriesBadgeText = styled.Text`
  color: #f5f5f5;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

export const SeriesTitle = styled.Text`
  color: #f5f5f5;
  font-size: 13px;
  font-weight: 600;
  margin-top: 8px;
`;

export const SeriesEpisodes = styled.Text`
  color: #a0a0b2;
  font-size: 11px;
  font-weight: 400;
  margin-top: 2px;
`;

// ─── Empty State ──────────────────────────────────────────────
export const EmptyState = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 8px;
`;

export const EmptyIcon = styled.Text`
  font-size: 48px;
`;

export const EmptyText = styled.Text`
  color: #f5f5f5;
  font-size: 18px;
  font-weight: 600;
`;

export const EmptySubText = styled.Text`
  color: #a0a0b2;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  padding-horizontal: 40px;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  padding: 15px;
`;

export const DropDown = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #7b2cbf;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
`;

export const ButtonList = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #7b2cbf;
  border-radius: 10px;
  padding: 5px 10px 5px 10px;
`;

export const ButtonText = styled.Text`
  color: #a0a0b2;
`;

export const AddGeneroButton = styled.TouchableOpacity`
  border-radius: 100px;
  background-color: #7b2cbf;
  width: 75px;
  height: 75px;
  justify-content: center;
  align-items: center;
`;

export const AddGeneroText = styled.Text`
  color: #d9d9df;
  font-weight: 100px;
  font-size: 50px;
`;

export const AddButtonWrapper = styled.View`
  position: absolute;
  bottom: 32px;
  right: 24px;
`;

export const SubmitNewSeries = styled.TouchableOpacity`
  background-color: #7b2cbf;
  width: 75px;
  height: 75px;
`;
