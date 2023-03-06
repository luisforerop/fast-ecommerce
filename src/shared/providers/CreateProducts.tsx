import { useRouter } from 'next/router'
import type { FC } from 'react'
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { defaultImages, defaultText } from '../constants'
import {
  ContextState,
  DataForSavingType,
  PossibleProductResource,
  UploadedImageRensponse,
} from '../models'

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
  const [uploadedImages, setUploadedImages] = useState<
    UploadedImageRensponse[]
  >([])
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
