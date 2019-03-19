import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const ContainerHeader = styled.div`
  background-image: url('/assets/images/header-background.jpg');
  background-size: cover;
  box-sizing: border-box;
  height: 500px;
  a {
    text-decoration: none;
  }
  @media all and (max-width: 1200px) {
    height: 450px;
  }
  @media all and (max-width: 1000px) {
    height: 400px;
  }
  @media all and (max-width: 768px) {
    height: 300px;
  }
`

const HeaderButtons = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`

const HeaderButton = styled.button`
  display: flex;
  justify-content: center;

  padding: 10px 20px;
  margin: 0 10px;
  font-size: 20px;
  background-color: #68bffd;
  color: white;
  border: none;
  border-radius: 4px;
  justify-content: center;
  font-weight: bold;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  @media all and (max-width: 1000px) {
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    font-size: 13px;
  }
`

const DescribeHomeHeader = styled.header`
  text-shadow: 1px 2px 4px white;
  margin-top: 80px;
  font-size: 20px;
  color: #2f80ed;
  @media all and (max-width: 1000px) {
    font-size: 16px;
    margin-top: 60px;
  }
  @media all and (max-width: 768px) {
    font-size: 13px;
    margin-top: 40px;
  }
`

const HomeHeaderContent = styled.div`
  text-align: center;
  @media all and (max-width: 1000px) {
    font-size: 16px;
  }
  @media all and (max-width: 768px) {
    font-size: 13px;
  }
`

const HeaderHome = props => {
  const isAuthenticated = props.isAuthenticated
  return (
    <ContainerHeader>
      <Navigation />
      <HomeHeaderContent>
        <DescribeHomeHeader>
          <h1>Let’s trip and joy with TrivJoy</h1>
          <h2>#YourTravelPartnerFinder</h2>
        </DescribeHomeHeader>
        <HeaderButtons>
          <Link to="/trips">
            <HeaderButton>Discover Trips</HeaderButton>
          </Link>
          {!isAuthenticated && (
            <Link to="/register">
              <HeaderButton>Register Now</HeaderButton>
            </Link>
          )}
        </HeaderButtons>
      </HomeHeaderContent>
    </ContainerHeader>
  )
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default connect(mapStateToProps)(HeaderHome)
