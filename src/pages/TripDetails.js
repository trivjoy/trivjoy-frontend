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
  margin: 30px auto;
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
const DescriptionBottom = styled.div`
  font-size: 15px;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 5px 0px 5px 10px;
`
const DescriptionTop = styled.div`
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
const Description = styled.span`
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
const TripDescription = styled.p`
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

const ApprovedAndWaiting = styled.b`
  font-size: 18px;
`
const RequestList = styled.b`
  margin: 0px auto;
  font-size: 20px;
`
const ApprovedAndWaitingPosition = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`

const ApproveSymbol = styled.img`
  height: 15px;
  width: 15px;
  margin-left: 10px;
  :hover {
    cursor: pointer;
  }
`
const UserApprove = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
`
const UserApproved = styled.b`
  font-size: 14px;
`
const UserPhone = styled.p`
  font-size: 14px;
  margin: 0 auto;
`
const ApproveContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 3px;
  width: 500px;
  margin-bottom: 40px;
  margin-top: 30px;
  background-color: #68bffd;
  color: white;
`
const ApproveStyle = styled.div`
  text-align: center;
  margin-top: 10px;
`
const ApproveDetails = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`
const WaitingApproved = styled.b`
  margin-top: 10px;
  margin-bottom: 10px;
`

class TripDetails extends React.Component {
  state = {
    buttonClicked: false
  }

  componentDidMount() {
    this.props.dispatch(getTripDetails(this.props.match.params.id))
  }

  handleRequestJoinClicked = e => {
    this.setState({ buttonClicked: true })
    this.props.dispatch(requestJoin(this.props.trip.id))
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
        <ApproveContent>
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
                    <UserApproved>{item.name}</UserApproved>
                    <ApproveSymbol
                      onClick={
                        (() =>
                          this.props.dispatch(
                            approveJoin(this.props.trip.id, item._id)
                          ),
                        this.refresh())
                      }
                      src="/assets/logo/correct-symbol.svg"
                      alt="Correct Symbol"
                    />
                  </div>
                )
              })}
              <div />
            </div>
          </ApprovedAndWaitingPosition>
        </ApproveContent>
      ) : (
        <div>
          {this.state.buttonClicked || isRequest ? (
            <ApproveContent>
              <WaitingApproved>Waiting approved...</WaitingApproved>
            </ApproveContent>
          ) : !isApproved ? (
            <ButtonRequestJoin onClick={this.handleRequestJoinClicked}>
              <b>Request to Join</b>
            </ButtonRequestJoin>
          ) : (
            <ApproveContent>
              <ApproveStyle>
                <b>Approved</b>
              </ApproveStyle>

              <ApproveDetails>
                <b>
                  You can contact: {tripAuthorName} ( {tripAuthorPhone} )
                </b>
              </ApproveDetails>
            </ApproveContent>
          )}
        </div>
      )

    return (
      this.props.trip && (
        <Container>
          <Header />

          <Content>
            <TitleStyled>{this.props.trip.title}</TitleStyled>
            <ImageCards
              src={this.props.trip.image}
              alt={this.props.trip.title}
            />

            <UserCardDetails>
              <ContentLeft>
                <ProfileImage
                  src="/assets/logo/man.svg"
                  alt={this.props.trip.author.name}
                />
              </ContentLeft>
              <ContentRight>
                <div>
                  <DescriptionTop>
                    <b>
                      {this.props.trip.author.name},{' '}
                      {this.props.trip.author.age}{' '}
                    </b>
                    <div>
                      <b>{this.props.trip.author.gender}</b>
                    </div>
                    <div>
                      <LocationLogo
                        src="/assets/logo/maps-and-flags.svg"
                        alt="Map Pin"
                      />{' '}
                      <LocationStyle>
                        {this.props.trip.author.city}
                      </LocationStyle>
                    </div>
                  </DescriptionTop>

                  <DescriptionBottom>
                    <LogoStyle src="/assets/logo/hammock.svg" alt="" />
                    <Description>
                      Location destination is {this.props.trip.tourDestination}
                    </Description>
                  </DescriptionBottom>
                  <DescriptionBottom>
                    <LogoStyle src="/assets/logo/calendar.svg" alt="" />
                    <Description>
                      From{' '}
                      {new Intl.DateTimeFormat('en-EN', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }).format(new Date(this.props.trip.dateFrom))}{' '}
                      to{' '}
                      {new Intl.DateTimeFormat('en-EN', {
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
                      Trip budget is around{' '}
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
                      About {this.props.trip.peopleMin}-
                      {this.props.trip.peopleMax} people can join
                    </Description>
                  </DescriptionBottom>
                  {this.props.trip.users_joined.length > 0 && (
                    <DescriptionBottom>
                      <LogoStyle src="/assets/logo/success.svg" alt="" />
                      <Description>
                        {this.props.trip.users_joined.length} people already
                        joined
                      </Description>
                    </DescriptionBottom>
                  )}
                  <TripDescription>
                    {this.props.trip.description}
                  </TripDescription>
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
