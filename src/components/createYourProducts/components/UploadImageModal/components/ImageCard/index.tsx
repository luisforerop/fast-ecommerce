import { Image, Trash } from '@/components/icons'
import { FC, useEffect, useRef, useState } from 'react'
import type { ImageType } from 'react-images-uploading'
import { Card } from '../Card'
import styles from './ImageCard.module.css'

type ImageCardProps = {
  image: ImageType
  index: number
  onImageRemove: (index: number) => void
}

export const ImageCard: FC<ImageCardProps> = ({
  image,
  onImageRemove,
  index,
}) => {
  const [imageName, setImageName] = useState('')
  const imageRef = useRef<HTMLImageElement>(null)
  // format size
  // new Intl.NumberFormat('es-CO', { style: 'unit', unit: 'megabyte', unitDisplay: 'short', } ).format(165)

  useEffect(() => {
    setImageName(image.file?.name.split('.').slice(0, -1).join('') ?? '')
  }, [image])

  return (
    <Card>
      <div className={styles.uploadModalImageCardImageContainer}>
        <img src={image['data_url']} alt="" ref={imageRef} />
      </div>
      <button
        className={styles.uploadModalImageCardRemoveButton}
        onClick={() => onImageRemove(index)}
      >
        <Trash size={25} />
      </button>
      <div className={styles.uploadModalImageCardFooterContainer}>
        <span className={styles.uploadModalImageCardImageName}>
          {imageName}
        </span>
        <div className={styles.uploadModalImageCardFooterMetadata}>
          <span>
            <Image size={15} />
            {image.file?.type.replace('image/', '')}
          </span>
          {imageRef.current && (
            <span>{`${imageRef.current.naturalWidth} × ${imageRef.current.naturalHeight}`}</span>
          )}
          <span>{image.file?.size}</span>
        </div>
      </div>
    </Card>
  )
}
