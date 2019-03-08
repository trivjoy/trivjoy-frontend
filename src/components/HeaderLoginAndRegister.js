import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LogoTrivjoy = styled.img`
  height: 55px;
  width: 70px;
`
const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  a {
    text-decoration: none;
    margin: 20px 30px;
    color: black;
  }
`

const LogoPosition = styled.div`
  width: 1279px;
`

const HeaderLoginAndRegister = () => {
  return (
    <NavStyle>
      <LogoPosition>
        <Link to="/">
          <LogoTrivjoy src="/assets/logo/trivjoy-logo.png" alt="" />
        </Link>
      </LogoPosition>
    </NavStyle>
  )
}

export default HeaderLoginAndRegister
