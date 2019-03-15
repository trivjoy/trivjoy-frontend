import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getTrips } from '../redux/actions/trips'
import { getTripDetails } from '../redux/actions/trip-details'
import { Link } from 'react-router-dom'

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const TopContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px 0px 0px;
`
const TopLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 30px;
`
const TopRightContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`

const ManLogo = styled.img`
  height: 150px;
  width: 150px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 4px;
  border-radius: 5px;
`
const ProfileStyle = styled.strong`
  color: #5bb9fd;
  font-size: 23px;
  text-shadow: 1px 2px 4px #b7afaf;
`
const ParagraphStyle = styled.p`
  margin-top: 0px;
  margin-bottom: 5px;
  border-bottom: 2px solid black;
  width: 500px;
`

const ChangeImageStyle = styled.b`
  color: #d71414;
  text-shadow: 1px 2px 4px #b7afaf;
  :hover {
    cursor: pointer;
  }
`
const HeaderTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 20px;
`

const ButtonEdit = styled.button`
  border-color: #6faf08;
  font-size: 15px;
  height: 26px;
  width: 70px;
  color: #5bb9fd;
  border-radius: 3px;
  :hover {
    cursor: pointer;
    background-color: #fbfbfb;
  }
  a {
    text-decoration: none;
  }
`

const BottomContent = styled.div`
  margin: 30px 0px 50px 0px;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

const MyCardContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5px;
  padding-left: 15%;
  padding-right: 15%;
`

const MyCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 250px;
  margin: 10px 23px;
  height: 180px;
  border: 1px solid black;
  font-size: 14px;
  border-radius: 5px;
`
const MyTripStyle = styled.b`
  width: 718px;
  margin-bottom: 5px;
  font-size: 20px;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 30px;
  font-size: 16px;
  border-radius: 5px 5px 0px 0px;
  background-color: #5bb9fd;
`
const CardDetails = styled.div`
  margin: 5px 0px 5px 0px;
`
const ViewButton = styled.button`
  width: 70px;
  align-items: center;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 3px;
  background-color: #f1c84b;
  :hover {
    cursor: pointer;
  }
`

class Profile extends React.Component {
  componentDidMount = async () => {
    this.props.dispatch(getTrips())
  }

  render() {
    const mytrip =
      this.props.trips &&
      this.props.trips.filter(trip => trip.author._id === this.props.user._id)

    return (
      <Container>
        <Header />
        <Content>
          <TopContent>
            <TopLeftContent>
              <div>
                <ManLogo src="/assets/logo/man.svg" alt="" />
              </div>
              <ChangeImageStyle>Change Images</ChangeImageStyle>
            </TopLeftContent>
            <TopRightContent>
              <HeaderTopContent>
                <ProfileStyle>Profile</ProfileStyle>
                <ButtonEdit>
                  <Link to="/edit_profile">
                    <b>Edit</b>
                  </Link>
                </ButtonEdit>
              </HeaderTopContent>

              <div>
                <ParagraphStyle>
                  <b>FullName: {this.props.user && this.props.user.name}</b>
                </ParagraphStyle>
                <ParagraphStyle>
                  <b>Email: {this.props.user && this.props.user.email}</b>
                </ParagraphStyle>
                <ParagraphStyle>
                  <b>Gender: {this.props.user && this.props.user.gender}</b>
                </ParagraphStyle>
                <ParagraphStyle>
                  <b>Age: {this.props.user && this.props.user.age}</b>
                </ParagraphStyle>
                <ParagraphStyle>
                  <b>
                    Telephone Number: {this.props.user && this.props.user.phone}
                  </b>
                </ParagraphStyle>
                <ParagraphStyle>
                  <b>City: {this.props.user && this.props.user.city}</b>
                </ParagraphStyle>
                <ParagraphStyle>
                  <b>Address: {this.props.user && this.props.user.address}</b>
                </ParagraphStyle>
              </div>
            </TopRightContent>
          </TopContent>
          <BottomContent>
            <Div>
              <MyTripStyle>My Trip</MyTripStyle>
            </Div>
            <MyCardContent>
              {mytrip.map((item, index) => {
                return (
                  <MyCard key={index}>
                    <Title>
                      <b>{item.title}</b>
                    </Title>
                    <CardDetails>
                      <b>{item.TourDestination}</b>
                    </CardDetails>
                    <CardDetails>
                      <b>
                        {new Intl.DateTimeFormat('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }).format(new Date(item.dateFrom))}{' '}
                        -{' '}
                        {new Intl.DateTimeFormat('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }).format(new Date(item.dateTo))}
                      </b>
                    </CardDetails>
                    <CardDetails>
                      <b>
                        Request Join: {item.peopleMin} - {item.peopleMax}
                      </b>
                    </CardDetails>
                    <CardDetails>
                      <b>Already Join: {item.users_joined.length}</b>
                    </CardDetails>
                    <div>
                      <ViewButton
                        onClick={() => {
                          this.props.dispatch(getTripDetails())
                          this.props.history.push(`/trips/${item.id}`)
                        }}
                      >
                        <b>View</b>
                      </ViewButton>
                    </div>
                  </MyCard>
                )
              })}{' '}
            </MyCardContent>
          </BottomContent>
        </Content>
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    trips: state.trips.data
  }
}

export default connect(mapStateToProps)(Profile)
