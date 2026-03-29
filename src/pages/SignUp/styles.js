import styled from "styled-components";

export const Background = styled.View`
    flex:1;
    background-color: #0B0B0F;
`;

export const Container = styled.View`
  flex: 1;
  padding: 40px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
    color: #F5F5F5;
    font-weight: 700;
    font-size: 60px;
    letter-spacing: 8px;
`;

export const MiddleText = styled.Text`
    color: #F5F5F5;
    font-weight: 500;
    font-size: 30px;
`;

export const SmallText = styled.Text`
    color: #A0A0B2;
    font-weight: 300;
    font-size: 16px;
`;

export const Logo = styled.Image`
    height:50px;
    width:50px;
`;

export const AreaInput = styled.View`
    width: 100%;
    align-items: center;
`;

export const Input = styled.TextInput`
    background-color: #1C1C24;
    width: 90%;
    height: 52px;
    border-radius: 10px;
    border-color: #2a2a35;
    border-width: 1px;
    color: #ffffff;
    padding: 0 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
    background-color: #7B2CBF;
    width: 70%;
    height: 56px; 
    border-radius: 20px;
    justify-content: center;
    align-items: center;
`;

export const SubmitText = styled.Text`
    color: #F5F5F5;
    font-weight: 600;
    font-size: 24px;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
    color: #A0A0B2;
    font-weight: 500;
    font-size: 16px;
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

export const InputGroup = styled.View`
    width: 100%;
    gap: 20px;
`;