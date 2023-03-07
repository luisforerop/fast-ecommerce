import { useProfileImage, useUploadImage } from '@/shared/hooks'
import { useCreateProfileContext } from '@/shared/providers'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import ImageUploading from 'react-images-uploading'
import {
  ChoiceYourAvatar,
  ProfileImage,
  ProfileInformation,
} from './components'
import styles from './CreateProfile.module.css'
import { Toaster, toast } from 'sonner'
import { ThreeDots } from 'react-loader-spinner'

export const CreateProfile = () => {
  const { push } = useRouter()
  const { src, previewProfileImages, updateImage } = useProfileImage()
  const { images, uploadImages, uploadedImages } = useUploadImage()
  const [userInfoIsMissing, setUserInfoIsMissing] = useState(false)
  const { profileImage, userInformationCompleted, saveUserData } =
    useCreateProfileContext()

  const loaded = useRef<any>()

  useEffect(() => {
    if (userInfoIsMissing && userInformationCompleted) {
      setUserInfoIsMissing(false)
    }
  }, [userInformationCompleted])

  useEffect(() => {
    if (src) {
      profileImage.set(src)

      toast.custom((id) => {
        loaded.current = id
        return (
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="var(--fe-colors-primary)"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        )
      })
    }
  }, [src])

  useEffect(() => {
    const { public_id: newProfileImage } = uploadedImages[0] ?? {}
    if (newProfileImage) {
      updateImage(newProfileImage)
    }
  }, [uploadedImages])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ImageUploading
          multiple
          value={images}
          onChange={uploadImages}
          maxNumber={1}
        >
          {({ onImageUpload, dragProps }) => (
            <ProfileImage
              {...{
                dragProps,
                onImageUpload,
                src,
                loaded,
              }}
            />
          )}
        </ImageUploading>
        <ProfileInformation />
      </div>
      <ChoiceYourAvatar previewProfileImages={previewProfileImages} />
      <div className={styles.footer}>
        {userInfoIsMissing && (
          <span className={styles.footerAd}>
            Debes diligenciar todos los campos para poder continuar
          </span>
        )}
        <button
          className={
            userInformationCompleted
              ? styles.nextStepButton
              : styles.disabledNextStepButton
          }
          onClick={() => {
            if (userInformationCompleted) {
              saveUserData()
              push('/crea-tus-productos')
            } else {
              setUserInfoIsMissing(true)
            }
          }}
        >
          Crea tus productos
        </button>
      </div>
    </div>
  )
}
