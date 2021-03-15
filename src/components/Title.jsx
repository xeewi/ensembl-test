import React from 'react'
import styled from 'styled-components';
import { Layout } from './Flex';

const Container = styled.div`
  padding: 16px;
  background: #414141;
  box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
`
const Label = styled.h2`
  margin: 0;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`

export const Title = ({title}) => {
  return (
    <Container>
      <Layout>
        <Label>{title}</Label>
      </Layout>
    </Container>
  );
}
