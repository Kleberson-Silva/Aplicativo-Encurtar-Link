import React,{useState} from 'react';
import { TouchableWithoutFeedback, Keyboard,KeyboardAvoidingView,Platform,Modal,ActivityIndicator } from 'react-native'; 

import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';

import { Feather } from '@expo/vector-icons';
import {ContainerLogo,Logo,ContainerContent,Titulo,SubTitulo,ContainerInput,BoxIcon,Input,BottonLink,BottonLinkText} from './styles';

import api from '../../services/api';
import { saveLink } from '../../utils/storeLinks';


export default function Home() {
  const [carregando,setCarregando] = useState(false);
  const [input,setInput] = useState('');
  const [modalVisible,setModalVisible] = useState(false);
  const [dados,setDados] = useState({});


  //função responsavel para incurtar o link
  async function actionEncurtarLink(){
    setCarregando(true);

    try{
      const resposta = await api.post('/shorten',
      {
        long_url: input
      })

      setDados(resposta.data);
      setCarregando(false);

      //Deus certo preciso salvar esse link em uma lista nesse storage
      saveLink('kwebLink.links',resposta.data)



    }catch{
        alert('ops parece que algo deu errado!')
    }
    Keyboard.dismiss();
    setInput('');
    setCarregando(false);
    setModalVisible(true);
  }

 return (
   
   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
   <LinearGradient
   colors={['#1ddbb9','#132742']}
   style={{flex:1,justifyContent:"center"}}
   >
     <StatusBarPage
      barStyle="light-content"
      backgroundColor="#1ddbb9"
      
     />
      <Menu/>

      <KeyboardAvoidingView 
      behavior={Platform.OS === "android" ? 'padding' : "position" }
      enabled={true}
      >
      <ContainerLogo>
        <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Titulo>
          Encurtar Link
        </Titulo>
        <SubTitulo>
          Cole seu link abaixo
        </SubTitulo>
        </ContainerContent>
      

      <ContainerInput>
        <BoxIcon>
          <Feather name="link" size={22} color="#fff" />
        </BoxIcon>
        <Input 
        placeholder="Cole seu link aqui..."
        placeholderTextColor="#fff"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="url"
        value={input}
        onChangeText={ (text) => setInput(text) }
        />
      </ContainerInput>

      <BottonLink onPress={actionEncurtarLink}>
        {
          carregando ? (
            <ActivityIndicator color="#121212" size={24} />
          ) : (
            <BottonLinkText>
              Gerar Link
            </BottonLinkText>
          )
        }
      </BottonLink>

      </KeyboardAvoidingView>

      <Modal visible={modalVisible} transparent animationType="slide" >
          <ModalLink onClose={() => setModalVisible(false)} dados={dados} />
      </Modal>

   </LinearGradient>
   </TouchableWithoutFeedback>
  );
}