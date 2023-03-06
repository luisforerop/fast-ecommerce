import React from 'react'
import { Actions, CreateFromImage, CreateFromText } from '..'
import styles from './Editor.module.css'

export const Editor = () => {
  return (
    <div className={styles.container}>
      <Actions />
      <CreateFromImage />
      <CreateFromText />
    </div>
  )
}
