import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import HeaderLoginAndRegister from '../components/HeaderLoginAndRegister'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'
import { login } from '../redux/actions/login'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url('/assets/images/login-background.png');
    height: 100%;
  }
`

const Container = styled.div`
  background-repeat: no-repeat;

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
  border: 3px solid #333333;
  outline: none;
  :focus {
    border-color: #68bffd;
  }
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
    border-radius: 40px;
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
const ValidationError = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: red;
`

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: 'saktyd@gmail.com',
      password: '12345'
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = async e => {
    e.preventDefault()
    await this.props.dispatch(login(this.state))
  }

  render() {
    // console.log(this.props.isAuthenticated)

    console.log(this.props.error)
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <Container>
        <GlobalStyle />

        <HeaderLoginAndRegister />

        <ContainerForm onSubmit={this.onSubmit}>
          <TitleRegister>Log In To Trivjoy</TitleRegister>
          {this.props.error ? (
            <ValidationError>{'Email and password failed!'}</ValidationError>
          ) : null}
          <StyledInputForm
            onChange={this.handleChange}
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            required
          />
          <StyledInputForm
            onChange={this.handleChange}
            name="password"
            type="password"
            placeholder="password"
            value={this.state.password}
            required
          />
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
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated,
    error: state.login.error
  }
}

export default connect(mapStateToProps)(Login)
