import styled from "styled-components/native";

//  Layout base 
export const Background = styled.View`
  flex: 1;
  background-color: #0B0B0F;
`;

export const Container = styled.View`
  flex: 1;
  padding: 24px 0;
  align-items: center;
  justify-content: space-between;
`;

//  Header Invisível
export const InvisibleHeader = styled.View`
  padding: 10px;
  flex-direction: row; 
  justify-content: space-between;
`;


//  Seta de exit
export const ArrowButton = styled.TouchableOpacity`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

export const ArrowImage = styled.Image`
    height: 30px;
    width: 30px;
`;


// Foto e nome do user
export const UserWrapper = styled.View`
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const FotoCircle = styled.Image`
    height: 160px;
    width: 160px;
    border-radius: 200px;
    border-width: 3px;
    border-color: #D9D9D9;
`;

export const NomeUser = styled.Text`
    color: #F5F5F5;
    font-weight: 600;
    font-size: 24px;
`;


// Opções 
export const OptionsWrapper = styled.View`
  width: 80%;
  align-items: left;
  justify-content: center;
`;

export const Options = styled.TouchableOpacity`
  border-bottom-width: 1px;
  border-bottom-color: #A0A0B2;
`;

export const OptionsText = styled.Text`
  padding-top: 8px;  
  padding-bottom: 8px; 
  color: #F5F5F5;
  font-weight: 300;
  font-size: 20px;
`;

//  Botão de exit 
export const ExitButton = styled.TouchableOpacity`
  background-color: #7B2CBF;
  height: 56px;
  width: 134px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const ExitButtonText = styled.Text`
    color: #F5F5F5;
    font-weight: 600;
    font-size: 24px;
`;
