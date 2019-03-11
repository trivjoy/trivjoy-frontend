import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import HeaderLoginAndRegister from '../components/HeaderLoginAndRegister'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { register } from '../redux/actions/register'

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
  margin-bottom: 20px;
`
const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
`

const Label = styled.label`
  margin-top: 5px;
  margin-right: 5px;
  margin-left: 5px;
  font-size: 14px;
`

const StyledInputForm = styled.input`
  margin-top: 5px;
  padding-left: 10px;
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
const ExtraInformationBottom = styled.p`
  margin-top: 10px;
  margin-left: 158px;
`
const StyledAgeForm = styled.input`
  margin-top: 16px;
  padding-left: 10px;
  width: 40px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #333333;
`
const GenderStyle = styled.select`
  text-align: center;
  height: 35px;
  width: 120px;
  margin-left: 16px;
  margin-right: 16px;
  border: 1px solid #333333;
`

const StyledCityForm = styled.input`
  margin-top: 10px;
  padding-left: 10px;
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
      gender: '',
      address: '',
      city: '',
      country: '',
      password: ''
    }
  }

  clearInputText = () => {
    this.setState({
      name: '',
      email: '',
      phone: '',
      age: '',
      gender: '',
      address: '',
      city: '',
      country: '',
      password: ''
    })
  }

  onSubmit = async () => {
    this.props.dispatch(register(this.state))

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
          <TitleRegister>Join us as a Trivjoy member!</TitleRegister>

          <Label>Full name:</Label>
          <StyledInputForm
            onChange={event => {
              this.setState({
                name: event.target.value
              })
            }}
            type="text"
            placeholder="Full Name"
            value={this.state.name}
            required
          />

          <Label>Email address:</Label>
          <StyledInputForm
            onChange={event => {
              this.setState({
                email: event.target.value
              })
            }}
            type="email"
            placeholder="yourname@example.com"
            value={this.state.email}
            required
          />

          <Label>Password:</Label>
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

          <Label>Phone number:</Label>
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
            <Label>Age:</Label>
            <StyledAgeForm
              onChange={event => {
                this.setState({
                  age: event.target.value
                })
              }}
              type="number"
              placeholder="18"
              value={this.state.age}
              required
            />
            <Label>Gender:</Label>
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
          </div>
          <Label>Street address:</Label>
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
          <Label>City:</Label>
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
          <Label>Country:</Label>
          <StyledCityForm
            onChange={event => {
              this.setState({
                country: event.target.value
              })
            }}
            type="text"
            placeholder="Country"
            value={this.state.country}
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
          <ExtraInformationBottom>
            <Link to="/login">
              <b>Already a member? Log in</b>
            </Link>
          </ExtraInformationBottom>
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
