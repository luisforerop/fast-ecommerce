import { useUploadImage } from '@/shared/hooks'
import { useCreateProductsContext } from '@/shared/providers'
import { useEffect } from 'react'
import styles from './UploadImageModal.module.css'
import { CloseModalButton, ModalContent } from './components'
import { Loader } from './components/Loader'

export const UploadImageModal = () => {
  const { uploadModalIsOpen, uploadedImages, availableUploads } =
    useCreateProductsContext()
  const uploadImagesState = useUploadImage()

  useEffect(() => {
    if (uploadImagesState.uploadedImages.length > 0) {
      uploadedImages.set((curr) => [
        ...curr,
        ...uploadImagesState.uploadedImages,
      ])
      uploadImagesState.onChange([])
      uploadModalIsOpen.set(false)
    }
  }, [uploadImagesState.uploadedImages])

  return (
    <div
      style={{
        display: uploadModalIsOpen.value ? 'flex' : 'none',
      }}
      className={styles.uploadImageModalMainConatiner}
    >
      <div className={styles.uploadImageModalConatiner}>
        <CloseModalButton />
        <Loader loading={uploadImagesState.uploading} />
        <ModalContent {...uploadImagesState} />
      </div>
    </div>
  )
}
