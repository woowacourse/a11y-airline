import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import data from '../mocks/data.json';

type TripListType = {
  id: string;
  departureAirport: string;
  departureAirportNm: string;
  arrivalAirport: string;
  arrivalAirportNm: string;
  tripType: string;
  tripTypeNm: string;
  currency: string;
  cabinClass: string;
  cabinClassNm: string;
  price: string;
  recentSearch: string;
  tripDuration: string;
  link: string;
  imgUrl: string;
};

const CarouselPage: React.FC = () => {
  const [tripList, setTripList] = useState<TripListType[] | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const indexRef = useRef<number>(0);

  const handleClickLeftMove = () => {
    if (!ulRef.current) return;

    indexRef.current = indexRef.current - 1;

    const listElements = ulRef.current.querySelectorAll('li');

    listElements.forEach(list => {
      list.setAttribute('style', `transform: translateX(calc(254px * ${indexRef.current})); transition: transform 1s;`);
    });
  };

  const handleClickRightMove = () => {
    if (!ulRef.current) return;

    indexRef.current = indexRef.current + 1;

    const listElements = ulRef.current.querySelectorAll('li');

    listElements.forEach(list => {
      list.setAttribute('style', `transform: translateX(calc(254px * ${indexRef.current})); transition: transform 1s;`);
    });
  };

  useEffect(() => {
    const { specialOfferList } = data;

    setTripList(specialOfferList);
  }, []);

  return (
    <article
      css={css`
        margin: 0 40px;
      `}
    >
      <header>
        <h1>지금 떠나기 좋은 여행</h1>
      </header>
      <article
        css={css`
          border: 1px solid black;

          width: 600px;
          height: 400px;

          overflow: hidden;
        `}
      >
        <ul
          css={css`
            position: relative;
            display: flex;

            padding: 0;
            margin: 40px 0;
          `}
          ref={ulRef}
        >
          {tripList &&
            tripList.map(trip => {
              return (
                <li
                  key={trip.id}
                  css={css`
                    list-style: none;
                    height: 300px;
                    width: 240px;
                    position: relative;
                    margin-right: 20px;
                  `}
                >
                  <a
                    css={css`
                      text-decoration: none; /* 링크의 밑줄 제거 */
                      color: inherit; /* 링크의 색상 제거 */
                    `}
                    href={trip.link}
                  >
                    <div
                      css={css`
                        position: absolute;
                        top: 10%;
                        left: 10%;
                      `}
                    >
                      <div>{`${trip.departureAirportNm.split(',')[0]} - ${trip.arrivalAirportNm.split(',')[0]}`}</div>
                      <div>{`${trip.cabinClassNm} ${trip.tripTypeNm}`}</div>
                      <div>{`${trip.currency} ${trip.price}`}</div>
                    </div>

                    <div
                      css={css`
                        width: auto;
                        height: 100%;
                      `}
                    >
                      <img
                        css={css`
                          width: auto;
                          height: 100%;

                          object-fit: cover;
                          background-repeat: no-repeat;
                        `}
                        src={trip.imgUrl}
                        alt=""
                      />
                    </div>
                  </a>
                </li>
              );
            })}
          <button
            css={css`
              position: absolute;
              top: 50%;
              left: 0;
            `}
            onClick={handleClickLeftMove}
          >
            왼쪽
          </button>
          <button
            css={css`
              position: absolute;
              top: 50%;
              right: 0;
            `}
            onClick={handleClickRightMove}
          >
            오른쪽
          </button>
        </ul>
      </article>
    </article>
  );
};

export default CarouselPage;
