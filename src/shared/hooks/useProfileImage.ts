import { useCallback, useEffect, useState } from 'react'
import { getUrlImage } from '../utils'
import { defaultImages } from '../constants'

type GetUrlProfileImageParams = {
  effect?: string
  imageName?: string
  directory?: string
  typeImage?: 'profile' | 'preview'
}

const effects = ['e_cartoonify', 'e_pixelate:5', 'e_sepia', 'e_art:audrey']

const getUrlProfileImage = ({
  imageName,
  effect = '',
  typeImage,
}: GetUrlProfileImageParams) => {
  const allEffects = [
    typeImage === 'preview' ? 'c_scale,w_75' : 'c_scale,w_150',
    'r_150',
    effect,
  ].filter((effect) => !!effect)
  return getUrlImage({
    imageName: imageName ?? defaultImages.profile,
    effects: allEffects,
  })
}

type PreviewProfileImageType = {
  onClick: () => void
  src: string
  effect: string
}

export const useProfileImage = () => {
  const [src, setSrc] = useState(getUrlProfileImage({}))
  const [imageName, setImageName] = useState(defaultImages.profile)
  const [imageEffect, setImageEffect] = useState('')
  const [previewProfileImages, setPreviewProfileImages] = useState<
    PreviewProfileImageType[]
  >([])

  const generatorOnClickPreviewImage = useCallback(
    (effect: string) => () => {
      setImageEffect(effect)
    },
    []
  )

  const updateImage = useCallback((newImageName: string) => {
    setImageName(newImageName)
  }, [])

  useEffect(() => {
    const imagesSrc: PreviewProfileImageType[] = effects.map((effect) => ({
      onClick: generatorOnClickPreviewImage(effect),
      src: getUrlProfileImage({ typeImage: 'preview', effect, imageName }),
      effect,
    }))

    setPreviewProfileImages(imagesSrc)

    setSrc(
      getUrlProfileImage({
        typeImage: 'profile',
        effect: imageEffect,
        imageName,
      })
    )
    console.log({ imageName, imageEffect })
  }, [imageName, imageEffect])

  return {
    src,
    previewProfileImages,
    updateImage,
  }
}
