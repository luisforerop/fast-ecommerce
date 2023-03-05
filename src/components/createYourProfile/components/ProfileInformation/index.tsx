import { useCreateProfileContext } from '@/shared/providers'
import { ChangeEvent } from 'react'
import styles from './ProfileInformation.module.css'

export const ProfileInformation = () => {
  const { description, userName, webSiteLink, webSiteName } =
    useCreateProfileContext()

  const inputs = [
    {
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        userName.set(event.target.value),
      placeholder: 'Tu nombre de usuario *',
      value: userName.value,
      className: styles.userName,
    },
    {
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        description.set(event.target.value),
      placeholder: 'Agrega una descripción *',
      value: description.value,
      className: styles.description,
    },
    {
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        webSiteLink.set(event.target.value),
      placeholder: 'Agrega un enlace personal (instagram, github, tu blog) *',
      value: webSiteLink.value,
      className: styles.webSiteLink,
    },
    {
      onChange: (event: ChangeEvent<HTMLInputElement>) =>
        webSiteName.set(event.target.value),
      placeholder: '¿De qué es el enlace?',
      value: webSiteName.value,
      className: styles.webSiteName,
    },
  ]
  return (
    <div className={styles.container}>
      {inputs.map((input, index) => (
        <input
          {...input}
          type="text"
          key={index}
          className={`${styles.input} ${input.className}`}
        />
      ))}
    </div>
  )
}
