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

  const [disableLeftButton, setDisableLeftButton] = useState(false);
  const [disableRightButton, setDisableRightButton] = useState(false);

  const handleClickSlider = (direction: 'left' | 'right') => {
    if (!ulRef.current) return;

    const listElements = ulRef.current.querySelectorAll('li');
    let nextIndex = 0;

    if (direction === 'left') nextIndex = indexRef.current - 1;
    if (direction === 'right') nextIndex = indexRef.current + 1;

    if (nextIndex < 0 || nextIndex >= listElements.length) {
      return;
    }

    setDisableLeftButton(nextIndex === 0);
    setDisableRightButton(nextIndex === listElements.length - 1);

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
    setDisableLeftButton(true);
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

            padding: 0 4px;
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

                    :hover {
                      box-shadow: -1px -1px 10px 0px #000;
                    }
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
                      <p
                        css={css`
                          font-weight: bold;
                          font-size: 1.2rem;
                          margin: 0;
                          margin-bottom: 16px;
                        `}
                      >{`${trip.departureAirportNm.split(',')[0]} - ${trip.arrivalAirportNm.split(',')[0]}`}</p>
                      <p
                        css={css`
                          margin: 0;
                          margin-bottom: 4px;
                        `}
                      >{`${trip.cabinClassNm} ${trip.tripTypeNm}`}</p>
                      <p
                        css={css`
                          margin: 0;
                          font-weight: bold;
                          font-size: 1.2rem;
                          color: #11277b;
                          text-shadow: 1px 1px 1px #ffffff;
                        `}
                      >{`${trip.currency} ${parseInt(trip.price).toLocaleString()} ~`}</p>
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
                left: 4px;
                position: absolute;
                background: url(https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-left.svg)
                  no-repeat center top;
                background-size: 30px 60px;
                height: 60px;
                width: 30px;
                transform: translateY(-50%);
                cursor: pointer;
                ${disableLeftButton && `cursor: not-allowed;`}
                :hover {
                  box-shadow: -1px -1px 10px 0px #ffffff;
                }
              `}
              onClick={() => handleClickSlider('left')}
              disabled={disableLeftButton}
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
                ${disableRightButton && `cursor: not-allowed;`}
                :hover {
                  box-shadow: -1px -1px 10px 0px #ffffff;
                }
              `}
              onClick={() => handleClickSlider('right')}
              disabled={disableRightButton}
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
