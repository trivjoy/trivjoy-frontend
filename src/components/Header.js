import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const ContainerHeader = styled.div`
  background-image: url('/assets/images/header-background.jpg');
  background-size: cover;
  box-sizing: border-box;
  height: 80px;
`

const Header = () => {
  return (
    <ContainerHeader>
      <Navigation />
    </ContainerHeader>
  )
}

export default Header
