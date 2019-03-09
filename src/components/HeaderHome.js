import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerHeader = styled.div`
  background-image: url('/assets/images/header-background.jpg');
  background-size: cover;
  box-sizing: border-box;
  height: 500px;
  a {
    text-decoration: none;
  }
`

const DiscoveryStyle = styled.button`
  display: flex;
  text-align: right;
  justify-content: center;
  align-items: center;
  margin: 230px 0px 0px 600px;
  font-size: 20px;
  height: 40px;
  width: 140px;
  background-color: #ff8352;
  color: white;
  border-radius: 4px;
  border-color: 2px #333131;
  justify-content: center;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const DiscoveryFont = styled.b`
  margin-bottom: 4px;
`
const DiscoveryArrow = styled.img`
  height: 30px;
  margin-top: 4px;
`
const DiscribeHomeHeader = styled.h2`
  text-shadow: 1px 2px 4px white;
  margin-top: 50px;
  color: #68bffd;
`
const HomeHeaderContent = styled.div`
  text-align: center;
`

const HeaderHome = () => {
  return (
    <ContainerHeader>
      <Navigation />
      <HomeHeaderContent>
        <DiscribeHomeHeader>
          Let’s trip and joy with TrivJoy #YourBestFindTravelPartner.{' '}
        </DiscribeHomeHeader>
        <Link to="/trips">
          <DiscoveryStyle>
            <DiscoveryFont>Discovery</DiscoveryFont>
            <DiscoveryArrow src="/assets/logo/arrow-right.svg" alt="" />
          </DiscoveryStyle>
        </Link>
      </HomeHeaderContent>
    </ContainerHeader>
  )
}

export default HeaderHome
