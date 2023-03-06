import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { FC, Dispatch, SetStateAction } from 'react'
import {
  ContextState,
  DataForSavingType,
  PossibleProductResource,
  UploadedImageRensponse,
} from '../models'
import { defaultImages, defaultText } from '../constants'
import { useMemo } from 'react'
import { useRouter } from 'next/router'

const uploadedImageFOrTest: UploadedImageRensponse[] = [
  {
    asset_id: 'e9893715784d4708311046a541a40814',
    public_id: 'fast-ecommerce/vund7r5c9oukzwqjemse',
    version: 1677985471,
    version_id: 'edd5b46dd9e736f0d23f579801250e73',
    signature: 'fdc5a54e7c7102ff6d158213d24923515b896dc2',
    width: 941,
    height: 340,
    format: 'png',
    resource_type: 'image',
    created_at: '2023-03-05T03:04:31Z',
    tags: [],
    bytes: 76118,
    type: 'upload',
    etag: '639675473fd851178461d9081a72aba0',
    placeholder: false,
    url: 'http://res.cloudinary.com/dy7myxpvn/image/upload/v1677985471/fast-ecommerce/vund7r5c9oukzwqjemse.png',
    secure_url:
      'https://res.cloudinary.com/dy7myxpvn/image/upload/v1677985471/fast-ecommerce/vund7r5c9oukzwqjemse.png',
    folder: 'fast-ecommerce',
    access_mode: 'public',
    original_filename: 'Captura de pantalla_20221020_071958',
  },
  {
    asset_id: 'e9893715784d4708311046a541a4p814',
    public_id: 'fast-ecommerce/vtvp1zodhn6ydgowmxeo',
    version: 1677985471,
    version_id: 'edd5b46dd9e736f0d23f579801250e73',
    signature: 'fdc5a54e7c7102ff6d158213d24923515b896dc2',
    width: 941,
    height: 340,
    format: 'png',
    resource_type: 'image',
    created_at: '2023-03-05T03:04:31Z',
    tags: [],
    bytes: 76118,
    type: 'upload',
    etag: '639675473fd851178461d9081a72aba0',
    placeholder: false,
    url: 'http://res.cloudinary.com/dy7myxpvn/image/upload/v1677985471/fast-ecommerce/vtvp1zodhn6ydgowmxeo.png',
    secure_url:
      'https://res.cloudinary.com/dy7myxpvn/image/upload/v1677985471/fast-ecommerce/vtvp1zodhn6ydgowmxeo.png',
    folder: 'fast-ecommerce',
    access_mode: 'public',
    original_filename: 'Captura de pantalla_20221020_071958',
  },
]

interface ICreateProductsContext {
  currentResource: ContextState<PossibleProductResource>
  currentImageName: ContextState<string>
  currentSentence: ContextState<string>
  uploadModalIsOpen: ContextState<boolean>
  availableUploads: number
  uploadedImages: ContextState<UploadedImageRensponse[]>
  sentences: ContextState<string[]>
  thereAreInfoForProducts: number
  saveProductsData: () => void
}

const CreateProductsContext = createContext({} as ICreateProductsContext)

export const useCreateProductsContext = () => useContext(CreateProductsContext)

export const CreateProductsContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { push, query } = useRouter()

  const [currentResource, setCurrentResource] =
    useState<PossibleProductResource>('FROM_IMAGE')
  const [currentSentence, setCurrentSentence] = useState(defaultText.sentence)
  const [currentImageName, setCurrentImageName] = useState(
    defaultImages.mainProduct
  )
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(false)
  const [availableUploads, setAvailableUploads] = useState(5)
  const [uploadedImages, setUploadedImages] =
    useState<UploadedImageRensponse[]>(uploadedImageFOrTest)
  const [sentences, setSentences] = useState<string[]>([])
  const thereAreInfoForProducts = useMemo(
    () => sentences.length || uploadedImages.length,
    [sentences, uploadedImages]
  )

  const saveProductsData = () => {
    const productData: DataForSavingType = {
      userSentences: sentences,
      userImages: uploadedImages.map(
        ({ asset_id, folder, original_filename, public_id, tags }) => ({
          assetId: asset_id,
          folder,
          originalFilename: original_filename,
          publicId: public_id,
          tags,
        })
      ),
    }
    localStorage.setItem('productData', JSON.stringify(productData))
    const userName = query.userName
    push(`/tienda/${userName}`)
  }

  useEffect(() => {
    setAvailableUploads(5 - uploadedImages.length)
  }, [uploadedImages])

  const { Provider } = CreateProductsContext
  const context: ICreateProductsContext = {
    currentResource: {
      value: currentResource,
      set: setCurrentResource,
    },
    currentImageName: {
      value: currentImageName,
      set: setCurrentImageName,
    },
    currentSentence: {
      value: currentSentence,
      set: setCurrentSentence,
    },
    uploadModalIsOpen: {
      value: uploadModalIsOpen,
      set: setUploadModalIsOpen,
    },
    availableUploads,
    uploadedImages: {
      value: uploadedImages,
      set: setUploadedImages,
    },
    sentences: {
      value: sentences,
      set: setSentences,
    },
    thereAreInfoForProducts,
    saveProductsData,
  }
  return <Provider value={context}>{children}</Provider>
}
