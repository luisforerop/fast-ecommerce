import { Card } from '@/components/forms'
import { Image } from '@/components/icons'
import { useCreateProductsContext } from '@/shared/providers'
import { FC, useState } from 'react'
import styles from './CreateFromImage.module.css'

export const CreateFromImage: FC = () => {
  const {
    currentResource,
    uploadedImages,
    availableUploads,
    uploadModalIsOpen,
    currentImageName,
  } = useCreateProductsContext()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  return (
    <div
      className={styles.createFromImageContainer}
      style={{
        display: currentResource.value === 'FROM_IMAGE' ? 'grid' : 'none',
      }}
    >
      {uploadedImages.value.map(({ url, public_id, asset_id }, index) => (
        <Card
          key={asset_id}
          customClass={`${styles.createFromImageListContainer} ${
            currentImageIndex === index
              ? styles.createFromImageContainerSelected
              : ''
          }`}
          onClick={() => {
            setCurrentImageIndex(index)
            currentImageName.set(public_id)
          }}
        >
          <img
            src={url}
            alt=""
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
            }}
          />
        </Card>
      ))}
      <Card customClass={styles.createFromImageListContainer}>
        <button
          className={styles.createFromImageButton}
          onClick={() => {
            uploadModalIsOpen.set(true)
          }}
        >
          <Image size={30} />
          <span className={styles.createFromImageButtonTitle}>
            Sube imágenes
          </span>
          <span>
            {uploadedImages.value.length === 5
              ? 'Puedes cargar hasta 5'
              : `Aún puedes subir ${availableUploads} más`}
          </span>
        </button>
      </Card>
    </div>
  )
}
