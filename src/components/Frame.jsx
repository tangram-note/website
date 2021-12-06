import React from 'react'
import styled from 'styled-components'
import { Header } from './header'
import { Footer } from './footer'
import '../css/normalize.css'
import '../css/style.css';

const Container = styled.div`
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  width: 100%;
  height: 100%;
`;


export default function Frame({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}
