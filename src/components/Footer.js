import React from 'react'
import styled from 'styled-components'

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
  height: 200px;
  color: white;
  width: 100%;
`
const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px 30px 500px;
  font-size: 20px;
`

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px 30px 50px;
  font-size: 15px;
`
const Paragraph = styled.p`
  margin: 0px auto;
`
const LogoStyle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 50x 0px;
`

const CopyrightStyle = styled.b`
  margin: 15px 0px 0px 44px;
`
const TrivjoyCopyright = styled.b`
  color: #5bb9fd;
`

const Footer = () => {
  return (
    <ContainerFooter>
      <FooterLeft>
        <LogoStyle>
          <LogoFooterLeft src="/assets/logo/location-logo-footer.svg" alt="" />
          <div>
            <Paragraph>
              WIMO, Jl. Kemang I No.7, RT.12/RW.1, Bangka, Mampang Prapatan,{' '}
            </Paragraph>
            <b>South Jakarta City, Jakarta 12730</b>
          </div>
        </LogoStyle>
        <LogoStyle>
          <LogoFooterLeft src="/assets/logo/telephone-logo-footer.svg" alt="" />
          <b>080123456789</b>
        </LogoStyle>
        <LogoStyle>
          <LogoEmail src="/assets/logo/email-logo-footer.svg" alt="" />
          <b>support@trivjoy.com</b>
        </LogoStyle>
        <CopyrightStyle>
          Copyright <TrivjoyCopyright> Trivjoy </TrivjoyCopyright> 2019. All
          right reserved.
        </CopyrightStyle>
      </FooterLeft>
      <FooterRight>
        <b>About Us</b> <b>Safety</b> <b>Help</b>
        <div>
          <LogoFooterRight src="/assets/logo/facebook-logo-footer.svg" alt="" />
          <LogoFooterRight src="/assets/logo/twitter-logo-footer.svg" alt="" />
          <LogoFooterRight
            src="/assets/logo/instagram-logo-footer.svg"
            alt=""
          />
        </div>
      </FooterRight>
    </ContainerFooter>
  )
}

export default Footer
