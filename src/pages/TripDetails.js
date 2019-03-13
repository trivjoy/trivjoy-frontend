import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getTripDetails } from '../redux/actions/trip-details'

const Content = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 30px;
  margin-bottom: 30px;
  width: 800px;
  align-self: center;
  border-radius: 5px;
  flex: 1;
`
const ContentRight = styled.div`
  margin: 0px;
  font-size: 25px;
  width: 100%;
  margin-right: 65px;
`
const ContentLeft = styled.div`
  margin-top: 0px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const LocationLogo = styled.img`
  height: 18px;
  width: 18px;
`

const LogoStyle = styled.img`
  height: 15px;
  width: 15px;
  margin: 5px 5px 5px 0px;
`
const DiscribeBottomCards = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0px 5px 10px;
`
const DiscribeTopCards = styled.div`
  margin: 3px 0px 15px 10px;
`
const ImageCards = styled.img`
  display: flex;
  width: 800px;
  height: 300px;
  margin: 0px auto;
`

const TitleStyled = styled.h2`
  margin: 20px 0px 20px 10px;
  text-align: center;
`
const ProfileImage = styled.img`
  height: 85px;
  width: 85px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 4px;
  border-radius: 5px;
  margin-left: 65px;
`
const UserCardDetails = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
`
const DiscribeStyle = styled.b`
  margin-left: 10px;
  font-size: 18px;
`
const ButtonRequestJoin = styled.button`
  width: 250px;
  height: 35px;
  background-color: #5bb9fd;
  color: white;
  font-size: 18px;
  margin: 20px 0px 30px 10px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: #68bffd;
  }
`
const TripDiscribe = styled.p`
  font-size: 14px;
  margin-left: 10px;
`
const LocationStyle = styled.b`
  color: #0192fc;
`
const ButtonRequest = styled.div`
  display: flex;
  justify-content: center;
`

class TripDetails extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTripDetails(this.props.match.params.id))
  }

  render() {
    return (
      this.props.trip && (
        <Container>
          <Header />

          <Content>
            <TitleStyled>{this.props.trip.title}</TitleStyled>
            <ImageCards src="/assets/images/first-section-1.jpg" alt="" />

            <UserCardDetails>
              <ContentLeft>
                <ProfileImage src="/assets/logo/man.svg" alt="" />
              </ContentLeft>
              <ContentRight>
                <div>
                  <DiscribeTopCards>
                    <b>
                      {this.props.trip.author.name},
                      <b> {this.props.trip.author.age}</b>
                    </b>
                    <div>
                      <LocationLogo
                        src="/assets/logo/maps-and-flags.svg"
                        alt=""
                      />
                      <LocationStyle>
                        {this.props.trip.author.city}
                      </LocationStyle>
                    </div>
                    <b>{this.props.trip.author.gender}</b>
                  </DiscribeTopCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/hammock.svg" alt="" />
                    <DiscribeStyle>
                      Tour Destination: {this.props.trip.tourDestination}
                    </DiscribeStyle>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/calendar.svg" alt="" />
                    <DiscribeStyle>
                      Date:{' '}
                      {new Intl.DateTimeFormat('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }).format(new Date(this.props.trip.dateFrom))}{' '}
                      -{' '}
                      {new Intl.DateTimeFormat('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }).format(new Date(this.props.trip.dateTo))}
                    </DiscribeStyle>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/purse.svg" alt="" />
                    <DiscribeStyle>
                      Budget: {this.props.trip.budget}
                    </DiscribeStyle>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/waiting-room.svg" alt="" />
                    <DiscribeStyle>
                      People Can Join: {this.props.trip.peopleMin} -{' '}
                      {this.props.trip.peopleMax}
                    </DiscribeStyle>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/success.svg" alt="" />
                    <DiscribeStyle>
                      Alredy Join: {this.props.trip.users_joined.length}
                    </DiscribeStyle>
                  </DiscribeBottomCards>
                  <DiscribeStyle>Trip Discribe:</DiscribeStyle>
                  <TripDiscribe>{this.props.trip.description}</TripDiscribe>
                  <ButtonRequest>
                    <ButtonRequestJoin>
                      <b>Request to Join</b>
                    </ButtonRequestJoin>
                  </ButtonRequest>
                </div>
              </ContentRight>
            </UserCardDetails>
          </Content>

          <Footer />
        </Container>
      )
    )
  }
}

const mapStateToProps = state => {
  return {
    trip: state.tripDetails.data
  }
}

export default connect(mapStateToProps)(TripDetails)
