import { useCreateProductsContext } from '@/shared/providers'
import React from 'react'
import styles from './Actions.module.css'
import { PossibleProductResource } from '@/shared/models'

export const Actions = () => {
  const { currentResource } = useCreateProductsContext()
  const actions = [
    {
      resourceType: 'FROM_IMAGE' as PossibleProductResource,
      message: 'Crea tus productos usando tus imágenes',
    },
    {
      resourceType: 'FROM_TEXT' as PossibleProductResource,
      message: 'Crea tus productos usando tus frases',
    },
  ]
  return (
    <div className={styles.container}>
      {actions.map(({ message, resourceType }, index) => (
        <button
          key={index}
          className={
            currentResource.value === resourceType
              ? styles.selectedAction
              : styles.action
          }
          onClick={() => currentResource.set(resourceType)}
        >
          {message}
        </button>
      ))}
    </div>
  )
}
