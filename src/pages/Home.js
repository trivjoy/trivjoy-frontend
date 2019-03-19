import React from 'react'
import { Link } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import styled from 'styled-components'

const HomeContent = styled.div`
  margin: 0 auto;
`
const LogoStyle = styled.img`
  height: 38px;
  width: 35px;
`
const YouShouldGoTravelling = styled.b`
  display: flex;
  font-size: 25px;
  margin: 0px auto;
  @media all and (max-width: 1200px) {
    font-size: 25px;
  }
  @media all and (max-width: 992px) {
    font-size: 23px;
  }
  @media all and (max-width: 768px) {
    font-size: 21px;
  }
  @media all and (max-width: 600px) {
    font-size: 18px;
  }
  @media all and (max-width: 400px) {
    font-size: 16px;
  }
`
const CardHome = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 20px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 306px;
  height: 230px;
  border-radius: 4px;
  border: 1px grey;
  background-color: #5bb9fd;
  color: white;
  @media all and (max-width: 1020px) {
    width: 360px;
    height: 230px;
    margin-left: 0px;
  }
  @media all and (max-width: 780px) {
    width: 600px;
    height: 230px;
    margin-right: 0px;
  }
  @media all and (max-width: 620px) {
    width: 380px;
    height: 230px;
    margin-right: 0px;
  }
`
const CardSection1 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 20px 20px 20px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 306px;
  height: 230px;
  border-radius: 4px;
  border: 1px grey;
  color: white;
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('/assets/images/first-section-1.jpg');
  @media all and (max-width: 1020px) {
    width: 360px;
    height: 230px;
    margin-right: 0px;
  }
  @media all and (max-width: 780px) {
    width: 600px;
    height: 230px;
    margin-left: 0px;
  }
  @media all and (max-width: 620px) {
    width: 380px;
    height: 230px;
    margin-left: 0px;
  }
`
const CardSection2 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 0px 20px 20px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 306px;
  height: 230px;
  border-radius: 4px;
  border: 1px grey;
  color: white;
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('/assets/images/first-section-2.jpg');
  @media all and (max-width: 1020px) {
    width: 360px;
    height: 230px;
    margin: 20px 20px 20px 0px;
  }
  @media all and (max-width: 780px) {
    width: 600px;
    height: 230px;
    margin-right: 0px;
  }
  @media all and (max-width: 620px) {
    width: 380px;
    height: 230px;
    margin-right: 0px;
  }
`

const CardSection3 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 20px 20px 0px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 306px;
  height: 230px;
  border-radius: 4px;
  border: 1px grey;
  color: white;
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('/assets/images/first-section-3.jpg');
  @media all and (max-width: 1020px) {
    width: 360px;
    height: 230px;
    margin: 20px 0px 20px 20px;
  }
  @media all and (max-width: 780px) {
    width: 600px;
    height: 230px;
    margin: 20px 0px;
  }
  @media all and (max-width: 620px) {
    width: 380px;
    height: 230px;
    margin: 20px 0px;
  }
`

const CardSection4 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 20px 20px 20px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 306px;
  height: 230px;
  border-radius: 4px;
  border: 1px grey;
  color: white;
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('/assets/images/first-section-4.jpg');
  @media all and (max-width: 1020px) {
    width: 360px;
    height: 230px;
    margin: 20px 20px 20px 0px;
  }
  @media all and (max-width: 780px) {
    width: 600px;
    height: 230px;
    margin: 20px 0px;
  }
  @media all and (max-width: 620px) {
    width: 380px;
    height: 230px;
    margin: 20px 0px;
  }
`

const CardSection5 = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 0px 20px 20px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 306px;
  height: 230px;
  border-radius: 4px;
  border: 1px grey;
  color: white;
  background-image: linear-gradient(
      0deg,
      rgba(51, 51, 51, 0.8),
      rgba(51, 51, 51, 0.8)
    ),
    url('/assets/images/first-section-5.jpg');
  @media all and (max-width: 1020px) {
    width: 360px;
    height: 230px;
  }
  @media all and (max-width: 780px) {
    width: 600px;
    height: 230px;
    margin: 20px 0px;
  }
  @media all and (max-width: 620px) {
    width: 380px;
    height: 230px;
    margin: 20px 0px;
  }
`

