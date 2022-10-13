import Carousel from 'components/Carousel'
import styles from './styles.module.scss'
import specialOfferList from 'dummy/specialOfferList.json'
import FlexContainer from 'components/FlexContainer'
import Card from 'components/Card'
import { useMemo } from 'react'

function CarouselPage() {
  const specialOfferCards = useMemo(
    () =>
      specialOfferList.map((offer, index) => {
        const departure = offer.departureAirportNm.split(', ')[0]
        const arrival = offer.arrivalAirportNm.split(', ')[0]

        return (
          <a
            target="blank"
            href={`https://www.koreanair.com/booking/best-prices?departureCode=${offer.departureAirport}&destinationCode=${offer.arrivalAirport}&duration=7&cabin=Y`}
          >
            <Card
              key={offer.arrivalAirport}
              data-index={index}
              backgroundImage={`https://techcourse.compy.life/a11y-airline/${offer.arrivalAirport}-list-pc.jpg`}
            >
              <Card.Location>{`${departure} - ${arrival}`}</Card.Location>
              <Card.Seat>{`${offer.cabinClassNm} ${offer.tripTypeNm}`}</Card.Seat>
              <Card.Price>{Number(offer.price)}</Card.Price>
            </Card>
          </a>
        )
      }),
    [],
  )

  return (
    <section className={styles.pageCarousel}>
      <Carousel>{specialOfferCards}</Carousel>
    </section>
  )
}

export default CarouselPage
