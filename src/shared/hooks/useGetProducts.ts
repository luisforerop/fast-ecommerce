import { useState } from 'react'
import { IProductData } from '../models'
import { IProductsInfo } from '../models/createProducts'
import { valueOfProducts } from '../utils'

export const useGetProducts = () => {
  const [products, setProductsState] = useState<IProductsInfo[]>([])

  const setProducts = (products: IProductData[]) => {
    setProductsState(
      products.map(({ id, name, productType, src }) => ({
        id,
        name,
        price: valueOfProducts[productType],
        src,
      }))
    )
  }

  return { products, setProducts }
}
