import React from 'react'
import { Link } from 'react-router-dom'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import styled from 'styled-components'

const HomeContent = styled.div`
  margin: 0px 120px;
`
const LogoStyle = styled.img`
  height: 38px;
  width: 35px;
`
const YouShouldGoTravelling = styled.b`
  display: flex;
  font-size: 25px;
  margin: 0px auto;
`
const CardHome = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 20px 20px 20px 20px;
  display: flex;
  justify-content: center;
  text-align: left;
  width: 306px;
  height: 230px;
  border-radius: 4px;
  border: 1px grey;
  background-color: white;
  color: black;
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
  flex-wrap: wrap;
`
const SecondStyle = styled.b`
  margin: 0px 0px 0px 20px;
  font-size: 20px;
  color: #2f80ed;
`
const FirstandThirdStyle = styled.b`
  font-size: 20px;
  color: #2f80ed;
`

const FirstContent = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  width: 1000px;
`
const ThirdContent = styled.div`
  margin: 20px 0px 40px 20px;
  width: 1000px;
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

const ParagraphCard = styled.p`
  margin: 10px auto;
`

const LogoThirdSection = styled.img`
  height: 70px;
  width: 70px;
  margin: 10px auto;
`
const NextLogo = styled.img`
  height: 40px;
  width: 40px;
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

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <HomeContent>
        <FirstContent>
          <FirstandThirdStyle>First,</FirstandThirdStyle>
          <ParagraphCard>
            <b>Why You Should Go To Travelling?</b>
          </ParagraphCard>

          <FirstDiscribeContent>
            <YouShouldGoTravelling>
              <LogoStyle src="/assets/logo/checklist-home.png" alt="" />
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
        <div>
          <SecondStyle>Second,</SecondStyle>
          <CardHomeContainer>
            <CardHome>
              <CardDetailStarter>
                WHY YOU SHOULD JOIN WITH US AND MAKE YOUR TRAVELING UNFORGETABLE
              </CardDetailStarter>
            </CardHome>
            <CardHome>
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
            </CardHome>
            <CardHome>
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
            </CardHome>
            <CardHome>
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
            </CardHome>
            <CardHome>
              <CardDetails>
                <NumberCard>4</NumberCard>
                <b> Learning</b>
                <ParagraphCard>
                  Learning is a strong reason why people love to travel. They
                  want to experience something unfamiliar and leave with new
                  skills or knowledge.
                </ParagraphCard>
              </CardDetails>
            </CardHome>
            <CardHome>
              <CardDetails>
                <NumberCard>5</NumberCard>
                <b> Appreciating your life</b>
                <ParagraphCard>
                  When you’re mired in your daily life, it’s easy to lose sight
                  of what you have. Your eyes aren’t open to what’s really
                  special about your home
                </ParagraphCard>
              </CardDetails>
            </CardHome>
          </CardHomeContainer>
        </div>
        <ThirdContent>
          <FirstandThirdStyle>Third,</FirstandThirdStyle>
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
    </div>
  )
}

export default Home
