import styled from "styled-components/native";
import {Platform} from 'react-native';

export const ContainerBotton = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
background-color: rgba(255,255,255,0.21);
margin: 7px 10px;
border-radius: 7px;
padding: 12px;
`;
export const Link = styled.Text`
color: #fff;
font-size: 18px;
padding-left: 10px;
padding-right: 20px;

`;
export const ActionContainer = styled.TouchableOpacity`
width: 15%;
background-color: #ff5555;
border-radius: 7px;
justify-content: center;
align-items: center;
margin: 7px 10px;
`;