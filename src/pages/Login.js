import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLoginAndRegister from '../components/HeaderLoginAndRegister'
import styled from 'styled-components'

const Container = styled.div`
  background-image: url('/assets/images/login-background.png');
  height: 100%;
  a {
    text-decoration: none;
    color: #2f80ed;
  }
`

const TitleRegister = styled.h1`
  color: #2f80ed;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 20px;
`
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`
const StyledInputForm = styled.input`
  text-align: center;
  margin-left: 70px;
  margin-top: 16px;
  height: 30px;
  width: 350px;
  border-radius: 40px;
  border: 1px solid #333333;
`
const StyledButtonLogin = styled.input`
  margin: 30px 0px 20px 175px;
  height: 30px;
  width: 150px;
  border-radius: 40px;
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
  flex-direction: row;
  width: 320px;
  margin: 0 auto;
`
const ExtraInformationRegister = styled.b`
  margin-top: 100px;
  margin-left: 2px;
  color: #4f4f4f;
  :hover {
    cursor: pointer;
  }
`
const RememberMe = styled.label`
  font-size: 12px;
  color: #6b6b6b;
  margin-right: 125px;
  margin-left: 70px;
`
const ForgotPassword = styled.b`
  font-size: 12px;
  color: #4f4f4f;
  :hover {
    cursor: pointer;
  }
`
const DoesntHaveAccount = styled.p`
  margin-top: 0px;
  margin-bottom: 0px;
`

const Login = () => {
  return (
    <Container>
      <HeaderLoginAndRegister />

      <ContainerForm action="">
        <TitleRegister>Sign In To Trivjoy</TitleRegister>

        <StyledInputForm type="email" placeholder="Email" required />
        <StyledInputForm type="password" placeholder="password" required />
        <div>
          <RememberMe>
            <input type="checkbox" /> Remember Me
          </RememberMe>
          <ForgotPassword>Forgot your password?</ForgotPassword>
        </div>

        <StyledButtonLogin type="submit" value="Login" />
      </ContainerForm>
      <ExtraInformation>
        <DoesntHaveAccount>Does not have an account yet?</DoesntHaveAccount>
        <Link to="/register">
          <ExtraInformationRegister>Register here</ExtraInformationRegister>
        </Link>
      </ExtraInformation>
    </Container>
  )
}

export default Login
