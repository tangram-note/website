import * as React from "react"
import '../css/normalize.css'
import '../css/style.css';
import { Header } from '../components/header'
import { Introduce } from '../components/introduce'
import { Container } from "./index.styled"

const App = () => {

  return (
    <Container>
      <Header />
      <Introduce />
    </Container>
  )
}

export default App
