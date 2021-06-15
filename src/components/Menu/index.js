import React from 'react';
import { View,Text } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { ButtonMenu } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const navegar = useNavigation();
 return (
       <ButtonMenu onPress={()=> navegar.openDrawer()}>
            <Feather name="menu" size={45} color="#fff" />
       </ButtonMenu>
  );
}