import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { logoutUser } from '../redux/actions/logout'

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
  width: 930px;
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
const LogoutStyle = styled.button`
  font-size: 14px;
  margin-right: 28px;
  margin-left: 30px;
  color: #b20e04;
  border-radius: 3px;
  border-color: #b20e04;
  height: 25px;
  :hover {
    cursor: pointer;
    background-color: #fbfbfb;
  }
`

const StyledLink = styled(Link)`
  margin: 0px;
`

const StyledCreateTrip = styled(Link)`
  width: 50px;
`

const Navigation = props => {
  const isAuthenticated = props.isAuthenticated

  return (
    <NavStyle>
      <LogoPosition>
        <Link to="/">
          <LogoTrivjoy src="/assets/logo/trivjoy-logo.png" alt="" />
        </Link>
      </LogoPosition>

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
            <b>Register</b>
          </RegisterStyle>
        </Link>
      )}

      {isAuthenticated && (
        <StyledCreateTrip to="/create">
          <b>Create Trip</b>
        </StyledCreateTrip>
      )}
      {isAuthenticated && (
        <Link to="/profile">
          <b>Profile</b>
        </Link>
      )}
      {isAuthenticated && (
        <LogoutStyle
          onClick={() => {
            props.dispatch(logoutUser())
            props.history.push('/')
          }}
        >
          <b>Logout</b>
        </LogoutStyle>
      )}
    </NavStyle>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(Navigation))
