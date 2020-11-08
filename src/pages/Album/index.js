import React, { useState } from 'react';

import { 
    Container,
    ContainerHeader,
    NavBar,
    GroupItem,
    ButtonFollow,
    InfoAuthor,
    BandName,
    BandFooter,
    Photo,
    Content,
    ButtonRandomOrder,
    ButtonRandomOrderText,
    InfoCategory,
    Music,
    MusicGroup,
    MusicNumber,
    MusicName, 
    MusicGroupItens,
    MusicListening,
    ContainerMusic
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

import musics from './musics.json';

const Musics = ({ iconConfigure }) => {
    return musics && musics.map((music, index) => (
        <Music key={index++}>
            <MusicGroup>
                <MusicNumber>{index++}</MusicNumber>
                <MusicGroupItens>
                    <MusicName>{music.name}</MusicName>
                    <MusicListening>{music.listening}</MusicListening>
                </MusicGroupItens>
            </MusicGroup>
            <Icon name="ellipsis-v" color="#aaa" size={16} style={{padding: 30}} />
        </Music>
    ));
}

const Album = () => {
    const [iconConfigure] = useState({
        size: 16,
        color: '#fff'
    });

    return(
        <Container>
            <Photo source={{ uri: 'https://conteudo.imguol.com.br/c/entretenimento/97/2019/06/24/racionais-mcs-anuncia-turne-de-30-anos-parceria-com-a-tidal-e-mini-documentario-1561412544494_v2_1920x1252.jpg' }} />
            <ContainerHeader>
                <NavBar>
                    <Icon name="arrow-left" {...iconConfigure} />
                    <GroupItem>
                        <ButtonFollow>Seguindo</ButtonFollow>
                        <Icon name="ellipsis-v" {...iconConfigure} />
                    </GroupItem>
                </NavBar>
                <InfoAuthor>
                    <BandName>Racionais</BandName>
                    <BandFooter>1.445.777 ouvintes mensais</BandFooter>
                </InfoAuthor>
            </ContainerHeader>
            <Content>
                <ButtonRandomOrder>
                    <ButtonRandomOrderText>Ordem aleatória</ButtonRandomOrderText>
                </ButtonRandomOrder>
                <InfoCategory>Popular</InfoCategory>
                <ContainerMusic>
                    <Musics />
                </ContainerMusic>
            </Content>
        </Container>
    );
};

export default Album;