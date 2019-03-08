import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const TripDetails = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  )
}

export default TripDetails
