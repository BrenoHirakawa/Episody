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
  align-items: center;
  gap: 12px;
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
  font-size: 22px;
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

export const ArrowButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
`;

export const ArrowImage = styled.Image`
  height: 28px;
  width: 28px;
`;

// ─── Container ────────────────────────────────────────────────
export const Container = styled.View`
  padding: 24px 16px 48px;
`;

export const SectionLabel = styled.Text`
  color: #F5F5F5;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

// ─── Grid 3 colunas ───────────────────────────────────────────
export const GridWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
`;

export const GridCard = styled.TouchableOpacity`
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

export const GridCoverImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const GridTitle = styled.Text`
  color: #D0D0DC;
  font-size: 11px;
  margin-top: 6px;
  line-height: 15px;
`;

// ─── Empty ────────────────────────────────────────────────────
export const EmptyWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const EmptyText = styled.Text`
  color: #A0A0B2;
  font-size: 15px;
  text-align: center;
`;