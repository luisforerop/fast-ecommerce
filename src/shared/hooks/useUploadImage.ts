import { useCallback, useState } from 'react'
import { ImageListType, ImageType } from 'react-images-uploading'
import { UploadedImageRensponse } from '../models'
import { config } from '../constants'

const URL_FOR_UPLOADING =
  'http://api.cloudinary.com/v1_1/dy7myxpvn/image/upload'

interface IUploadedImageData {
  rawImage?: ImageType
  data?: UploadedImageRensponse
  status: 'uploaded' | 'error'
}

export const useUploadImage = () => {
  const [images, setImages] = useState<ImageListType>([])
  const [uploadedImages, setUploadedImages] = useState<
    UploadedImageRensponse[]
  >([])
  const [uploading, setUploading] = useState(false)
  // Implementar una estrucutura de errores en la respuesta como la que tenemos en mkp
  // Implementar mensaje de error en caso de que las imagenes no se hayan cargado correctamente

  const onChange = (imageList: ImageListType) => {
    console.log(process.env.NEXT_PUBLIC_URL_FOR_UPLOADING)
    setImages(imageList)
  }

  const onUpload = useCallback(() => {
    uploadImages(images)
  }, [images])

  const uploadImages = (imagesForUploading: ImageListType) => {
    console.log(imagesForUploading)

    setUploading(true)
    const sendingImage = imagesForUploading.map((image) => {
      return new Promise<IUploadedImageData>((resolve) => {
        const imageForUploading = new FormData()
        imageForUploading.append('file', image.file as Blob)
        imageForUploading.append('upload_preset', config.uploadPreset)
        imageForUploading.append('timestamp', `${Date.now() / 1000}`)
        imageForUploading.append('api_key', '563122958277756')

        fetch(process.env.NEXT_PUBLIC_URL_FOR_UPLOADING!, {
          method: 'POST',
          body: imageForUploading,
        })
          .then(async (res) => {
            if (!res.ok) {
              return resolve({ status: 'error' })
            }
            const data: UploadedImageRensponse = await res.json()
            return resolve({
              status: 'uploaded',
              data,
            })
          })
          .catch((_e: Error) => resolve({ status: 'error', rawImage: image }))
      })
    })

    Promise.all(sendingImage).then((responsesFromApi) => {
      const imagesUploadedCorrectly = responsesFromApi
        .filter(({ status, data }) => status === 'uploaded' && !!data)
        .map(({ data }) => data!)

      setUploadedImages(imagesUploadedCorrectly)
    })
  }

  return {
    images,
    uploading,
    uploadedImages,
    onChange,
    onUpload,
    uploadImages,
  }
}
