import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 27px 27px 27px;
  height: 500px;
  width: 372px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2),
      0 18px 60px 0 rgba(0, 0, 0, 0.19);
  }
`
const LocationLogo = styled.img`
  height: 18px;
  width: 18px;
`

const LogoStyle = styled.img`
  height: 15px;
  width: 15px;
  margin: 5px 5px 5px 0px;
`
const DiscribeBottomCards = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0px 5px 10px;
  flex: 1;
`
const DiscribeTopCards = styled.div`
  margin: 10px 0px 10px 10px;
`
const ImageCards = styled.img`
  border-radius: 5px 5px 0px 0px;
`
const ReadMoreStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 30px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #5bb9fd;
  color: white;
`
const TitleStyled = styled.h2`
  margin: 5px 0px 2px 10px;
`

const Trips = () => {
  return (
    <Container>
      <Header />
      <Content>
        <CardsStyle>
          <ImageCards src="/assets/images/first-section-1.jpg" alt="" />
          <TitleStyled>Title</TitleStyled>
          <DiscribeTopCards>
            <b>
              Sakti Dewantoro,<b> 24</b>
            </b>
            <div>
              <LocationLogo src="/assets/logo/maps-and-flags.svg" alt="" />
              <b>Bandung</b>
            </div>
          </DiscribeTopCards>

          <DiscribeBottomCards>
            <LogoStyle src="/assets/logo/hammock.svg" alt="" />
            <b>Tour Destination:</b>
          </DiscribeBottomCards>
          <DiscribeBottomCards>
            <LogoStyle src="/assets/logo/calendar.svg" alt="" />
            <b>Date:</b>
          </DiscribeBottomCards>
          <DiscribeBottomCards>
            <LogoStyle src="/assets/logo/purse.svg" alt="" />
            <b>Budget:</b>
          </DiscribeBottomCards>
          <DiscribeBottomCards>
            <LogoStyle src="/assets/logo/waiting-room.svg" alt="" />
            <b>People Can Join:</b>
          </DiscribeBottomCards>
          <DiscribeBottomCards>
            <LogoStyle src="/assets/logo/success.svg" alt="" />
            <b>Alredy Join:</b>
          </DiscribeBottomCards>
          <ReadMoreStyle>
            <b>Read More</b>
          </ReadMoreStyle>
        </CardsStyle>
      </Content>
      <Footer />
    </Container>
  )
}

export default Trips
