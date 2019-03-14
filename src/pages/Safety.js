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
  width: 400dpx;
  height: 200px;
  left: 600px;
  top: 73px;
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
          <img src="/assets/images/safetyimage.png" alt="help logo" />
        </StyledDiv>
      </Content>
      <Footer />
    </Container>
  )
}

export default Safety
