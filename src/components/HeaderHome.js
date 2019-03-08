import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  background-image: url('/assets/images/header-background.jpg');
  background-size: cover;
  box-sizing: border-box;
  height: 500px;
`

const DiscoveryStyle = styled.button`
  display: flex;
  text-align: right;
  justify-content: center;
  align-items: center;
  margin: 300px 0px 0px 600px;
  font-size: 20px;
  height: 40px;
  width: 140px;
  background-color: #5bb9fd;
  color: white;
  border-radius: 3px;
  border-color: 2px #333131;
  justify-content: center;
  :hover {
    cursor: pointer;
    background-color: #68bffd;
  }
`

const DiscoveryFont = styled.b`
  margin-bottom: 4px;
`
const DiscoveryArrow = styled.img`
  height: 30px;
  margin-top: 4px;
`

const HeaderHome = () => {
  return (
    <ContainerHeader>
      <Navigation />
      <DiscoveryStyle>
        <DiscoveryFont>Discovery</DiscoveryFont>
        <DiscoveryArrow src="/assets/logo/arrow-right.svg" alt="" />
      </DiscoveryStyle>
    </ContainerHeader>
  )
}

export default HeaderHome
