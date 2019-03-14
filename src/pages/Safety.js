import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const StyledDiv = styled.div`
  display: flex;
`
const InformationColumn = styled.div`
  font-size: 15px;
  width: 404px;
  height: 25px;
  left: 40px;
  top: 303px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
`

const Safety = () => {
  return (
    <Container>
      <Header />
      <Content>
        <InformationColumn>
          <h1>Information</h1>
          <p>everything about trivjoy app you can found here</p>
        </InformationColumn>
        <StyledDiv>
          <img src="/assets/logo/create-trip.png" alt="create trip" />
          <div>
            <h3>Create a Trip</h3>
            <p>
              Create a trip and wait for someone to join up or find an existing
              one that you like the most.
            </p>
          </div>
        </StyledDiv>
      </Content>
      <Footer />
    </Container>
  )
}

export default Safety
