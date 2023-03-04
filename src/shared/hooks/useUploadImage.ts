import { useCallback, useState } from 'react'
import { ImageListType } from 'react-images-uploading'
import { UploadedImageRensponse } from '../models'
import { config } from '../constants'

const URL_FOR_UPLOADING =
  'http://api.cloudinary.com/v1_1/dy7myxpvn/image/upload'

interface IUploadedImageData {
  data?: UploadedImageRensponse
  status: 'uploaded' | 'error'
}

export const useUploadImage = () => {
  const [images, setImages] = useState<ImageListType>([])
  const [uploadedImages, setUploadedImages] = useState<IUploadedImageData[]>([])
  const [uploading, setUploading] = useState(false)
  // Implementar una estrucutura de errores en la respuesta como la que tenemos en mkp

  const onChange = (imageList: ImageListType) => {
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

        fetch(URL_FOR_UPLOADING, {
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
          .catch((_e: Error) => resolve({ status: 'error' }))
      })
    })

    Promise.all(sendingImage).then((responsesFromApi) => {
      setUploadedImages(responsesFromApi)
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
