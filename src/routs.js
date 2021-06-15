import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'; //importando o tipo de navegação

//importando as páginas
import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

import {Ionicons} from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const Drawer = createDrawerNavigator();

export default function Rotas(){ //responsavel por criar as navegações quais as telas que podem navegar
    return(
        //as configurações de estilo das navegações são feitas aqui
        <Drawer.Navigator  //estilos
        drawerContentOptions={{
            activeBackgroundColor:'#2CCBB9', //cor do label do menu
            activeTintColor:'#fff',//cor do nome dentro do label
            marginTop:30, //margem do topo
            labelStyle:{
                fontSize:20,//tamanho da fonte no nome dentro da label
            }
        }}
        >
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title:'Encurtar Link',//Muda o nome no menú
                    drawerIcon:({focused,size,color}) => (
                        <Ionicons
                        name={focused ? "cube" : "cube-outline"} 
                        color={color} 
                        size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="Meus Links"
                component={MyLinks}
                options={{
                    title:"Meus Links",
                    drawerIcon:({focused,color,size}) => (
                        <Ionicons
                        name={focused ? "stats-chart" : "stats-chart-outline"}
                        color={color} 
                        size={size}
                        />
                    )
                }}
            />

            

        </Drawer.Navigator>
    )
}