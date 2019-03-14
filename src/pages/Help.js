import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const StyledH1 = styled.h1`
  text-align: center;
  font-size: 30px;
`
const StyledHelpParagraph = styled.p`
  justify-content: center;
  text-align: justify;
  font-size: 15px;
  flex-direction: column;
  padding: 0 100px;
  text-rendering: auto;
`
const InformationColumn = styled.div`
  font-size: 15px;
  width: 404px;
  height: 25px;
  left: 40px;
  top: 303px;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
`
const Help = () => {
  return (
    <Container>
      <Header />
      <Content>
        <InformationColumn>
          <h1>Information</h1>
          <p>The Information of safety guidelines</p>
        </InformationColumn>
        <div>
          <StyledH1>Help</StyledH1>
          <StyledHelpParagraph>
            <p>
              We take safety at Trivjoy seriously and we make every effort to
              secure your account information. Trivjoy also closely reviews
              every new account to ensure there is no inappropriate content and
              that nobody violates our terms and conditions. If you encounter
              any inappropriate content or abuse, please contact us at
              support@trivjoy.com Trivjoy envisions to create a friendly
              community of travelers, however we strongly encourage you to use
              your instincts and common sense when meeting new travelers.
            </p>
            <p>
              Proceed carefully when getting to know new travelers One can be
              never careful enough and it is especially true when it comes to
              meeting people online. If anyone seems suspicious for any reason,
              take people online. If anyone seems suspicious for any reason,
              take safety measures when exchanging any information. Suspicious
              behavior can be following: Asking for money or your financial
              information Quickly asking for your address or private information
              Asking you to click on suspicious links to third-party websites
              Using vulgar language This list is only demonstrative, if you feel
              uncomfortable or unsafe for any reason, refrain from any further
              communication and please contact as at support@trivjoy.com Take
              safety measures when meeting your travel buddy Even though it may
              seem that you know your travel buddy quite well through online
              conversation, you never know who you are actually talking to till
              you meet your travel buddy personally.
            </p>
            <p>
              We recommend you take the following measures to ensure your
              safety: Always inform someone when meeting a potential travel
              buddy and mention your meet-up location. Always meet in a public
              places and avoid less populated or private areas. If your travel
              buddy refuses to meet you at a public place, cancel your meet-up
              and re-think further communication. If you feel uncomfortable
              about your new travel buddy, don’t worry about seeming rude and
              try to find a new one!
            </p>
          </StyledHelpParagraph>
        </div>
      </Content>
      <Footer />
    </Container>
  )
}

export default Help
