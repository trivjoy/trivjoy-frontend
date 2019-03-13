import React from 'react'
import styled from 'styled-components'
import { createTrips } from '../redux/actions/create-trips'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  margin-top: 10px;
`

const DiscriptionStyle = styled.div`
  display: flex;
  flex-direction: column;
`
const UploadButtonStyled = styled.button`
  color: white;
  text-align: center;
  margin-bottom: 10px;
  margin-top: 5px;
  height: 25px;
  width: 100px;
  border-radius: 4px;
  border: 1px solid #333333;
  font-size: 14px;
  font-family: 'Fira Sans', sans-serif;
  background-color: #5bb9fd;
  :hover {
    cursor: pointer;
    background-color: #68bffd;
  }
`

const UploadLabel = styled.b``

const TextAreaStyle = styled.textarea`
  width: 500px;
  margin-bottom: 15px;
  margin-top: 8px;
`
const TitleForm = styled.div`
  text-align: center;
`
const CreatePostStyle = styled.div`
  text-align: center;
`
const LabelInput = styled.b`
  margin-right: 10px;
  height: 20px;
`
const LabelTo = styled.b`
  margin-left: 5px;
  margin-right: 5px;
`
const TripTitleLabel = styled.input`
  width: 421px;
`
const TourDetinationLabel = styled.input`
  width: 365px;
`
const DateLabel = styled.input`
  width: 211px;
`
const BudgetLabel = styled.input`
  width: 395px;
`
const MarginInput = styled.div`
  margin-bottom: 8px;
`

const ButtonCreatePost = styled.input`
  margin-bottom: 20px;
  height: 30px;
  width: 150px;
  border-radius: 4px;
  border: 1px solid #333333;
  font-size: 14px;
  font-family: 'Fira Sans', sans-serif;
  background-color: #5bb9fd;
  :hover {
    cursor: pointer;
    background-color: #68bffd;
  }
`

class CreateTrip extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      tourDestination: 'Loc A, Loc B, Loc C',
      dateFrom: '',
      dateTo: '',
      budget: '700000',
      image: '/assets/images/first-section-1.jpg',
      description:
        'I just want going to mount bromo and enjoy the vacation, so i want to invite you to join my journey and create a moment together.  I just want going to mount bromo and enjoy the vacation, so i want to invite you to join my journey and create a moment together. I just want going to mount bromo and enjoy the vacation, so i want to invite you to join my journey and create a moment together. I just want going to mount bromo and enjoy the vacation, so i want to invite you to join my journey and create a moment together. ',
      peopleMin: '2',
      peopleMax: '10'
    }
  }

  clearInputText = () => {
    this.setState({
      title: '',
      tourDestination: '',
      dateFrom: '',
      dateTo: '',
      budget: '',
      image: '',
      description: '',
      peopleMin: '',
      peopleMax: ''
    })
  }

  onSubmit = async () => {
    this.props.dispatch(createTrips(this.state))

    this.clearInputText()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <form
            onSubmit={event => {
              event.preventDefault()
              this.onSubmit()
            }}
          >
            <TitleForm>
              <h2>Post Your Trip!</h2>
            </TitleForm>

            <MarginInput>
              <LabelInput>Trip Title:</LabelInput>
              <TripTitleLabel
                onChange={this.handleChange}
                name="title"
                type="text"
                placeholder="Trip to..."
                value={this.state.title}
                required
              />
            </MarginInput>
            <MarginInput>
              <LabelInput>Tour Destination:</LabelInput>
              <TourDetinationLabel
                onChange={this.handleChange}
                name="tourDestination"
                type="text"
                placeholder="Location A, Location B, Location C,..."
                value={this.state.tourDestination}
                required
              />
            </MarginInput>
            <MarginInput>
              <LabelInput>Date:</LabelInput>
              <DateLabel
                type="date"
                name="dateFrom"
                onChange={event => {
                  this.setState({
                    dateFrom: event.target.value
                  })
                }}
                value={this.state.dateFrom}
                required
              />
              <LabelTo>To</LabelTo>
              <DateLabel
                type="date"
                name="dateTo"
                onChange={event => {
                  this.setState({
                    dateTo: event.target.value
                  })
                }}
                value={this.state.dateTo}
                required
              />
            </MarginInput>
            <MarginInput>
              <LabelInput>Budget (IDR):</LabelInput>
              <BudgetLabel
                type="text"
                name="budget"
                onChange={this.handleChange}
                placeholder="700000"
                value={this.state.budget}
                required
              />
            </MarginInput>
            <UploadStyle>
              <UploadLabel>Upload Travel Destination Images</UploadLabel>
              <MarginInput>
                <UploadButtonStyled>Pick Image</UploadButtonStyled>
              </MarginInput>
            </UploadStyle>
            <MarginInput>
              <LabelInput>People Can Join:</LabelInput>
              <input
                type="number"
                name="quantity"
                min="1"
                max="100"
                placeholder="Min"
                onChange={this.handleChange}
                value={this.state.peopleMin}
                required
              />
              <input
                type="number"
                name="quantity"
                min="1"
                max="100"
                placeholder="Max"
                onChange={this.handleChange}
                value={this.state.peopleMax}
              />
            </MarginInput>

            <DiscriptionStyle>
              <b>Discription of Your Trip:</b>
              <TextAreaStyle
                onChange={this.handleChange}
                name="description"
                cols="80"
                rows="10"
                value={this.state.description}
              />
            </DiscriptionStyle>
            <CreatePostStyle>
              <ButtonCreatePost type="submit" value="Create New Trip" />
            </CreatePostStyle>
          </form>
        </Content>
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    create_trips: state.create_trips
  }
}

export default connect(mapStateToProps)(CreateTrip)
