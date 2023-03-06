import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IProductData } from '../models/createProducts'
import { IUserData } from '../models/index'
import { IEcommerceContext } from '../providers/Ecommerce'
import { useGetProducts } from './useGetProducts'

// hacemos un split y un reducer para validar cuantas palabras se necesitan para acumular 14

export const useGetUserProfile = (): IEcommerceContext => {
  const {
    query: { name },
  } = useRouter() as unknown as { query: { name: string | undefined } }

  const [userData, setUserData] = useState<IUserData | null>(null)
  const { products, setProducts } = useGetProducts()

  useEffect(() => {
    if (name) {
      fetch(`http://localhost:4000/dev/getUserData?userName=${name}`)
        .then((res) => res.json())
        .then((data) => {
          const { products: productsFromApi, userInformation } = data as {
            products: IProductData[]
            userInformation: IUserData
          }
          setUserData(userInformation)
          setProducts(productsFromApi)
        })
    }
  }, [name])

  return {
    userData,
    products,
    followers: 20,
  }
}
