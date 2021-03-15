import React from 'react'
import styled from 'styled-components';
import { Flex, Layout } from './Flex';

const Container = styled.div`
  padding: 0 16px;
  background: rgb(0,105,255);
  background: linear-gradient(0deg, rgba(0,105,255,1) 0%, rgba(0,151,255,1) 100%); 
  box-shadow: 0px 0px 5px -2px rgba(0,0,0,0.75);
`

const NavLayout = styled(Layout)`
  justify-content: space-between;

  & h1 {
    color: #fff;
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 0.8rem;
    }
  }
`

const LoginButton = styled.p`
  color: #fff;
  margin: 16px;
  font-weight: bold;
`

const TrialButton = styled.button`
  background: rgb(51,51,51);
  background: linear-gradient(0deg, rgba(51,51,51,1) 0%, rgba(68,68,68,1) 100%);
  border: none;
  color: #fff;
  padding: 8px 16px;
  height: min-content;

  @media (max-width: 768px) {
    padding: 8px;
  }
`

export const Navigation = () => {
  return (
    <Container>
      <NavLayout>
        <h1>DEMO Streaming</h1>
        <Flex>
          <LoginButton>Log in</LoginButton>
          <TrialButton>Start your free trial</TrialButton>
        </Flex>
      </NavLayout>
    </Container>
  );
}
