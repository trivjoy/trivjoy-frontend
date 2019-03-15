import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getTripDetails } from '../redux/actions/trip-details'
import { requestJoin } from '../redux/actions/requestJoin'
import { approveJoin } from '../redux/actions/approveJoin'

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
const DescriptionTop = styled.div`
  margin: 3px 0px 15px 10px;
`
const DescriptionBottom = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0px 5px 10px;
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
const Description = styled.b`
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
const RequestContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  width: 100%;
`
const ApprovedAndWaiting = styled.b`
  font-size: 16px;
  margin: 0px auto;
`
const RequestList = styled.b`
  margin: 0px auto;
  font-size: 16px;
`
const ApprovedAndWaitingPosition = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

const ApproveSymbol = styled.img`
  height: 25px;
  width: 25px;
  :hover {
    cursor: pointer;
  }
`
const UserApprove = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
`
const UserApproved = styled.b`
  font-size: 18px;
`
const UserPhone = styled.p`
  font-size: 18px;
  margin: 0 auto;
`

class TripDetails extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTripDetails(this.props.match.params.id))
  }

  render() {
    let currentUserId,
      tripAuthorId,
      isApproved,
      isRequest,
      tripAuthorPhone,
      tripAuthorName

    if (this.props.user && this.props.trip) {
      currentUserId = this.props.user._id
      tripAuthorId = this.props.trip.author._id
      tripAuthorPhone = this.props.trip.author.phone
      tripAuthorName = this.props.trip.author.name

      isRequest = this.props.trip.users_requested.find(
        user => user._id === currentUserId
      )

      isApproved = this.props.trip.users_joined.find(
        user => user._id === currentUserId
      )
    }

    const JoinButton = props =>
      props.isAuthor ? (
        <RequestContent>
          <RequestList>Request List</RequestList>
          <ApprovedAndWaitingPosition>
            <div>
              <ApprovedAndWaiting> Approved Buddies</ApprovedAndWaiting>
              {this.props.trip.users_joined.map((item, index) => {
                return (
                  <UserApprove key={index}>
                    <UserApproved>{item.name}</UserApproved>
                    <UserPhone> ( {item.phone} ) </UserPhone>
                  </UserApprove>
                )
              })}
            </div>
            <div>
              <ApprovedAndWaiting>Waiting to join</ApprovedAndWaiting>
              {this.props.trip.users_requested.map((item, index) => {
                return (
                  <div key={index}>
                    {item.name}
                    <ApproveSymbol
                      onClick={() =>
                        this.props.dispatch(
                          approveJoin(this.props.trip.id, item._id)
                        )
                      }
                      src="/assets/logo/correct-symbol.svg"
                      alt=""
                    />
                  </div>
                )
              })}
              <div />
            </div>
          </ApprovedAndWaitingPosition>
        </RequestContent>
      ) : (
        <div>
          {isRequest ? (
            <b>Waiting approved...</b>
          ) : !isApproved ? (
            <ButtonRequestJoin
              onClick={() =>
                this.props.dispatch(requestJoin(this.props.trip.id))
              }
            >
              <b>Request to Join</b>
            </ButtonRequestJoin>
          ) : (
            <div>
              <div>
                <b>Approved</b>
              </div>
              <div>
                <b>{tripAuthorName}</b>
              </div>
              <div>
                <b> {tripAuthorPhone}</b>
              </div>
            </div>
          )}
        </div>
      )

    return (
      this.props.trip && (
        <Container>
          <Header />

          <Content>
            <TitleStyled>{this.props.trip.title}</TitleStyled>
            <ImageCards src={this.props.trip.image} alt="" />

            <UserCardDetails>
              <ContentLeft>
                <ProfileImage src="/assets/logo/man.svg" alt="" />
              </ContentLeft>
              <ContentRight>
                <div>
                  <DescriptionTop>
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
                  </DescriptionTop>
                  <DescriptionBottom>
                    <LogoStyle src="/assets/logo/hammock.svg" alt="" />
                    <Description>
                      Tour Destination: {this.props.trip.tourDestination}
                    </Description>
                  </DescriptionBottom>
                  <DescriptionBottom>
                    <LogoStyle src="/assets/logo/calendar.svg" alt="" />
                    <Description>
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
                    </Description>
                  </DescriptionBottom>
                  <DescriptionBottom>
                    <LogoStyle src="/assets/logo/purse.svg" alt="" />
                    <Description>
                      Budget (IDR):
                      {new Intl.NumberFormat('en-IND', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumSignificantDigits: 3
                      }).format(this.props.trip.budget)}
                    </Description>
                  </DescriptionBottom>
                  <DescriptionBottom>
                    <LogoStyle src="/assets/logo/waiting-room.svg" alt="" />
                    <Description>
                      People Can Join: {this.props.trip.peopleMin} -{' '}
                      {this.props.trip.peopleMax}
                    </Description>
                  </DescriptionBottom>
                  <DescriptionBottom>
                    <LogoStyle src="/assets/logo/success.svg" alt="" />
                    <Description>
                      Already Join: {this.props.trip.users_joined.length}
                    </Description>
                  </DescriptionBottom>
                  <Description>Trip Discribe:</Description>
                  <TripDiscribe>{this.props.trip.description}</TripDiscribe>
                </div>
                <ButtonRequest>
                  {this.props.isAuthenticated && (
                    <JoinButton isAuthor={currentUserId === tripAuthorId} />
                  )}
                </ButtonRequest>
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
    trip: state.tripDetails.data,
    isAuthenticated: state.user.isAuthenticated,
    user: state.user.data
  }
}

export default connect(mapStateToProps)(TripDetails)
