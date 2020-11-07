import React from 'react';

import Card from '../Card'

import {Container, Title, SlideScroll} from './styles'

const SlideCard = ({ slide }) => {
    return(
        <Container>
            <Title>{slide.title}</Title>
            <SlideScroll>
                { slide.itens && slide.itens.map((item, index) =>(
                    <Card key = {index} item={item} />
                )) }
            </SlideScroll>
        </Container>
    )
};

export default SlideCard