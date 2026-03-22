import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #0B0B0F;
`;

export const InvisibleHeader = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
`;

export const ArrowButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: rgba(0,0,0,0.5);
  align-items: center;
  justify-content: center;
`;

export const ArrowImage = styled.Image`
  height: 24px;
  width: 24px;
`;

export const CoverBanner = styled.Image`
  width: 100%;
  height: 280px;
`;

export const CoverPlaceholder = styled.View`
  width: 100%;
  height: 280px;
  background-color: #1C1C24;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.View`
  padding: 20px 24px 48px;
`;

export const SerieTitle = styled.Text`
  color: #F5F5F5;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const SerieGenre = styled.Text`
  color: #7B2CBF;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const SectionLabel = styled.Text`
  color: #A0A0B2;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  color: #D0D0DC;
  font-size: 15px;
  line-height: 24px;
  font-weight: 300;
`;

export const WatchedButton = styled.TouchableOpacity`
  background-color: #7B2CBF66;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const WatchedButtonText = styled.Text`
  color: #F5F5F5;
  font-size: 15px;
  font-weight: 600;
`;

export const FavoriteButton = styled.TouchableOpacity`
  background-color: #7B2CBF;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
`;

export const FavoriteButtonText = styled.Text`
  color: #F5F5F5;
  font-size: 15px;
  font-weight: 600;
`;