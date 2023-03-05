import React from 'react'
import styles from './CloseModalButton.module.css'
import { useCreateProductsContext } from '@/shared/providers'
import { Close } from '@/components/icons'

export const CloseModalButton = () => {
  const { uploadModalIsOpen } = useCreateProductsContext()

  return (
    <button
      className={styles.uploadImageModalClose}
      onClick={() => {
        uploadModalIsOpen.set(false)
      }}
    >
      <Close size={25} />
    </button>
  )
}
