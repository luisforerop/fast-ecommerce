import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { useGetUserProfile } from '../hooks/useGetUserProfile'
import { IProductsInfo } from '../models'

export interface IEcommerceContext {
  userName: string
  description: string
  website: {
    link: string
    description?: string
  }
  imageProfile: string
  products: IProductsInfo[]
  followers: number
}

const EcommerceContext = createContext({} as IEcommerceContext)

export const useEcommerceContext = () => useContext(EcommerceContext)

export const EcommerceContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { Provider } = EcommerceContext
  const context = useGetUserProfile()

  return <Provider value={context}>{children}</Provider>
}
