import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  justify-content: center;
  align-items: center;
  flex: 1;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const TextTitle = styled.div`
  justify-content: center;
  align-items: center;
`
const FirstDiscribeContent = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 100px;
  font-size: 20px;
`
const ParagraphCard = styled.p`
  margin: -70px 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const TagDivParagraph = styled.div`
  display: flex;
`
const Paragraph = styled.p`
  margin-left: 500px;
  margin-right: 20px;
  text-align: justify;
`

const About_us = () => {
  return (
    <Container>
      <Header />
      <Content>
        <TextTitle>
          <nav>
            <ul>
              <li>qqq</li>
              <li>sss</li>
              <li>aaa</li>
            </ul>
          </nav>
          <FirstDiscribeContent>
            <b>About US</b>
          </FirstDiscribeContent>
          <ParagraphCard>General Information about our company</ParagraphCard>
          <TagDivParagraph>
            <Paragraph>
              Trivjoy is a social travel platfform with a goal to inspire you to
              travel more and to experience new adventures. Our mission is to
              make it easy for travelers to connect and to travel the world
              together. We believe that traveling is more fun when you have
              someone with whom you can share your travel experience and
              adventures. TripGiraffe thrives to create an extensive database of
              travelers with plans to travel to all the places one can possibly
              think of. Getting the right people to travel together has never
              been easier! Creating a trip on Trivjoy gives you an option to
              specify in detail all the information about your trip together
              with your expectations. Are you looking for someone traveling on a
              budget, maybe for someone with whom you could split cost of
              accommodation? Or maybe you are looking for someone who is
              planning to do work&travel? Either way, TripGiraffe will have you
              covered. Join an existing trip or create your own one and go
              expore together!
            </Paragraph>
          </TagDivParagraph>
        </TextTitle>
      </Content>
      <Footer />
    </Container>
  )
}

export default About_us
