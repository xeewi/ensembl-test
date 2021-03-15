import React from 'react'
import styled from 'styled-components';
import { Layout } from './Flex';

const Container = styled.div`
  margin: 8px;
  width: 200px;
  
  @media (max-width: 768px) {
    width: 100px;
  }
`

const ImageContainer = styled.div`
  width: 200px;
  height: 300px;
  background-color:#202020;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 150px;
  }
`
const Title = styled.p`
  margin: 8px 0  ;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`

const Label = styled.p`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
`

const Image = styled.img`
  position: absolute;
  z-index: 0;
  width: inherit;
`

export const Video = ({title, label, img}) => {
  return (
    <Container>
      <ImageContainer>
        <Label>{label}</Label>
        <Image src={img ? img : 'assets/placeholder.png'} />
      </ImageContainer>
      <Title>{title}</Title>
    </Container>
  );
}
