import React from 'react';
import {Text,View,TouchableOpacity,TouchableWithoutFeedback,Share} from 'react-native';
import Clipboard from 'expo-clipboard';

import {ModalContainer, Container,Header,ContainerLink,Titulo,UrlGrade,ContainerLinkPequeno,UrlPequena } from './styles'
import { Feather } from '@expo/vector-icons';



export default function ModalLink({ onClose, dados }) {
  function copyLink(){
    Clipboard.setString(dados.link); //copia
    alert('Link copiado com sucesso!');
  }

  async function actionShare(){
    try{
      const resultado = await Share.share({
        message: `Link encurtado ${dados.link}`
      });
      if(resultado.action === Share.sharedAction ){
        if(resultado.activityType){
          console.log('activityType');
        }else{
          //compartilhou!
          console.log('Compartilhado com sucesso!')
        }
      }else if(resultado.action === Share.dismissedAction){
        console.log('Modal Fechado')
      }

    }catch(error){
      console.log(error.message);
    }



    //alert('funcionou!')
  }

 return (
   <ModalContainer>

      <TouchableWithoutFeedback onPress={onClose}>
      <View style={{flex:1}}></View>
      </TouchableWithoutFeedback>

      <Container>
        <Header>
          <TouchableOpacity onPress={onClose} >
            <Feather 
              name="x" 
              color="#212743" 
              size={30}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={actionShare}>
            <Feather 
              name="share" 
              color="#212743" 
              size={30}
            />
          </TouchableOpacity>
        </Header>

        <ContainerLink>
          <Titulo> Link encurtado: </Titulo>
          <UrlGrade numberOfLines={1} > {dados.long_url} </UrlGrade>

          <ContainerLinkPequeno 
          activeOpacity={1}
          onPress={copyLink}

          >
            <UrlPequena numberOfLines={1} >
              {dados.link}
            </UrlPequena>
            <TouchableOpacity onPress={copyLink}>
              <Feather
                name="copy"
                color="#fff"
                size={25}
              />
            </TouchableOpacity>
          </ContainerLinkPequeno>
        </ContainerLink>

      </Container>

    </ModalContainer>
    

  );
}