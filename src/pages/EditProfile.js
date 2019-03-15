import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { editProfile } from '../redux/actions/editProfile'
import { Link } from 'react-router-dom'

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const TopContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 0px 0px;
`
const TopLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 30px;
`
const TopRightContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`

const ManLogo = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 4px;
  border-radius: 5px;
`
const ProfileStyle = styled.strong`
  color: #5bb9fd;
  font-size: 23px;
  text-shadow: 1px 2px 4px #b7afaf;
`
const ParagraphStyle = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  border-bottom: 2px solid black;
  width: 500px;
`

const ChangeImageStyle = styled.b`
  color: #d71414;
  text-shadow: 1px 2px 4px #b7afaf;

  :hover {
    cursor: pointer;
  }
`
const HeaderTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
`

const ButtonEdit = styled.button`
  border-color: #6faf08;
  font-size: 15px;
  height: 26px;
  width: 70px;
  color: #5bb9fd;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background-color: #fbfbfb;
  }
`

const InputName = styled.input`
  width: 250px;
  border: 0;
  font-weight: bold;
  font-weight: 900;
  font-size: 15px;
  :focus {
    outline: none;
  }
`

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      name: `${this.props.user.name}`,
      email: `${this.props.user.email}`,
      phone: `${this.props.user.phone}`,
      age: `${this.props.user.age}`,
      gender: `${this.props.user.gender}`,
      address: `${this.props.user.address}`,
      city: `${this.props.user.city}`,
      country: `${this.props.user.country}`,
      isSubmitted: false
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
      isSubmitted: true
    })
  }

  onSubmit = async () => {
    const { isSubmitted, ...data } = this.state

    const result = await this.props.dispatch(editProfile(data))
    console.log(result)

    if (!this.props.error) {
      this.clearInputText()
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <TopContent>
            <TopLeftContent>
              <div>
                <ManLogo src="/assets/logo/man.svg" alt="" />
              </div>
              <ChangeImageStyle>Change Images</ChangeImageStyle>
            </TopLeftContent>
            <TopRightContent>
              <HeaderTopContent>
                <ProfileStyle>Profile</ProfileStyle>
                <ButtonEdit>
                  <Link to="/profile">
                    <b>Update</b>
                  </Link>
                </ButtonEdit>
              </HeaderTopContent>

              <form onSubmit={this.onSubmit}>
                <div>
                  <ParagraphStyle>
                    <b>
                      FullName:{' '}
                      <InputName
                        onChange={this.handleChange}
                        name="name"
                        type="text"
                        placeholder={this.props.user.name}
                        value={this.state.name}
                      />
                    </b>
                  </ParagraphStyle>
                  <ParagraphStyle>
                    <b>
                      Email:{' '}
                      <InputName
                        onChange={this.handleChange}
                        name="email"
                        type="text"
                        placeholder={this.props.user.email}
                        value={this.state.email}
                      />
                    </b>
                  </ParagraphStyle>
                  <ParagraphStyle>
                    <b>
                      Gender:{' '}
                      <InputName
                        onChange={this.handleChange}
                        name="gender"
                        type="text"
                        value={this.state.gender}
                        placeholder={this.props.user.gender}
                      />
                    </b>
                  </ParagraphStyle>
                  <ParagraphStyle>
                    <b>
                      Age:{' '}
                      <InputName
                        onChange={this.handleChange}
                        name="age"
                        type="text"
                        placeholder={this.props.user.age}
                        value={this.state.age}
                      />
                    </b>
                  </ParagraphStyle>
                  <ParagraphStyle>
                    <b>
                      Telephone Number:{' '}
                      <InputName
                        onChange={this.handleChange}
                        name="phone"
                        type="text"
                        placeholder={this.props.user.phone}
                        value={this.state.phone}
                      />
                    </b>
                  </ParagraphStyle>
                  <ParagraphStyle>
                    <b>
                      City:{' '}
                      <InputName
                        type="text"
                        onChange={this.handleChange}
                        name="city"
                        placeholder={this.props.user.city}
                        value={this.state.city}
                      />
                    </b>
                  </ParagraphStyle>
                  <ParagraphStyle>
                    <b>
                      Address:{' '}
                      <InputName
                        type="text"
                        onChange={this.handleChange}
                        name="address"
                        placeholder={this.props.user.address}
                        value={this.state.address}
                      />
                    </b>
                  </ParagraphStyle>
                </div>
              </form>
            </TopRightContent>
          </TopContent>
        </Content>
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data
  }
}

export default connect(mapStateToProps)(Profile)
