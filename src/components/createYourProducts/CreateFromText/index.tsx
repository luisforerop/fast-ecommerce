import { UpdatableInput } from '@/components/forms'
import { useCreateProductsContext } from '@/shared/providers'
import React, { FC } from 'react'
import { useState } from 'react'

export const CreateFromText: FC = () => {
  const { currentResource, currentSentence } = useCreateProductsContext()

  const [sentences, setSentences] = useState<string[]>([])
  const [currentSentenceId, setCurrentSentenceId] = useState(0)

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
        {sentences.map((sentence, indexSentence) => (
          <UpdatableInput
            isCurrent={currentSentenceId === indexSentence}
            value={sentence}
            key={sentence}
            placeholder="Escribe tu frase"
            onClick={() => {
              setCurrentSentenceId(indexSentence)
              if (sentence) {
                currentSentence.set(sentence)
              }
            }}
            onChange={(value) => {
              setSentences((curr) => {
                const newSentences = curr.map((sentence) => sentence)
                newSentences[indexSentence] = value
                return newSentences
              })
              if (value) {
                currentSentence.set(value)
              }
            }}
            onRemove={() => {
              setSentences((curr) =>
                curr.filter((_, index) => index !== indexSentence)
              )
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
        Agregar frase
      </button>
    </div>
  )
}
