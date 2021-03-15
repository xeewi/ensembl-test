import React from 'react'
import styled from 'styled-components';
import { Flex, Layout } from './Flex';

const Container = styled.div`
  padding: 16px 0;
  background: #1E1E1E;
`

const FooterLayout = styled(Layout)`
  flex-direction: column;
  align-items: baseline;

  @media (max-width: 768px) {
    padding: 8px;
  }
`

const SocialLayout = styled(Flex)`
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin: 32px 0;

  @media (max-width: 768px) {
    flex-direction: column
  }
`

const FooterText = styled.p`
  margin: 16px 0 0;
  color: #848484;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`

const SocialImg = styled.img`
  height: 30px;
  margin: 16px;

  @media (max-width: 768px) {
    height: 20px;
  }
`

const StoreImg = styled.img`
  height: 40px;
  margin: 8px;
  @media (max-width: 768px) {
    height: 30px;
  }
`

export const Footer = () => {
  return (
    <Container>
      <FooterLayout>
        <FooterText>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</FooterText>
        <FooterText>Copyright 2016 DEMO Streaming. All Rights Reserved.</FooterText>
        <SocialLayout>
          <Flex>
            <SocialImg src='assets/social/facebook-white.svg' />
            <SocialImg src='assets/social/twitter-white.svg' />
            <SocialImg src='assets/social/instagram-white.svg' />
          </Flex>
          <Flex>
            <StoreImg src='assets/store/app-store.svg' />
            <StoreImg src='assets/store/play-store.svg' />
            <StoreImg src='assets/store/windows-store.svg' />
          </Flex>
        </SocialLayout>
      </FooterLayout>
    </Container>
  );
}
