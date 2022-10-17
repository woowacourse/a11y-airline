import { Carousel } from 'components';
import { TicketItem } from 'pages/TravelRecommendationPage/components';
import { tickets } from 'pages/TravelRecommendationPage/TravelRecommendationPage.constant';

const TravelRecommendationPage = () => {
  return (
    <>
      <h1>지금 떠나기 좋은 여행</h1>
      <Carousel itemWidth={230} itemHeight={295} itemLength={8} gap={8} viewingCount={2}>
        {tickets.map((ticket) => (
          <TicketItem key={ticket.id} {...ticket} />
        ))}
      </Carousel>
    </>
  );
};

export default TravelRecommendationPage;
