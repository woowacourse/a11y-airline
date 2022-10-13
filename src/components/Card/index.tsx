import cn from 'classnames'
import FlexContainer from 'components/FlexContainer'
import { HTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface CardProps extends HTMLAttributes<unknown> {
  backgroundImage: URLString
  children: React.ReactNode
}

function Container({ backgroundImage, children, ...args }: CardProps) {
  return (
    <FlexContainer
      as="li"
      className={styles.componentCard}
      gap="small"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      {...args}
    >
      {children}
    </FlexContainer>
  )
}

interface NameProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: string
}

function Location({ className, children, ...args }: NameProps) {
  return (
    <p className={cn(className, styles.location)} {...args}>
      {children}
    </p>
  )
}

interface SeatProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string
}

function Seat({ className, children, ...args }: SeatProps) {
  return (
    <p className={className} {...args}>
      {children}
    </p>
  )
}

interface PriceProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: number
}

function Price({ className, children, ...args }: PriceProps) {
  return (
    <p className={cn(className, styles.price)} {...args}>
      KRW {children.toLocaleString('ko-kr')}
    </p>
  )
}

const Card = Object.assign(Container, { Location, Seat, Price })

export default Card
