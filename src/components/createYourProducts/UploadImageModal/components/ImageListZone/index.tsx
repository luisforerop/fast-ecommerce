import { Image, Trash, Upload } from '@/components/icons'
import { FC } from 'react'
import type { ImageListType } from 'react-images-uploading'
import { ActionButton } from '../ActionButton'
import { ImageCard } from '../ImageCard'
import styles from './ImageListZone.module.css'

type ImageListZoneProps = {
  imageList: ImageListType
  isDragging?: boolean
  onImageUpload: () => void
  onImageRemoveAll: () => void
  onImageRemove: (index: number) => void
  onUpload: () => void
  dragProps: {
    onDrop: (e: any) => void
    onDragEnter: (e: any) => void
    onDragLeave: (e: any) => void
    onDragOver: (e: any) => void
    onDragStart: (e: any) => void
  }
}

const getMessage = (quantity: number) => {
  const imageText = quantity === 1 ? 'imagen' : 'imágenes'
  return `Aún tienes espacio para ${5 - quantity} ${imageText}`
}

export const ImageListZone: FC<ImageListZoneProps> = ({
  dragProps,
  imageList,
  onImageRemoveAll,
  onImageUpload,
  onImageRemove,
  onUpload,
}) => {
  return (
    <div className={styles.uploadImageModalImageListZoneContainer}>
      <div className={styles.uploadImageModalImagesContainer}>
        {imageList.map((image, index) => (
          <ImageCard
            key={index}
            image={image}
            index={index}
            onImageRemove={onImageRemove}
          />
        ))}
        {imageList.length < 5 && (
          <ActionButton
            Icon={Image}
            onClick={onImageUpload}
            title="¡Agrega más!"
            message={getMessage(imageList.length)}
            {...dragProps}
          />
        )}

        <ActionButton
          Icon={Upload}
          onClick={onUpload}
          title="Carga tus imágenes"
          message="Enviemos las imagenes a la nube y veamos tus productos"
        />
        <ActionButton
          Icon={Trash}
          onClick={onImageRemoveAll}
          title="¿No te gustaron?"
          message="Remueve todas las imágenes"
        />
      </div>
    </div>
  )
}
