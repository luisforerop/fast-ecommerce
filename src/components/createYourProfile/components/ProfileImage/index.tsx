import { EditIcon } from '@/components/icons'
import { FC, MutableRefObject } from 'react'
import styles from './ProfileImage.module.css'
import { Toaster, toast } from 'sonner'

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
  loaded: MutableRefObject<any>
}

export const ProfileImage: FC<ProfileImageProps> = ({
  onImageUpload,
  dragProps,
  loaded,
  src,
}) => {
  return (
    <div className={styles.container} {...dragProps}>
      <Toaster />
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={src}
          alt="profile-image"
          onLoad={() => toast.dismiss(loaded.current)}
        />
      </div>
      <div className={styles.addContainer}>
        Arrastra y suelta para actualizar tu imagen de perfil
      </div>
      <button className={styles.button} onClick={onImageUpload}>
        <EditIcon size={50} secondaryColor="var(--fe-colors-gray-50)" />
      </button>
    </div>
  )
}
