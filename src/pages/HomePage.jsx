import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { BodyLayout } from '../components/Flex';
import { Title } from '../components/Title';
import { Video } from '../components/Video';

const NoStyleLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const HomePage = () => {
  return (
    <>
      <Title title='Popular Titles' />

      <BodyLayout>
        <NoStyleLink to='/series'>
          <Video title='Popular Series' label='Series' />
        </NoStyleLink>
        <NoStyleLink to='/movies'>
          <Video title='Popular Movies' label='Movies' />
        </NoStyleLink>
      </BodyLayout>
    </>

  );
}
