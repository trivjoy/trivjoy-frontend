import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const UploadStyle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const DiscriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
`
const UploadButtonStyled = styled.button`
  text-align: center;
  width: 100px;
`
const UploadLabel = styled.b``

const TextAreaStyle = styled.textarea`
  width: 600px;
`
const TitleForm = styled.div`
  text-align: center;
`
const CreatePostStyle = styled.div`
  text-align: center;
`
const LabelInput = styled.b`
  margin-right: 10px;
`

const CreatePost = () => {
  return (
    <Container>
      <Header />
      <Content>
        <form action="">
          <TitleForm>
            <h2>Post Your Trip!</h2>
          </TitleForm>

          <div>
            <LabelInput>Trip Title:</LabelInput>
            <input type="text" placeholder="Trip to..." required />
          </div>
          <div>
            <LabelInput>Tour Destination:</LabelInput>
            <input
              type="text"
              placeholder="Location A, Location B, Location C,..."
              required
            />
          </div>
          <div>
            <LabelInput>Date:</LabelInput>
            <input type="date" value="today" required />
            <LabelInput>To</LabelInput>
            <input type="date" value="today" required />
          </div>
          <div>
            <LabelInput>Budget (IDR):</LabelInput>
            <input type="700000" placeholder="Telephone Number" required />
          </div>
          <div>
            <LabelInput>People Can Join:</LabelInput>
            <input
              type="number"
              name="quantity"
              min="1"
              max="100"
              placeholder="Min"
              required
            />
            <input
              type="number"
              name="quantity"
              min="1"
              max="100"
              placeholder="Max"
            />
          </div>
          <UploadStyle>
            <UploadLabel>Upload Travel Destination Images</UploadLabel>
            <div>
              <UploadButtonStyled>Pick Image</UploadButtonStyled>
            </div>
          </UploadStyle>
          <DiscriptionStyle>
            <b>Discription of Your Trip:</b>
            <TextAreaStyle name="" id="" cols="80" rows="10" />
          </DiscriptionStyle>
          <CreatePostStyle>
            <input type="submit" value="Create New Trip" />
          </CreatePostStyle>
        </form>
      </Content>
      <Footer />
    </Container>
  )
}

export default CreatePost
