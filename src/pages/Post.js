import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Content = styled.div`
  flex: 1;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`
const ButtonStyle = styled.button`
  height: 30px;
  font-size: 15px;
  background-color: #5bb9fd;
  color: white;
  border-radius: 4px;
  margin: 20px 20px 20px 0px;
  :hover {
    cursor: pointer;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`

const Post = () => {
  return (
    <Container>
      <Header />
      <Content>
        <ButtonPosition>
          <Link to="/create-post">
            <ButtonStyle>
              <b>Create Post</b>
            </ButtonStyle>
          </Link>
        </ButtonPosition>
        <div />
      </Content>
      <Footer />
    </Container>
  )
}

export default Post
