import { useCreateProductsContext } from '@/shared/providers'
import React, { FC } from 'react'
import { useState } from 'react'

export const CreateFromText: FC = () => {
  const { currentResource } = useCreateProductsContext()

  const [sentences, setSentences] = useState<string[]>([''])

  return (
    <div
      style={{
        display: currentResource.value === 'FROM_TEXT' ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {sentences.map((sentence, index) => (
          <input
            key={sentence}
            type="text"
            placeholder="Escribe tu frase"
            value={sentence}
            onChange={(e) => {
              setSentences((curr) => {
                const newSentences = curr.map((sentence) => sentence)
                newSentences[index] = e.target.value
                return newSentences
              })
            }}
          />
        ))}
      </div>
      <button
        onClick={() => {
          setSentences((curr) => {
            const allInputsHaveASentence = !curr.includes('')
            if (allInputsHaveASentence) {
              return [...curr, '']
            }

            return curr
          })
        }}
      >
        Nueva frase
      </button>
    </div>
  )
}
