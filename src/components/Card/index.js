import React from 'react';
import {
    Container,
    Photo,
    ContainerSubtitle,
    SubtitleTitle,
    SubtitleDescription
} from './styles';
const Card = ({item}) =>{
    return(
        <Container>
            <Photo source={{uri: item.photo}} />
            <ContainerSubtitle>
                <SubtitleTitle>{item.subtitle.title}</SubtitleTitle>
                <SubtitleDescription>{item.subtitle.description}</SubtitleDescription>
            </ContainerSubtitle>
        </Container>
    )
}

export default Card;