import type { IconProps } from '@/components/icons'
import { LiteralObject } from '@/shared/models'
import type { FC } from 'react'
import { Card } from '../Card'
import styles from './ActionButton.module.css'

interface ActionButtonProps extends LiteralObject {
  onClick: () => void
  Icon: FC<IconProps>
  title: string
  message: string
}

export const ActionButton: FC<ActionButtonProps> = ({
  Icon,
  message,
  onClick,
  title,
  ...otherProps
}) => {
  return (
    <Card>
      <button
        className={styles.uploadImageModalButton}
        onClick={onClick}
        {...otherProps}
      >
        <Icon size={60} />
        <span className={styles.uploadImageModalButtonTitle}>{title}</span>
        <span>{message}</span>
      </button>
    </Card>
  )
}
