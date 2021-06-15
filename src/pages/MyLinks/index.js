import React,{useState,useEffect} from 'react';
import { Modal, ActivityIndicator } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import ModalLink from '../../components/ModalLink';
import ListItem from '../../components/ListItem';

import {getLinksSave,deleteLink} from '../../utils/storeLinks'

import {Container,Titulo,ListaLinks,ContainerEmpty,WarningText} from './styles';

export default function Mylinks() {
  const isFocused = useIsFocused(); //quando estiver com a tela em foco

  const [links,setLinks] = useState([]); //array vazio para armazenar os links
  const [dados,setDados] = useState({}); //
  const [modalVisible,setModalVisible] = useState(false);
  const [loanding,setLoanding] = useState(true);


  //para buscar os links estou usando o useEfect
  useEffect(()=>{
    async function getLinks(){
      const resultado = await getLinksSave('kwebLink.links');
      setLinks(resultado);
      setLoanding(false);
    }
    getLinks();
  },[isFocused])

  function handleItem(item){
    setDados(item);
    setModalVisible(true);
  }
  
  async function handleDelete(id){
    const resuldado = await deleteLink(links,id);
    setLinks(resuldado);
  }

 return (
    <Container >
    <StatusBarPage
      barStyle="light-content"
      backgroundColor="#132742"
      
     />
     <Menu/>
        <Titulo >Meus Links</Titulo>


      {
         loanding &&  (
          <ContainerEmpty>
            <ActivityIndicator color="#fff" size={25} />
          </ContainerEmpty>
        )}

      {
        ! loanding && links.length === 0 &&  (
          <ContainerEmpty>
            <WarningText>Você ainda não possue nenhum link :( </WarningText>
          </ContainerEmpty>
        )}
      
      <ListaLinks 
      data={links}
      keyExtractor={(item)=> String(item.id)} 
      renderItem={ ({item})=> <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} /> } //rederizando o componente 
      contentContainerStyle={{paddingBottom:20}} //aplicando estilo na lista
      showsVerticalScrollIndicator={false} //exclue a barra de rolagem lateral
      
      />

      <Modal visible={modalVisible} transparent animationType="slide" >
          <ModalLink onClose={() => setModalVisible(false)} dados={dados} />
      </Modal>

    </Container>
  );
}