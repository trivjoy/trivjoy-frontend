import React from 'react'
import ReactFilestack from 'filestack-react'
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
  width: 600px;
  margin-bottom: 15px;
  margin-top: 8px;
  border: 2px solid #333333;
  border-radius: 5px;
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
  margin-left: 8px;
  margin-right: 5px;
`
const TripTitleLabel = styled.input`
  margin-top: 5px;
  margin-left: 60px;
  padding-left: 10px;
  height: 30px;
  border-radius: 5px;
  width: 450px;
  border: 2px solid #333333;
`
const TourDetinationLabel = styled.input`
  margin-top: 5px;
  margin-left: 5px;
  padding-left: 10px;
  height: 30px;
  border-radius: 5px;
  width: 450px;
  border: 2px solid #333333;
`
const DateLabel = styled.input`
  margin-top: 5px;
  margin-left: 90px;
  padding-left: 10px;
  height: 30px;
  border-radius: 5px;
  width: 200px;
  border: 2px solid #333333;
`
const DateLabelTo = styled.input`
  margin-top: 5px;
  margin-left: 9px;
  padding-left: 10px;
  height: 30px;
  border-radius: 5px;
  width: 200px;
  border: 2px solid #333333;
`
const LabelJoin = styled.input`
  margin-top: 5px;
  margin-left: 9px;
  padding-left: 10px;
  height: 30px;
  border-radius: 5px;
  width: 200px;
  border: 2px solid #333333;
`
const BudgetLabel = styled.input`
  margin-top: 5px;
  margin-left: 32px;
  padding-left: 10px;
  height: 30px;
  border-radius: 5px;
  width: 453px;
  border: 2px solid #333333;
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
const filestackApiKey = process.env.REACT_APP_FILESTACK_API_KEY || false

const filestackOptions = {
  accept: 'image/*',
  maxFiles: 5
}

class CreateTrip extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      tourDestination: '',
      dateFrom: '',
      dateTo: '',
      budget: '',
      image: '',
      description: '',
      peopleMin: '',
      peopleMax: ''
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

  onSuccess = response => {
    const files = response.filesUploaded.map(item => {
      return item.url
    })

    this.setState({
      image: files
    })
  }
  onSubmit = async () => {
    console.log(this.state)

    this.props.dispatch(createTrips(this.state))

    this.clearInputText()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.onSubmit()
    this.props.history.push('/trips')
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <form onSubmit={this.handleSubmit}>
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
              <DateLabelTo
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
                placeholder={new Intl.NumberFormat('en-IND', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumSignificantDigits: 3
                }).format('700000')}
                value={this.state.budget}
                required
              />
            </MarginInput>
            <UploadStyle>
              <UploadLabel>Upload Travel Destination Images</UploadLabel>
              <MarginInput>
                {filestackApiKey && (
                  <ReactFilestack
                    apikey={filestackApiKey}
                    options={filestackOptions}
                    onSuccess={this.onSuccess}
                    onError={this.onError}
                    preload={true}
                    render={({ onPick }) => (
                      <UploadButtonStyled onClick={onPick}>
                        Pick Image
                      </UploadButtonStyled>
                    )}
                  />
                )}
              </MarginInput>
            </UploadStyle>
            <MarginInput>
              <LabelInput>People Can Join:</LabelInput>
              <LabelJoin
                type="number"
                name="peopleMin"
                min="1"
                max="100"
                placeholder="Min"
                onChange={this.handleChange}
                value={this.state.peopleMin}
                required
              />
              <LabelTo>To</LabelTo>
              <LabelJoin
                type="number"
                name="peopleMax"
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
    create_trips: state.create_trips.success
  }
}

export default connect(mapStateToProps)(CreateTrip)
