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
`

const FooterText = styled.p`
  margin: 16px 0 0;
  color: #848484;
`

export const Footer = () => {
  return (
    <Container>
      <FooterLayout>
        <FooterText>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</FooterText>
        <FooterText>Copyright 2016 DEMO Streaming. All Rights Reserved.</FooterText>
      </FooterLayout>
    </Container>
  );
}
