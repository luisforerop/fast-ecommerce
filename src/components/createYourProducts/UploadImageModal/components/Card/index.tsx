import { FC, PropsWithChildren } from 'react'
import styles from './Card.module.css'

type CardProps = {
  customClass?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  customClass,
}) => {
  return (
    <article
      className={`${styles.uploadModalImageCardContainer}${
        customClass ? ` ${customClass}` : ''
      }`}
    >
      {children}
    </article>
  )
}
