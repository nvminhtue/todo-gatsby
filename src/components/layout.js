import React from 'react';
import styled from 'styled-components';

// import Menu from 'components/menu';
import Menu from './menu';

const Container = styled.div`
  padding: 1.25rem 1rem;
  background-color: #8BC6EC;
  background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export  default ({children}) => (
  <Container>
    <Menu />
    {children}
  </Container>
  );