const CardDetailStarter = styled.b`
  margin: 40px 40px;
  font-size: 25px;
`
const CardDetails = styled.div`
  margin: 10px 20px;
  text-align: center;
`
const CardHomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media all and (max-width: 1020px) {
    width: 760px;
    margin: 0 auto;
  }
  @media all and (max-width: 780px) {
    width: 600px;
    margin: 0 auto;
  }
  @media all and (max-width: 620px) {
    width: 380px;
    margin: 0 auto;
  }
`

const FirstSecondThirdStyle = styled.b`
  font-size: 20px;
  color: #2f80ed;
`

const FirstContent = styled.div`
  margin: 0 auto;
  margin-top: 40px;
  max-width: 1000px;
  @media all and (max-width: 1020px) {
    margin: 20px 10px 0px 10px;
  }
`
const SecondContent = styled.div`
  margin: 0px auto;
  margin-top: 40px;
  max-width: 1000px;
  @media all and (max-width: 1020px) {
    margin: 20px 10px 0px 10px;
  }
`
const ThirdContent = styled.div`
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 40px;
  max-width: 1000px;
  @media all and (max-width: 1020px) {
    margin: 20px 10px 40px 10px;
  }
`
const CardThirdContent = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  a {
    text-decoration: none;
  }
`
const CardThirdContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const CardThirdDiscribe = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  text-align: center;
  font-size: 16px;
  @media all and (max-width: 992px) {
    font-size: 14px;
  }
  @media all and (max-width: 768px) {
    font-size: 12px;
  }
`

const FirstDiscribeContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 150px;
  border-radius: 4px;
  margin-bottom: 40px;
`
const NumberCard = styled.h3`
  margin: 0px 0px 20px 0px;
  width: 28px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5bb9fd;
  border-radius: 4px;
  color: white;
`

const ParagraphCard = styled.p``

const LogoThirdSection = styled.img`
  height: 70px;
  width: 70px;
  margin: 10px auto;
  @media all and (max-width: 992px) {
    height: 60px;
    width: 60px;
  }
  @media all and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
  @media all and (max-width: 600px) {
    height: 45px;
    width: 45px;
  }
`
const NextLogo = styled.img`
  height: 40px;
  width: 40px;
  @media all and (max-width: 992px) {
    height: 40px;
    width: 40px;
  }
  @media all and (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
  @media all and (max-width: 600px) {
    height: 25px;
    width: 25px;
  }
`
const LearnMorePosition = styled.div`
  display: flex;
  justify-content: center;
`
const LearnMoreButton = styled.button`
  font-size: 16px;
  height: 35px;
  width: 115px;
  background-color: #5bb9fd;
  color: white;
  border-radius: 4px;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`
const Container = styled.div`
  margin: 0px auto;
`

