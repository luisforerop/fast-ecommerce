import { ActionButton } from '@/components/forms'
import { Image, Trash, Upload } from '@/components/icons'
import { useCreateProductsContext } from '@/shared/providers'
import { FC } from 'react'
import type { ImageListType } from 'react-images-uploading'
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

const getMessage = (quantity: number, availableUploads: number) => {
  const imageText = quantity === 1 ? 'imagen' : 'imágenes'
  return `Aún tienes espacio para ${availableUploads - quantity} ${imageText}`
}

export const ImageListZone: FC<ImageListZoneProps> = ({
  dragProps,
  imageList,
  onImageRemoveAll,
  onImageUpload,
  onImageRemove,
  onUpload,
}) => {
  const { availableUploads } = useCreateProductsContext()
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
        {imageList.length < availableUploads && (
          <ActionButton
            Icon={Image}
            onClick={onImageUpload}
            title="¡Agrega más!"
            message={getMessage(imageList.length, availableUploads)}
            {...dragProps}
          />
        )}
        <ActionButton
          Icon={Upload}
          onClick={() => {
            onUpload()
            onImageRemoveAll()
          }}
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
