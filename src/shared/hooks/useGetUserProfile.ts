import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { IUserData } from '../models/index'
import { IEcommerceContext } from '../providers/Ecommerce'
import { useGetProducts } from './useGetProducts'

// hacemos un split y un reducer para validar cuantas palabras se necesitan para acumular 14

export const useGetUserProfile = (): IEcommerceContext => {
  const {
    query: { name },
  } = useRouter() as unknown as { query: { name: string } }

  const [userData, setUserData] = useState<IUserData | null>(null)
  const products = useGetProducts()

  useEffect(() => {
    const stringifiedUser = localStorage.getItem('userData')
    try {
      const userData = JSON.parse(stringifiedUser ?? '{}')
      setUserData(userData)
    } catch (_e) {}
  }, [])

  return {
    userData,
    products,
    followers: 20,
  }
}
