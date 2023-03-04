import { useCreateProductsContext } from '@/shared/providers'
import React from 'react'

export const Actions = () => {
  const { currentResource } = useCreateProductsContext()
  return (
    <div>
      <button
        style={{
          border:
            currentResource.value === 'FROM_IMAGE' ? '1px solid blue' : 'none',
        }}
        onClick={() => currentResource.set('FROM_IMAGE')}
      >
        Crea tus productos usando tus imágenes
      </button>
      <button
        style={{
          border:
            currentResource.value === 'FROM_TEXT' ? '1px solid blue' : 'none',
        }}
        onClick={() => currentResource.set('FROM_TEXT')}
      >
        Crea tus productos usando tus frases
      </button>
    </div>
  )
}
