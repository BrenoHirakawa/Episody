import styled from 'styled-components';

// -> Background e container geral

export const Background = styled.View`
  flex: 1;
  background-color: #0b0b0f;
`;

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 40px 0;
  justify-content: space-between;
  align-items: center;
`;

// -> Header
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

// -> Tipos de texto

export const Title = styled.Text`
  color: #f5f5f5;
  font-weight: 700;
  font-size: 60px;
  letter-spacing: 8px; /* Works with px units */
`;

export const MiddleText = styled.Text`
  color: #f5f5f5;
  font-weight: 500;
  font-size: 30px;
`;

export const SmallText = styled.Text`
  color: #a0a0b2;
  font-weight: 300;
  font-size: 16px;
`;

// -> Area do input

export const InputGroup = styled.View`
  gap: 20px;
  flex-direction: column;
  width: 90%;
`;

export const AreaInput = styled.View`
  text-color: #ffffff;
  height: 52px;
`;

export const DescriptionInput = styled.View`
  text-color: #ffffff;
  height: 150px;
  text-align: top;
`;

export const Input = styled.TextInput`
  textalignvertical: 'top';
  background-color: #1c1c24;
  border-radius: 10px;
  border-color: #2a2a35;
  border-width: 1px;
  color: #ffffff;
`;

// -> Área do botão

export const SubmitButton = styled.TouchableOpacity`
  background-color: #7b2cbf;
  width: 207px;
  height: 56px;
  border-radius: 20px;
  align-items: center;

  padding: 10px;
`;



export const TitleGroup = styled.View`
  align-items: center;
  gap: 16px;
`;

export const LinkGroup = styled.View`
  flex-direction: row;
`;

export const TextGroup = styled.View`
  align-items: center;
  gap: 10px;
`;

export const Icons = styled.Image`
  height: 20px;
  width: 20px;
`;

export const SubmitImage = styled.TouchableOpacity`
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

export const SubmitText = styled.Text`
  color: #f5f5f5;
  font-weight: 600;
  font-size: 15px;
`;