import { EditIcon } from '@/components/icons'
import { FC } from 'react'
import styles from './ProfileImage.module.css'

type ProfileImageProps = {
  dragProps: {
    onDrop: (e: any) => void
    onDragEnter: (e: any) => void
    onDragLeave: (e: any) => void
    onDragOver: (e: any) => void
    onDragStart: (e: any) => void
  }
  onImageUpload: () => void
  src: string
}

export const ProfileImage: FC<ProfileImageProps> = ({
  dragProps,
  onImageUpload,
  src,
}) => {
  return (
    <div className={styles.container} {...dragProps}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={src}
          alt="profile-image"
          onLoad={() => console.log('onload')}
          onLoadStart={() => console.log('onload start')}
        />
      </div>
      <div className={styles.addContainer}>
        Arrastra y suelta para actualizar tu imagen de perfil
      </div>
      <button className={styles.button} onClick={onImageUpload}>
        <EditIcon size={30} secondaryColor="var(--fe-colors-gray-50)" />
      </button>
    </div>
  )
}
