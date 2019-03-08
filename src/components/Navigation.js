import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.img`
  height: 10px;
  width: 10px;
  margin: 20px 30px;
`

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
  width: 860px;
`
const RegisterStyle = styled.button`
  font-size: 14px;
  color: #6faf08;
  border-radius: 3px;
  border-color: #6faf08;
  height: 25px;
  :hover {
    cursor: pointer;
    background-color: #fbfbfb;
  }
`

const StyledLink = styled(Link)`
  margin: 0px;
`

const Navigation = () => {
  let isAuthenticated = false
  return (
    <NavStyle>
      <LogoPosition>
        <Link to="/">
          <LogoTrivjoy src="/assets/logo/trivjoy-logo.png" alt="" />
        </Link>
      </LogoPosition>

      <Logo src="/assets/logo/search-logo-header.svg" alt="" />
      <Link to="/trips">
        <b>Explore</b>
      </Link>
      {!isAuthenticated && (
        <StyledLink to="/login">
          <b>Login</b>
        </StyledLink>
      )}
      {!isAuthenticated && (
        <Link to="/register">
          <RegisterStyle>
            {' '}
            <b>Register</b>{' '}
          </RegisterStyle>
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/">
          <b>Post</b>
        </Link>
      )}
      {isAuthenticated && (
        <Link to="/profile">
          <b>Profile</b>
        </Link>
      )}
      {isAuthenticated && <button>Logout</button>}
    </NavStyle>
  )
}

export default Navigation
