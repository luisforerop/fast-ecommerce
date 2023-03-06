import { useRouter } from 'next/router'
import { IProductsInfo } from '../models'
import { IEcommerceContext } from '../providers/Ecommerce'
import { useEffect, useState } from 'react'
import { IUserData } from '../models/index'

const src =
  'https://res.cloudinary.com/dy7myxpvn/image/upload/v1677898577/fast-ecommerce/mockups/hxvdkdwolbbuggb9pe4c.jpg'

export const useGetUserProfile = (): IEcommerceContext => {
  const {
    query: { name },
  } = useRouter() as unknown as { query: { name: string } }

  const [userData, setUserData] = useState<IUserData | null>(null)

  useEffect(() => {
    const stringifiedUser = localStorage.getItem('userData')
    try {
      const userData = JSON.parse(stringifiedUser ?? '{}')
      setUserData(userData)
    } catch (_e) {}
  }, [])

  const products: IProductsInfo[] = Array.from({ length: 15 }, (_, i) => ({
    id: `${i}`,
    name: 'Un mug todo gonito',
    price: 10,
    src,
  }))

  return {
    userData,
    products,
    followers: 20,
  }
}
