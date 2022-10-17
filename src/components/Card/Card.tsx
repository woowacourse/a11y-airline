import cn from 'classnames'
import { FlexContainer } from 'components'

import styles from './styles.module.scss'

interface CardProps extends React.HTMLAttributes<unknown> {
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

interface LocationProps extends React.HTMLAttributes<HTMLHeadElement> {
  children: string
}

function Location({ className, children, ...args }: LocationProps) {
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
      <span aria-label="대한민국 원">KRW</span> {children.toLocaleString('ko-kr')}
    </p>
  )
}

const Card = Object.assign(Container, { Location, Seat, Price })

export default Card
