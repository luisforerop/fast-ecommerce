import { ActionButton } from '@/components/forms'
import { AddIcon } from '@/components/icons/AddIcon'
import { useCreateProductsContext } from '@/shared/providers'
import { FC, useState } from 'react'
import { Sentence } from '../Sentence'
import styles from './CreateFromText.module.css'

export const CreateFromText: FC = () => {
  const { currentResource, currentSentence, sentences } =
    useCreateProductsContext()

  return (
    <div
      className={styles.container}
      style={{
        display: currentResource.value === 'FROM_TEXT' ? 'grid' : 'none',
      }}
    >
      {sentences.value.map((sentence, indexSentence) => (
        <Sentence
          index={indexSentence}
          isCurrent={sentence === currentSentence.value}
        />
      ))}
      <ActionButton
        customClasses={{
          card: styles.card,
        }}
        Icon={AddIcon}
        title="Agregar frase"
        message="Deja volar tu imaginación"
        onClick={() => {
          sentences.set((curr) => {
            const allInputsHaveASentence = !curr.includes('')
            if (allInputsHaveASentence) {
              return [...curr, '']
            }

            return curr
          })
        }}
      />
    </div>
  )
}
