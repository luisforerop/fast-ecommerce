import { Card } from '@/components/forms'
import { EditIcon, Preview, Trash } from '@/components/icons'
import { SaveIcon } from '@/components/icons/SaveIcon'
import { useCreateProductsContext } from '@/shared/providers'
import { FC, Fragment, MouseEventHandler } from 'react'
import { useEffect, useState } from 'react'
import styles from './Sentence.module.css'

type SentenceProps = {
  isCurrent: boolean
  index: number
}

const messages = {
  empty: 'Debes escribir una frase',
  current: 'Previsualizando frase',
}

export const Sentence: FC<SentenceProps> = ({ isCurrent, index }) => {
  const { sentences, currentSentence } = useCreateProductsContext()
  const [inputValue, setInputValue] = useState<string>('')
  const [editing, setEditing] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    setInputValue(sentences.value[index])
  }, [index, sentences.value])

  useEffect(() => {
    if (isCurrent) {
      setMessage(messages.current)
    } else {
      setMessage('')
    }
  }, [isCurrent])

  const remove = () => {
    currentSentence.set('a mover las manitas')
    sentences.set((curr) =>
      curr.filter((_, currentIndex) => currentIndex !== index)
    )
  }

  const preview = () => {
    currentSentence.set(inputValue)
  }

  const saveChanges = () => {
    if (!inputValue) {
      setMessage(messages.empty)
      setEditing(true)
      return
    }

    setEditing(false)
    sentences.set((curr) => {
      const newSentences = curr.map((sentence) => sentence)
      newSentences[index] = inputValue
      return newSentences
    })
    preview()
  }

  const edit = () => setEditing(true)

  return (
    <Card customClass={isCurrent ? styles.currentSentence : styles.container}>
      <div className={styles.header}>
        <div>{message}</div>
        <div className={styles.actionsContainer}>
          <Trash onClick={remove} />
          {editing ? (
            <SaveIcon onClick={saveChanges} />
          ) : (
            <EditIcon onClick={edit} />
          )}
          <Preview onClick={preview} />
        </div>
      </div>
      <div className={styles.sentenceZoneContainer}>
        {editing ? (
          <textarea
            onBlur={(event) => {
              if (!event.target.value) {
                setMessage(messages.empty)
              } else {
                saveChanges()
              }
            }}
            className={styles.textArea}
            placeholder="Escribe tu frase"
            onChange={(event) => {
              setInputValue(event.target.value.replace(/[^0-9A-ZÑ \n]/gi, ''))
            }}
            autoFocus
            value={inputValue}
          />
        ) : (
          <Fragment>
            {inputValue.split('\n').map((value) => (
              <p className={styles.sentenceArea} onClick={edit}>
                {value}
              </p>
            ))}
          </Fragment>
        )}
      </div>
    </Card>
  )
}
