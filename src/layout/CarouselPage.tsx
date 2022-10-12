import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import data from '../mocks/data.json';

const hidden = css`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

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

  const handleClickSlider = (direction: 'left' | 'right') => {
    if (!ulRef.current) return;

    const listElements = ulRef.current.querySelectorAll('li');
    let nextIndex = 0;

    if (direction === 'left') nextIndex = indexRef.current - 1;
    if (direction === 'right') nextIndex = indexRef.current + 1;

    if (nextIndex < 0 || nextIndex >= listElements.length) {
      return;
    }

    indexRef.current = nextIndex;

    listElements.forEach(list => {
      list.setAttribute(
        'style',
        `transform: translateX(calc(-254px * ${indexRef.current})); transition: transform 1s;`
      );
    });

    listElements[indexRef.current].focus();
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
          position: relative;
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
                      text-decoration: none;
                      color: inherit;
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
        </ul>

        <div
          css={css`
            position: absolute;
            top: 50%;
            margin: 0;
            padding: 0;
            height: 0;
          `}
        >
          <div
            css={css`
              position: fixed;
              width: 600px;
              margin: 0;
              padding: 0;
              height: 0;
            `}
          >
            <button
              css={css`
                border: none;
                left: 0;
                position: absolute;
                background: url(https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-left.svg)
                  no-repeat center top;
                background-size: 30px 60px;
                height: 60px;
                width: 30px;
                transform: translateY(-50%);
                cursor: pointer;
                /* cursor: not-allowed; */
              `}
              onClick={() => handleClickSlider('left')}
            >
              <span css={hidden}>이전</span>
            </button>
            <button
              css={css`
                border: none;
                right: 0;
                position: absolute;
                background: url(https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-right.svg)
                  no-repeat center top;
                background-size: 30px 60px;
                height: 60px;
                width: 30px;
                cursor: pointer;
                transform: translateY(-50%);
                /* cursor: not-allowed; */
              `}
              onClick={() => handleClickSlider('right')}
            >
              <span css={hidden}>다음</span>
            </button>
          </div>
        </div>
      </article>
    </article>
  );
};

export default CarouselPage;
