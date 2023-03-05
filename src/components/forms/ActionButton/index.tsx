import type { IconProps } from '@/components/icons'
import { LiteralObject } from '@/shared/models'
import type { FC } from 'react'
import { Card } from '../Card'
import styles from './ActionButton.module.css'

interface ActionButtonProps extends LiteralObject {
  onClick: () => void
  Icon: FC<IconProps>
  iconSize?: number
  title: string
  message?: string
  customClasses?: {
    card?: string
    button?: string
  }
}

export const ActionButton: FC<ActionButtonProps> = ({
  Icon,
  iconSize,
  message,
  onClick,
  title,
  customClasses,
  ...otherProps
}) => {
  return (
    <Card customClass={customClasses?.card}>
      <button
        className={`${styles.uploadImageModalButton} ${
          customClasses?.button ? customClasses.button : ''
        }`}
        onClick={onClick}
        {...otherProps}
      >
        <Icon size={iconSize ?? 60} />
        <span className={styles.uploadImageModalButtonTitle}>{title}</span>
        {message && <span>{message}</span>}
      </button>
    </Card>
  )
}
