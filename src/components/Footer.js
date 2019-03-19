import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LogoFooterLeft = styled.img`
  height: 30px;
  width: 40px;
  margin: 0px 5px 0px 0px;
`
const LogoFooterRight = styled.img`
  height: 25px;
  width: 35px;
  margin: 8px 0px 0px 0px;
`

const LogoEmail = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin: 0px 10px 0px 5px;
`
const ContainerFooter = styled.div`
  background-color: #333131;
  display: flex;
  justify-content: space-between;
  max-height: 400px;
  color: white;
  width: 100%;
  @media all and (max-width: 780px) {
    flex-direction: column;
  }
`
const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 30px 30px 0px;
  font-size: 20px;
  a {
    text-decoration: none;
    color: white;
  }
  @media all and (max-width: 780px) {
    margin-top: 0px;
    margin-left: 30px;
  }
`

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px 30px 30px;
  font-size: 15px;
  @media all and (max-width: 780px) {
    border-bottom: 1px solid white;
    height: 150px;
  }
`
const Paragraph = styled.p`
  margin: 0px auto;
`
const LogoStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`

const CopyrightStyle = styled.b`
  margin: 15px 0px 0px 55px;
`
const FooterBottom = styled.div`
  background-color: #333131;
  height: 60px;
  width: 100%;
  color: white;
`
const TrivjoyCopyright = styled.b`
  color: #5bb9fd;
`
const SocialLogoStyle = styled.div`
  width: 105px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Footer = () => {
  return (
    <Container>
      <ContainerFooter>
        <FooterLeft>
          <LogoStyle>
            <LogoFooterLeft
              src="/assets/logo/location-logo-footer.svg"
              alt=""
            />
            <div>
              <Paragraph>
                WIMO, Jl. Kemang I No.7, RT.12/RW.1, Bangka, Mampang Prapatan,{' '}
              </Paragraph>
              <b>South Jakarta City, Jakarta 12730</b>
            </div>
          </LogoStyle>
          <LogoStyle>
            <LogoFooterLeft
              src="/assets/logo/telephone-logo-footer.svg"
              alt=""
            />
            <b>+62 80 1234 5678</b>
          </LogoStyle>
          <LogoStyle>
            <LogoEmail src="/assets/logo/email-logo-footer.svg" alt="" />
            <b>trivjoy.team@gmail.com</b>
          </LogoStyle>
        </FooterLeft>
        <FooterRight>
          <Link to="/about">
            <b>About Us</b>
          </Link>
          <Link to="/safety">
            <b>Safety</b>
          </Link>
          <Link to="/help">
            <b>Help</b>
          </Link>
          <SocialLogoStyle>
            <LogoFooterRight
              src="/assets/logo/facebook-logo-footer.svg"
              alt=""
            />
            <LogoFooterRight
              src="/assets/logo/twitter-logo-footer.svg"
              alt=""
            />
            <LogoFooterRight
              src="/assets/logo/instagram-logo-footer.svg"
              alt=""
            />
          </SocialLogoStyle>
        </FooterRight>
      </ContainerFooter>
      <FooterBottom>
        <CopyrightStyle>
          Copyright <TrivjoyCopyright> Trivjoy </TrivjoyCopyright> 2019. All
          right reserved.
        </CopyrightStyle>
      </FooterBottom>
    </Container>
  )
}

export default Footer
