import React, { FC } from 'react'
import type { ImageListType } from 'react-images-uploading'
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

export const ImageListZone: FC<ImageListZoneProps> = ({
  dragProps,
  onImageRemoveAll,
  onImageUpload,
  isDragging,
  imageList,
  onImageRemove,
  onUpload,
}) => {
  return (
    <div>
      <button
        style={isDragging ? { color: 'red' } : undefined}
        onClick={onImageUpload}
        {...dragProps}
      >
        Click or Drop here
      </button>
      <button onClick={onImageRemoveAll}>Remove all images</button>
      <div className={styles.uploadImageModalImagesContainer}>
        {imageList.map((image, index) => (
          <div key={index} className="image-item">
            <div
              style={{
                width: '150px',
                height: '220px',
                display: 'flex',
                overflow: 'hidden',
                borderRadius: '8px',
                backgroundColor: 'rgba(0,0,0,0.2)',
              }}
            >
              <img
                src={image['data_url']}
                alt=""
                style={{
                  height: '100%',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
            <div className="image-item__btn-wrapper">
              <button onClick={() => onImageRemove(index)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onUpload}>send image</button>
    </div>
  )
}
