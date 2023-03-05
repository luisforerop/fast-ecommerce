import { Fragment } from 'react'
import type { FC } from 'react'
import type { ImageListType } from 'react-images-uploading'
import ImageUploading from 'react-images-uploading'
import { DropZone } from '../DropZone'
import { ImageListZone } from '../ImageListZone'
import styles from './ModalContent.module.css'
import { useCreateProductsContext } from '@/shared/providers'

type ModalContentProps = {
  images: ImageListType
  uploading: boolean
  onChange: (imageList: ImageListType) => void
  onUpload: () => void
}

export const ModalContent: FC<ModalContentProps> = ({
  images,
  uploading,
  onChange,
  onUpload,
}) => {
  const { availableUploads } = useCreateProductsContext()

  if (uploading) return null

  return (
    <div className={styles.uploadImageModalContent}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={availableUploads}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          <Fragment>
            {imageList.length ? null : (
              <DropZone
                dragProps={dragProps}
                onImageUpload={onImageUpload}
                isDragging={isDragging}
              />
            )}
            {!imageList.length ? null : (
              <ImageListZone
                {...{
                  dragProps,
                  imageList,
                  onImageRemove,
                  onImageRemoveAll,
                  onImageUpload,
                  onUpload,
                  isDragging,
                }}
              />
            )}
          </Fragment>
        )}
      </ImageUploading>
    </div>
  )
}
