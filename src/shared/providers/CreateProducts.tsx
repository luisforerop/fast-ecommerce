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
import {
  defaultImages,
  defaultText,
  fastEcommerceEndpoints,
} from '../constants'
import { useCreateProfileContext } from '@/shared/providers'
import { IDataForSaving } from '../models/index'
import {
  ContextState,
  IResourcesForProducts,
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
  sendUserData: () => void
}

const CreateProductsContext = createContext({} as ICreateProductsContext)

export const useCreateProductsContext = () => useContext(CreateProductsContext)

export const CreateProductsContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { push } = useRouter()
  const { userName, getUserInformation } = useCreateProfileContext()

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

  const sendUserData = () => {
    const resourcesForProducts: IResourcesForProducts = {
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
    const body: IDataForSaving = {
      resourcesForProducts,
      userInformation: getUserInformation(),
    }
    var headers = new Headers()
    headers.append('Content-Type', 'application/json')
    const config: RequestInit = {
      body: JSON.stringify(body),
      method: 'POST',
      headers,
    }

    fetch(fastEcommerceEndpoints.save, config)
      .then((res) => res.json())
      .then((data) => {
        push(`/tienda/${userName.value}`)
      })
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
    sendUserData,
  }
  return <Provider value={context}>{children}</Provider>
}
