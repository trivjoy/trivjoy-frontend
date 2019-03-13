import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getTrips } from '../redux/actions/trips'
import { getTripDetails } from '../redux/actions/trip-details'

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 27px 27px 27px;
  height: 500px;
  width: 372px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.2),
      0 18px 60px 0 rgba(0, 0, 0, 0.19);
  }
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
  flex: 1;
`
const DiscribeTopCards = styled.div`
  margin: 3px 0px 15px 10px;
`
const ImageCards = styled.img`
  border-radius: 5px 5px 0px 0px;
  height: 230px;
`
const ReadMoreStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 30px;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #5bb9fd;
  color: white;
`
const TitleStyled = styled.h2`
  margin: 5px 0px 0px 10px;
`

class Trips extends React.Component {
  componentDidMount = async () => {
    this.props.dispatch(getTrips())
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          {this.props.trips.length > 0 ? (
            this.props.trips.map((item, index) => {
              return (
                <CardsStyle
                  key={index}
                  onClick={() => {
                    this.props.dispatch(getTripDetails())
                    this.props.history.push(`/trips/${item.id}`)
                  }}
                >
                  <ImageCards src={item.image} alt="" />
                  <TitleStyled>{item.title}</TitleStyled>
                  <DiscribeTopCards>
                    <b>
                      Sakti Dewantoro,<b> 24</b>
                    </b>
                    <div>
                      <LocationLogo
                        src="/assets/logo/maps-and-flags.svg"
                        alt=""
                      />
                      <b>Bandung</b>
                    </div>
                  </DiscribeTopCards>

                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/hammock.svg" alt="" />
                    <b>Tour Destination:{item.tourDestination}</b>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/calendar.svg" alt="" />
                    <b>
                      Date:{' '}
                      {new Intl.DateTimeFormat('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }).format(new Date(item.dateFrom))}{' '}
                      -{' '}
                      {new Intl.DateTimeFormat('id-ID', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }).format(new Date(item.dateTo))}
                    </b>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/purse.svg" alt="" />
                    <b>Budget (IDR): {item.budget}</b>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/waiting-room.svg" alt="" />
                    <b>
                      People Can Join: {item.peopleMin} - {item.peopleMax}
                    </b>
                  </DiscribeBottomCards>
                  <DiscribeBottomCards>
                    <LogoStyle src="/assets/logo/success.svg" alt="" />
                    <b>Already Join: 0</b>
                  </DiscribeBottomCards>
                  <ReadMoreStyle>
                    <b>Read More</b>
                  </ReadMoreStyle>
                </CardsStyle>
              )
            })
          ) : (
            <span>Loading Available Trips...</span>
          )}
        </Content>
        <Footer />
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    trips: state.trips.data
  }
}

export default connect(mapStateToProps)(Trips)
