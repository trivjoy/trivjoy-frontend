import React from 'react'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import styled from 'styled-components'

const HomeContent = styled.div``
const LogoStyle = styled.img`
  height: 38px;
  width: 38px;
`
const YouShouldGoTravelling = styled.p`
  display: flex;
  font-size: 25px;
  margin: 0 auto;
`
const Home = () => {
  return (
    <div>
      <HeaderHome />
      <HomeContent>
        <div>
          <p>First,</p>
          <p>Why You Should Go To Travelling?</p>

          <div>
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
          </div>
        </div>
        <div>
          <p>Second,</p>
        </div>
      </HomeContent>
      <Footer />
    </div>
  )
}

export default Home
