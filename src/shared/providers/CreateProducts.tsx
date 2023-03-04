import { PropsWithChildren, createContext, useContext, useState } from 'react'
import type { FC, Dispatch, SetStateAction } from 'react'
import { PossibleProductResource } from '../models'
import { defaultImages, defaultText } from '../constants'

type ContextState<StateType> = {
  value: StateType
  set: Dispatch<SetStateAction<StateType>>
}

interface ICreateProductsContext {
  currentResource: ContextState<PossibleProductResource>
  currentImageName: ContextState<string>
  currentSentence: ContextState<string>
  uploadModalIsOpen: ContextState<boolean>
}

const CreateProductsContext = createContext({} as ICreateProductsContext)

export const useCreateProductsContext = () => useContext(CreateProductsContext)

export const CreateProductsContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [currentResource, setCurrentResource] =
    useState<PossibleProductResource>('FROM_IMAGE')
  const [currentSentence, setCurrentSentence] = useState(defaultText.sentence)
  const [currentImageName, setCurrentImageName] = useState(
    defaultImages.mainProduct
  )
  const [uploadModalIsOpen, setUploadModalIsOpen] = useState(true)

  const { Provider } = CreateProductsContext
  const context: ICreateProductsContext = {
    currentResource: {
      value: currentResource,
      set: (currentResource) => setCurrentResource(currentResource),
    },
    currentImageName: {
      value: currentImageName,
      set: (imageName) => setCurrentImageName(imageName),
    },
    currentSentence: {
      value: currentSentence,
      set: (currentSentence) => setCurrentSentence(currentSentence),
    },
    uploadModalIsOpen: {
      value: uploadModalIsOpen,
      set: setUploadModalIsOpen,
    },
  }
  return <Provider value={context}>{children}</Provider>
}
