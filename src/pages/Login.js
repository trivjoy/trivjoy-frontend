import React from 'react'
import HeaderLoginAndRegister from '../components/HeaderLoginAndRegister'
import styled from 'styled-components'

const Container = styled.div`
  background-image: url('/assets/images/login-background.png');
  height: 650px;
`

const Login = () => {
  return (
    <Container>
      <HeaderLoginAndRegister />
    </Container>
  )
}

export default Login
