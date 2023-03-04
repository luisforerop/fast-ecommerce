import React, { Fragment } from 'react'
import styles from './UploadImageModal.module.css'
import { useState } from 'react'
import { useUploadImage } from '@/shared/hooks'
import ImageUploading from 'react-images-uploading'
import { DropZone } from './components/DropZone'
import { ImageListZone } from './components/ImageListZone'
import { Close } from '@/components/icons'
import { useCreateProductsContext } from '@/shared/providers'

export const UploadImageModal = () => {
  const { uploadModalIsOpen } = useCreateProductsContext()
  const { onChange, onUpload, images } = useUploadImage()

  return (
    <div
      style={{
        display: uploadModalIsOpen.value ? 'flex' : 'none',
      }}
      className={styles.uploadImageModalMainConatiner}
    >
      <div className={styles.uploadImageModalConatiner}>
        <button
          className={styles.uploadImageModalClose}
          onClick={() => {
            uploadModalIsOpen.set(false)
          }}
        >
          <Close size={25} />
        </button>

        <div className={styles.uploadImageModalContent}>
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
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
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
      </div>
    </div>
  )
}
