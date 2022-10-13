import { useEffect, useRef, useState } from 'react'

import cn from 'classnames'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useDebounceCallback from 'hooks/useDebounceCallback'
import { FlexContainer } from 'components'

import styles from './styles.module.scss'

interface CarouselProps {
  className?: string
  children: React.ReactNode
}

function Carousel({ className, children }: CarouselProps) {
  const [buttonEnabled, setButtonEnabled] = useState({
    previous: false,
    next: true,
  })

  const scrollMovementWidthRef = useRef<number>(0)
  const contentListRef = useRef<HTMLDivElement>(null)

  useEffect(function getScrollMovementWidth() {
    if (!contentListRef.current || !contentListRef.current.firstElementChild) return

    scrollMovementWidthRef.current = contentListRef.current.firstElementChild.clientWidth
    contentListRef.current.scrollLeft = 0
  }, [])

  const handleUpdateHideButton = () => {
    if (!contentListRef.current) return

    const { scrollWidth, scrollLeft, clientWidth } = contentListRef.current

    setButtonEnabled({
      previous: scrollLeft > 0,
      next: scrollLeft < scrollWidth - clientWidth,
    })
  }

  const handleChangeScroll = (direction: 'previous' | 'next') => () => {
    if (!contentListRef.current) return

    const { scrollWidth, scrollLeft, clientWidth } = contentListRef.current

    const scrollLocation =
      direction === 'previous'
        ? scrollLeft - scrollMovementWidthRef.current
        : scrollLeft + scrollMovementWidthRef.current
    const isMoveable = scrollWidth - clientWidth + scrollMovementWidthRef.current >= scrollLocation

    isMoveable && contentListRef.current.scrollTo(scrollLocation, 0)
  }

  const handleUpdateScrollPosition = useDebounceCallback(handleUpdateHideButton, 50)

  return (
    <div className={styles.componentCarousel}>
      <button
        type="button"
        className={cn(styles.controlButton, styles.previous, {
          [styles.enabled]: buttonEnabled.previous,
        })}
        onClick={handleChangeScroll('previous')}
        aria-disabled={!buttonEnabled.previous}
      >
        <span className="screen-reader-text">이전</span>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <FlexContainer
        className={cn(styles.contentWrapper, className)}
        ref={contentListRef}
        direction="row"
        gap="large"
        onScroll={handleUpdateScrollPosition}
      >
        {children}
      </FlexContainer>

      <button
        type="button"
        className={cn(styles.controlButton, styles.next, { [styles.enabled]: buttonEnabled.next })}
        onClick={handleChangeScroll('next')}
        aria-disabled={!buttonEnabled.next}
      >
        <span className="screen-reader-text">다음</span>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  )
}

export default Carousel
