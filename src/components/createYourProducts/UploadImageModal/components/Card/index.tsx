import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react'
import styles from './Card.module.css'

interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  customClass?: string
}

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  customClass,
  ...props
}) => {
  return (
    <article
      {...props}
      className={`${styles.uploadModalImageCardContainer}${
        customClass ? ` ${customClass}` : ''
      }`}
    >
      {children}
    </article>
  )
}
