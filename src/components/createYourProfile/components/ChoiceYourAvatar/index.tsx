import { PreviewProfileImageType } from '@/shared/hooks'
import React, { FC } from 'react'
import styles from './ChoiceYourAvatar.module.css'
import { useState } from 'react'

type ChoiceYourAvatarProps = {
  previewProfileImages: PreviewProfileImageType[]
}

export const ChoiceYourAvatar: FC<ChoiceYourAvatarProps> = ({
  previewProfileImages,
}) => {
  const [currentEffectImageIndex, setCurrentEffectImageIndex] = useState(0)
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Elige un estilo para tu avatar</h2>
      <div className={styles.styledAvatarContainer}>
        {previewProfileImages.map(({ onClick, src, effect }, index) => {
          return (
            <div
              onClick={() => {
                onClick()
                setCurrentEffectImageIndex(index)
              }}
              className={`${styles.styledAvatar} ${
                currentEffectImageIndex === index
                  ? styles.selectAvatarStyle
                  : ''
              }`}
              key={effect}
            >
              <img src={src} alt={`image with ${effect}`} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
