import AsyncStorage from '@react-native-async-storage/async-storage';

    //Função que Busca os links salvos no Async Storage
    export async function getLinksSave(key){ 
        const myLinks = await AsyncStorage.getItem(key);
    
    let linkSaves = JSON.parse(myLinks) || [];

    return linkSaves;
    }

    //Função que Salva os links salvos no Async Storage.
    export async function saveLink(key, newLink){ 
        let linksStored = await getLinksSave(key);
    

    //se tiver algum link salvo com esse ID ou duplicado preciso iguinorar.
    const hasLink = linksStored.some(link => link.id === newLink.id);
    if(hasLink){
        console.log('Esse link já existe na lista.');
        return;
    }

    linksStored.push(newLink);
    await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso!');


}

    //Função que deleta  os links salvos no Async Storage.
    export async function deleteLink(links, id) {

        let mylinks = links.filter((item)=>{
            return(item.id !== id)
        })
        await AsyncStorage.setItem('kwebLink.links', JSON.stringify(mylinks))
        console.log('Link deletado do Storage!')

        return mylinks;
    }

