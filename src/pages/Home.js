import React from 'react'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import styled from 'styled-components'

const HomeContent = styled.div``

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <HomeContent />
      <Footer />
    </div>
  )
}

export default Home
