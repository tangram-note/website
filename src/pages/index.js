import React from 'react'
import styled from 'styled-components';
import '../css/normalize.css'
import '../css/style.css';
import { Header } from '../components/header'
import { Introduce } from '../components/introduce'

const Container = styled.div`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100%;
`;

const App = () => {

  return (
    <Container>
      <Header />
      <Introduce />
    </Container>
  )
}

export default App
