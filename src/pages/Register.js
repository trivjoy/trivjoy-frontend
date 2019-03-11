import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderLoginAndRegister from '../components/HeaderLoginAndRegister'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { insertUser } from '../redux/action/insertUser'

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

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: 'Male',
      city: '',
      address: '',
      password: ''
    }
  }

  clearInputText = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: 'Male',
      city: '',
      address: '',
      password: ''
    })
  }

  onSubmit = async () => {
    this.props.dispatch(insertUser(this.state))

    this.clearInputText()
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <HeaderLoginAndRegister />

        <ContainerForm
          onSubmit={event => {
            event.preventDefault()
            this.onSubmit()
          }}
        >
          <TitleRegister>Join Us as a Trivjoy Member!</TitleRegister>
          <StyledInputForm
            onChange={event => {
              this.setState({
                name: event.target.value
              })
            }}
            type="text"
            placeholder="FullName"
            value={this.state.name}
            required
          />
          <StyledInputForm
            onChange={event => {
              this.setState({
                email: event.target.value
              })
            }}
            type="email"
            placeholder="Email"
            value={this.state.email}
            required
          />
          <StyledInputForm
            onChange={event => {
              this.setState({
                phone: event.target.value
              })
            }}
            type="tel"
            placeholder="Telephone Number"
            value={this.state.phone}
            required
          />
          <div>
            <StyledAgeForm
              onChange={event => {
                this.setState({
                  age: event.target.value
                })
              }}
              type="number"
              placeholder="Age"
              value={this.state.age}
              required
            />
            <GenderStyle
              onChange={event => {
                this.setState({
                  gender: event.target.value
                })
              }}
              value={this.state.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </GenderStyle>
            <StyledCityForm
              onChange={event => {
                this.setState({
                  city: event.target.value
                })
              }}
              type="text"
              placeholder="City"
              value={this.state.city}
              required
            />
          </div>
          <StyledInputForm
            onChange={event => {
              this.setState({
                address: event.target.value
              })
            }}
            type="text"
            placeholder="Address"
            value={this.state.address}
            required
          />
          <StyledInputForm
            onChange={event => {
              this.setState({
                password: event.target.value
              })
            }}
            type="password"
            placeholder="password"
            value={this.state.password}
            required
          />
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
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Register)
