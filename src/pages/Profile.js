import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

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

const BottomContent = styled.div`
  margin: 30px 0px 50px 0px;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

const DiscribeAboutMe = styled.p`
  width: 718px;
  margin: 0 auto;
  font-size: 14px;
`
const AboutMe = styled.b`
  width: 718px;
  margin-bottom: 5px;
`

const Register = () => {
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
                <b>Edit</b>
              </ButtonEdit>
            </HeaderTopContent>

            <div>
              <ParagraphStyle>
                <b>Full Name:</b>
              </ParagraphStyle>
              <ParagraphStyle>
                <b>Email:</b>
              </ParagraphStyle>
              <ParagraphStyle>
                <b>Gender:</b>
              </ParagraphStyle>
              <ParagraphStyle>
                <b>Age:</b>
              </ParagraphStyle>
              <ParagraphStyle>
                <b>Telephone Number:</b>
              </ParagraphStyle>
              <ParagraphStyle>
                <b>City:</b>
              </ParagraphStyle>
              <ParagraphStyle>
                <b>Address:</b>
              </ParagraphStyle>
            </div>
          </TopRightContent>
        </TopContent>
        <BottomContent>
          <Div>
            <AboutMe>About Me</AboutMe>
          </Div>
          <Div>
            <DiscribeAboutMe>
              Hallo, My Name is TrivJoy. Let’s trip with me, Buddy!
            </DiscribeAboutMe>
          </Div>
        </BottomContent>
      </Content>
      <Footer />
    </Container>
  )
}

export default Register
