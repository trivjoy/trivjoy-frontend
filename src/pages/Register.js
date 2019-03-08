import React from 'react'
import { Link } from 'react-router-dom'
import HeaderLoginAndRegister from '../components/HeaderLoginAndRegister'
import styled from 'styled-components'

const Container = styled.div`
  background-image: url('/assets/images/register-background.png');
  height: 650px;
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
const StyledButtonForm = styled.input`
  margin-top: 8px;
  height: 25px;
  border-radius: 2px;
  border: 1px solid #333333;
`

const GenderStyle = styled.select`
  height: 28px;
  border: 1px solid #333333;
`
const ExtraInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`

const Register = () => {
  return (
    <Container>
      <HeaderLoginAndRegister />

      <ContainerForm action="">
        <TitleRegister>Join Us as a Trivjoy Member!</TitleRegister>
        <StyledButtonForm type="text" placeholder="FullName" required />
        <StyledButtonForm type="email" placeholder="Email" required />
        <StyledButtonForm type="tel" placeholder="Telephone Number" required />
        <div>
          <StyledButtonForm type="number" placeholder="Age" required />
          <GenderStyle>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </GenderStyle>
          <StyledButtonForm type="text" placeholder="City" required />
        </div>
        <StyledButtonForm type="text" placeholder="Address" required />
        <StyledButtonForm type="password" placeholder="password" required />
        <input type="submit" value="Register" />
      </ContainerForm>
      <ExtraInformation>
        <p>
          By signing up, you agree to Trivjoy's terms of service and privacy
          policy.
        </p>
        <p>We will not share your personal info with anyone.</p>
        <Link to="/login">
          <span scheme="light">
            <b> Already a member? Log in </b>
          </span>
        </Link>
      </ExtraInformation>
    </Container>
  )
}

export default Register
