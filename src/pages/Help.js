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
const Image = styled.img`
  width: 600px;
  height: 700px;
  padding: 50px;
  margin-left: 100px;
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
const ImageUsage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 0px;
`

const Help = () => {
  return (
    <Container>
      <Header />
      <Content>
        <InformationColumn>
          <h1>Information</h1>
          <p>everything about trivjoy app you can found here</p>
        </InformationColumn>
        <ImageUsage>
          <Image src="/assets/images/safetyimage.png" alt="help logo" />
        </ImageUsage>
      </Content>

      <Footer />
    </Container>
  )
}

export default Help
