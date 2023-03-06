import { useRouter } from 'next/router'
import styles from './MyHome.module.css'
import { Ad } from '../Ad'
export const MyHome = () => {
  const { push } = useRouter()

  return (
    <div className="App">
      <Ad />
      <section className={`${styles.section} ${styles.firstSection}`}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '28px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              lineHeight: '74px',
              color: 'var(--fe-colors-primary)',
            }}
          >
            La plataforma ecommerce para creadores de contenido
          </h1>
          <p
            style={{
              color: 'var(--fe-colors-secondary)',
              fontSize: '24px',
              lineHeight: '28px',
            }}
          >
            Monetiza tu trabajo en solo dos pasos. Crea tu propio ecommerce y
            vende tu merch a tus seguidores, de seguro te lo agradecerán.
          </p>
          <button
            className="button  bg-btn"
            onClick={() => push('/crea-tu-perfil')}
          >
            ¡Empieza ahora!
          </button>
        </div>
        <div className={styles.firstSectionImgContainer}>
          <img
            src="https://res.cloudinary.com/dy7myxpvn/image/upload/v1678071295/urjn22qwf1uc9tyn1bj3.avif"
            alt="Fast ecommerce"
          />
        </div>
      </section>
      <section className={`${styles.section} ${styles.secondSection}`}>
        <h2>¡SÍ!, Solo dos pasos</h2>
        <div>
          <article>
            <h3>Crea tu perfil</h3>
            <p>
              Agrega información relevante para que tus seguidores te
              encuentren. Tu nombre de perfil, una descripción de lo que haces y
              un enlace, puede ser de tus redes sociales
            </p>
          </article>
          <article>
            <h3>Sube imágenes, los productos se hacen solos</h3>
            <p>
              Incluso si no tienes imágenes podrías empezar con frases. Añade
              tus frases insignia y tu seguidores siempre te recordarán
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