const Home = () => {
  return (
    <Container>
      <HeaderHome />
      <HomeContent>
        <FirstContent>
          <FirstSecondThirdStyle>First,</FirstSecondThirdStyle>
          <ParagraphCard>
            <b>Why You Should Travel?</b>
          </ParagraphCard>

          <FirstDiscribeContent>
            <YouShouldGoTravelling>
              <LogoStyle src="/assets/logo/checklist-home.png" />
              Doesn’t have friends for traveling?
            </YouShouldGoTravelling>

            <YouShouldGoTravelling>
              <LogoStyle src="/assets/logo/checklist-home.png" alt="" />
              Do you want to have new experiences?
            </YouShouldGoTravelling>

            <YouShouldGoTravelling>
              <LogoStyle src="/assets/logo/checklist-home.png" alt="" />
              Arranging trips, does it have to be so hectic?
            </YouShouldGoTravelling>
          </FirstDiscribeContent>
        </FirstContent>
        <SecondContent>
          <FirstSecondThirdStyle>Second,</FirstSecondThirdStyle>

          <CardHomeContainer>
            <CardHome>
              <CardDetailStarter>
                WHY YOU SHOULD JOIN WITH US AND MAKE YOUR TRAVELING UNFORGETABLE
              </CardDetailStarter>
            </CardHome>
            <CardSection1>
              <CardDetails>
                <NumberCard>1</NumberCard>
                <b> Getting in touch with yourself</b>{' '}
                <ParagraphCard>
                  Getting away from home gives you the opportunity to reflect on
                  your life. You have the needed time and space to let your mind
                  wander and take stock. Traveling is one of the best ways to
                  learn more about yourself.
                </ParagraphCard>
              </CardDetails>
            </CardSection1>
            <CardSection2>
              <CardDetails>
                <NumberCard>2</NumberCard>
                <b> Expanding your perspective</b>
                <ParagraphCard>
                  Another reason why people love to travel: it helps open your
                  mind. You realize that there’s no one way to live life.
                  Meeting people from other places will show you that your world
                  view isn’t the same as everyone else’s.
                </ParagraphCard>
              </CardDetails>
            </CardSection2>
            <CardSection3>
              <CardDetails>
                <NumberCard>3</NumberCard>
                <b> Challenging yourself</b>
                <ParagraphCard>
                  You might feel like you’re stuck in a rut in your daily life.
                  Or you’re yearning for something exciting and different.
                  You’re craving new experiences and new challenges. Travel is
                  the ideal place to test yourself.
                </ParagraphCard>
              </CardDetails>
            </CardSection3>
            <CardSection4>
              <CardDetails>
                <NumberCard>4</NumberCard>
                <b> Learning</b>
                <ParagraphCard>
                  Learning is a strong reason why people love to travel. They
                  want to experience something unfamiliar and leave with new
                  skills or knowledge.
                </ParagraphCard>
              </CardDetails>
            </CardSection4>
            <CardSection5>
              <CardDetails>
                <NumberCard>5</NumberCard>
                <b> Appreciating your life</b>
                <ParagraphCard>
                  When you’re mired in your daily life, it’s easy to lose sight
                  of what you have. Your eyes aren’t open to what’s really
                  special about your home
                </ParagraphCard>
              </CardDetails>
            </CardSection5>
          </CardHomeContainer>
        </SecondContent>
        <ThirdContent>
          <FirstSecondThirdStyle>Third,</FirstSecondThirdStyle>
          <ParagraphCard>
            <b>How Trivjoy Can Help You?</b>
          </ParagraphCard>
          <CardThirdContent>
            <CardThirdContainer>
              <CardThirdDiscribe>
                <LogoThirdSection src="/assets/logo/create-trip.png" alt="" />
                <b>Create a Trip</b>
              </CardThirdDiscribe>
              <NextLogo src="assets/logo/next-logo.svg" alt="" />
              <CardThirdDiscribe>
                <LogoThirdSection
                  src="/assets/logo/invite-travels.png"
                  alt=""
                />
                <b>Invite Travelers</b>
              </CardThirdDiscribe>
              <NextLogo src="assets/logo/next-logo.svg" alt="" />
              <CardThirdDiscribe>
                <LogoThirdSection
                  src="/assets/logo/find-travel-buddy-image.png"
                  alt=""
                />
                <b>Find a Travel</b>
                <b>Buddy</b>
              </CardThirdDiscribe>
            </CardThirdContainer>
            <LearnMorePosition>
              <Link to="/trips">
                <LearnMoreButton>
                  <b>Learn More</b>
                </LearnMoreButton>
              </Link>
            </LearnMorePosition>
          </CardThirdContent>
        </ThirdContent>
      </HomeContent>
      <Footer />
    </Container>
  )
}

export default Home
