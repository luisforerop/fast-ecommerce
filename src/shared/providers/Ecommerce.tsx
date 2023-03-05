import type { FC, PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'
import { useGetUserProfile } from '@/shared/hooks'
import type { IProductsInfo, IUserData } from '@/shared/models'

export interface IEcommerceContext extends IUserData {
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
