import React from 'react';
import { StatusBar } from 'react-native';
import {useIsFocused} from '@react-navigation/native'; //pra saber se a página está com foco ou não

export default function StatusBarPage(props) {
    const isFocused = useIsFocused();

 return isFocused ? <StatusBar {...props}/> : null; // ... quer dizer que está repassando todas as propriedades
}