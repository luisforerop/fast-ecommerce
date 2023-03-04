import { useUploadImage } from '@/shared/hooks'
import React, { FC } from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import styles from './CreateFromImage.module.css'
import { useCreateProductsContext } from '@/shared/providers'
import { UploadImageModal } from '../UploadImageModal'

export const CreateFromImage: FC = () => {
  const { currentResource } = useCreateProductsContext()
  const { onChange, onUpload, images } = useUploadImage()

  return (
    <div
      className="App"
      style={{
        display: currentResource.value === 'FROM_IMAGE' ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={5}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={styles.dropzone} {...dragProps}>
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>

            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
      <button onClick={onUpload}>send image</button>
    </div>
  )
}
