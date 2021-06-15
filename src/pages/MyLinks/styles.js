import styled from "styled-components/native";
import {Platform} from 'react-native';

export const Container = styled.View`

flex: 1;
background-color: #132742;

`;
export const Titulo = styled.Text`
margin-top: ${Platform.OS === "ios" ? 35+'%' :20+'%'};
font-size: 30px;
font-weight: bold;
color: #fff;
margin-left: 20px;

`;
export const ListaLinks = styled.FlatList``;

export const ContainerEmpty = styled.View`
margin-top: 15%;
align-items: center;

`;
export const WarningText = styled.Text`
font-size: 17px;
color: #fff;

`;