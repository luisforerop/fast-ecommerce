import { useRouter } from 'next/router'
import { IProductsInfo } from '../models'
import { IEcommerceContext } from '../providers/Ecommerce'

const src =
  'https://res.cloudinary.com/dy7myxpvn/image/upload/v1677898577/fast-ecommerce/mockups/hxvdkdwolbbuggb9pe4c.jpg'

export const useGetUserProfile = (): IEcommerceContext => {
  const {
    query: { name },
  } = useRouter() as unknown as { query: { name: string } }

  const products: IProductsInfo[] = Array.from({ length: 15 }, (_, i) => ({
    id: `${i}`,
    name: 'Un mug todo gonito',
    price: 10,
    src,
  }))

  return {
    userName: name,
    description: 'Todo es posible si mueves las manitos as a flash',
    profileImage:
      'https://holatelcel.com/wp-content/uploads/2020/09/instagram-foto-de-perfil-4.jpg',
    website: {
      link: 'https://mr-components.com',
      description: 'Mi sitio web',
    },
    products,
    followers: 20,
  }
}
