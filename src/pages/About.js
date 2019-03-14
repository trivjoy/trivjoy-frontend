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
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 30px;
`
const StyledHelpParagraph = styled.div`
  justify-content: center;
  text-align: justify;
  font-size: 15px;
  flex-direction: column;
  padding: 0 100px;
  text-rendering: auto;
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

const About_us = () => {
  return (
    <Container>
      <Header />
      <Content>
        <InformationColumn>
          <h1>Information</h1>
          <p>Information about our company</p>
        </InformationColumn>
        <div>
          <StyledH1>About Us</StyledH1>
          <StyledHelpParagraph>
            <p>
              Trivjoy is a social travel platfform with a goal to inspire you to
              travel more and to experience new adventures. Our mission is to
              make it easy for travelers to connect and to travel the world
              together. We believe that traveling is more fun when you have
              someone with whom you can share your travel experience and
              adventures!
            </p>
            <p>
              TripGiraffe thrives to create an extensive database of travelers
              with plans to travel to all the places one can possibly think of.
              Getting the right people to travel together has never been easier!
              Creating a trip on Trivjoy gives you an option to specify in
              detail all the information about your trip together with your
              expectations.
            </p>
            <p>
              Are you looking for someone traveling on a budget, maybe for
              someone with whom you could split cost of accommodation? Or maybe
              you are looking for someone who is planning to do work&travel?
              Either way, TripGiraffe will have you covered. Join an existing
              trip or create your own one and go expore together!
            </p>
          </StyledHelpParagraph>
        </div>
      </Content>
      <Footer />
    </Container>
  )
}

export default About_us
