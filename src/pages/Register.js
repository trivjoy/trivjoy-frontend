import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLoginAndRegister from '../components/HeaderLoginAndRegister'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/assets/images/register-background.png');
    height: 100%;
  }
`
const Container = styled.div`
  a {
    text-decoration: none;
    color: #2f80ed;
  }
`

const TitleRegister = styled.h1`
  color: #2f80ed;
  margin: 0 auto;
`
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`
const StyledInputForm = styled.input`
  margin-top: 16px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #333333;
`
const StyledButtonRegister = styled.input`
  margin-top: 15px;
  margin-left: 150px;
  margin-bottom: 10px;
  height: 30px;
  width: 200px;
  border-radius: 5px;
  border: 1px solid #333333;
  font-size: 14px;
  font-family: 'Fira Sans', sans-serif;
  background-color: #5bb9fd;
  :hover {
    cursor: pointer;
    background-color: #68bffd;
  }
`

const ExtraInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`
const ExtraInformationTop = styled.p`
  font-size: 14px;
  margin: 0px auto;
`
const ExtraInformationBottom = styled.b`
  margin-top: 100px;
  margin-left: 158px;
`
const StyledAgeForm = styled.input`
  margin-top: 16px;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #333333;
`
const GenderStyle = styled.select`
  text-align: center;
  height: 35px;
  width: 160px;
  margin-left: 16px;
  margin-right: 16px;
  border: 1px solid #333333;
`

const StyledCityForm = styled.input`
  margin-top: 16px;
  width: 260px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #333333;
`

const Register = () => {
  return (
    <Container>
      <GlobalStyle />
      <HeaderLoginAndRegister />

      <ContainerForm action="">
        <TitleRegister>Join Us as a Trivjoy Member!</TitleRegister>
        <StyledInputForm type="text" placeholder="FullName" required />
        <StyledInputForm type="email" placeholder="Email" required />
        <StyledInputForm type="tel" placeholder="Telephone Number" required />
        <div>
          <StyledAgeForm type="number" placeholder="Age" required />
          <GenderStyle>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </GenderStyle>
          <StyledCityForm type="text" placeholder="City" required />
        </div>
        <StyledInputForm type="text" placeholder="Address" required />
        <StyledInputForm type="password" placeholder="password" required />
        <StyledButtonRegister type="submit" value="Register" />
      </ContainerForm>
      <ExtraInformation>
        <ExtraInformationTop>
          By signing up, you agree to Trivjoy's terms of service and privacy
          policy.
        </ExtraInformationTop>
        <ExtraInformationTop>
          We will not share your personal info with anyone.
        </ExtraInformationTop>
        <Link to="/login">
          <span scheme="light">
            <ExtraInformationBottom>
              Already a member? Log in
            </ExtraInformationBottom>
          </span>
        </Link>
      </ExtraInformation>
    </Container>
  )
}

export default Register
