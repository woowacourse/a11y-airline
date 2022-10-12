import { css } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

import data from '../mocks/data.json';

import styles from './styles';

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
  };

  useEffect(() => {
    const { specialOfferList } = data;

    setTripList(specialOfferList);
    setDisableLeftButton(true);
  }, []);

  return (
    <article css={styles.layout}>
      <header>
        <h1>지금 떠나기 좋은 여행</h1>
      </header>
      <article css={styles.content}>
        <ul css={styles.ul} ref={ulRef}>
          {tripList &&
            tripList.map(trip => {
              return (
                <li key={trip.id} css={styles.li}>
                  <a css={styles.a} href={trip.link}>
                    <div css={styles.textBox}>
                      <p css={styles.textTitle}>{`${trip.departureAirportNm.split(',')[0]} - ${
                        trip.arrivalAirportNm.split(',')[0]
                      }`}</p>
                      <p css={styles.text}>{`${trip.cabinClassNm} ${trip.tripTypeNm}`}</p>
                      <p css={styles.textPrice}>{`${trip.currency} ${parseInt(trip.price).toLocaleString()} ~`}</p>
                    </div>
                    <div css={styles.imageBox}>
                      <img css={styles.image} src={trip.imgUrl} alt="" />
                    </div>
                  </a>
                </li>
              );
            })}
        </ul>
        <div css={styles.buttonLayout}>
          <div css={styles.buttonWrapper}>
            <button
              css={css`
                ${styles.button(
                  'https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-left.svg',
                  disableLeftButton
                )}
                left: 4px;
              `}
              onClick={() => handleClickSlider('left')}
              disabled={disableLeftButton}
            >
              <span css={styles.hidden}>이전</span>
            </button>
            <button
              css={css`
                ${styles.button(
                  'https://www.koreanair.com/etc.clientlibs/koreanair/clientlibs/clientlib-base/resources/images/mris__button-right.svg',
                  disableRightButton
                )}
                right: 0;
              `}
              onClick={() => handleClickSlider('right')}
              disabled={disableRightButton}
            >
              <span css={styles.hidden}>다음</span>
            </button>
          </div>
        </div>
      </article>
    </article>
  );
};

export default CarouselPage;
