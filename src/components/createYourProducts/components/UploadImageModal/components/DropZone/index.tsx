import type { FC } from 'react'
import styles from './DropZone.module.css'
import { useCreateProductsContext } from '@/shared/providers'

type DropZoneProps = {
  isDragging?: boolean
  onImageUpload: () => void
  dragProps: {
    onDrop: (e: any) => void
    onDragEnter: (e: any) => void
    onDragLeave: (e: any) => void
    onDragOver: (e: any) => void
    onDragStart: (e: any) => void
  }
}

export const DropZone: FC<DropZoneProps> = ({ dragProps, onImageUpload }) => {
  const { availableUploads } = useCreateProductsContext()
  return (
    <div className={styles.uploadImageModalDropzone} {...dragProps}>
      <h2 className={styles.uploadImageModalDropzoneTitle}>
        Carga imágenes para crear tus productos!
      </h2>
      <button
        className={styles.uploadImageModalDropzoneButton}
        onClick={onImageUpload}
        {...dragProps}
      >
        Sube una imagen
      </button>
      <p className={styles.uploadImageModalDropzoneDescription}>
        {`O arrastra hasta ${availableUploads} para comenzar`}
      </p>
    </div>
  )
}
