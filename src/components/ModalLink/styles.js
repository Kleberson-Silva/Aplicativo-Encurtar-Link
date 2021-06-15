import styled from 'styled-components';

export const ModalContainer = styled.View`
flex: 1;

`;
export const Container = styled.View`
flex: 1;
background-color: #fff;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
padding: 0 15px;
`;
export const Header = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
margin: 15px 0px;

`;
export const ContainerLink = styled.View`
flex: 1;
justify-content: center;

`;
export const Titulo = styled.Text`
font-size: 33px;
font-weight: bold;
color: #1ccbae;
`;
export const UrlGrade = styled.Text`
font-size: 17px;
color: #a7a7a7;
margin-bottom: 30px;

`;
export const ContainerLinkPequeno = styled.TouchableOpacity`
width: 100%;
height: 45px;
background-color: #172742;
border-radius: 7px;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 15px;
`;
export const UrlPequena = styled.Text`
color: #fff;
width: 90%;
font-size: 16px;

`;