import { useProfileImage, useUploadImage } from '@/shared/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Fragment, useEffect } from 'react'
import ImageUploading from 'react-images-uploading'

export default function CreateProfile() {
  const { push } = useRouter()
  const { src, previewProfileImages, updateImage } = useProfileImage()
  const { images, uploadImages, uploadedImages } = useUploadImage()

  useEffect(() => {
    const { data: newProfileImage } = uploadedImages[0] ?? {}
    if (newProfileImage) {
      updateImage(newProfileImage.public_id)
    }
  }, [uploadedImages])

  return (
    <Fragment>
      <Head>
        <title>Fast ecommervce</title>
        <meta name="description" content="Crea tu ecommerce as a flash!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <h1>Crea tu cuenta</h1>
        <div
          style={{
            display: 'flex',
            gap: '24px',
          }}
        >
          <ImageUploading
            multiple
            value={images}
            onChange={uploadImages}
            maxNumber={1}
          >
            {({ onImageUpload, dragProps }) => (
              <div
                className={'styles.dropzone'}
                {...dragProps}
                style={{
                  position: 'relative',
                  height: '150px',
                  width: '150px',
                  overflow: 'hidden',
                  borderRadius: '150px',
                  border: '1px solid #DBDBDB',
                  display: 'flex',
                }}
              >
                <img
                  style={{
                    height: '150px',
                    width: '150px',
                    objectFit: 'cover',
                  }}
                  src={src}
                  alt="profile-image"
                  onLoad={() => console.log('onload')}
                  onLoadStart={() => console.log('onload start')}
                />
                <div>Arrastra y suelta para actualizar tu imagen de perfil</div>
                <button onClick={onImageUpload}>✏</button>
              </div>
            )}
          </ImageUploading>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '16px',
            }}
          >
            <input type="text" placeholder="Cómo te llamas?" />
            <input type="text" placeholder="Tu nombre de usuario" />
            <input type="text" placeholder="Agrega una descripción" />
            <input
              type="text"
              placeholder="Agrega el enlace a tu web personal"
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'center',
          }}
        >
          <h2>Elige tu avatar</h2>
          <div
            style={{
              display: 'flex',
              gap: '16px',
            }}
          >
            {previewProfileImages.map(({ onClick, src, effect }) => {
              return (
                <div
                  onClick={onClick}
                  style={{
                    height: '75px',
                    width: '75px',
                    overflow: 'hidden',
                    borderRadius: '150px',
                    border: '3px solid #f7f7f7',
                    boxShadow: '0px 0px 1px 2px #DBDBDB',
                    display: 'flex',
                  }}
                  key={effect}
                >
                  <img src={src} alt={`image with ${effect}`} />
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <button onClick={() => push('/crea-tus-productos')}>
            Crea tus productos
          </button>
        </div>
      </div>
    </Fragment>
  )
}
