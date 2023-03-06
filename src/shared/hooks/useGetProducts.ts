import { useEffect, useState } from 'react'
import { IProductData, PossibleProduct } from '../models'
import { IProductsInfo } from '../models/createProducts'
import { DataForSavingType, IUserImage } from '../models/index'
import {
  getPrincipalImageFunction,
  namesOfProducts,
  possibleProducts,
  valueOfProducts,
} from '../utils'

const getProductDataFromSentence = (
  sentence: string,
  productType: PossibleProduct
): IProductData => {
  const id = `${Math.floor(Math.random() * 100654)}`
  const src = getPrincipalImageFunction[productType]({
    resourceType: 'FROM_TEXT',
    sentence,
  })
  return {
    id,
    name: `${namesOfProducts[productType]} - ${sentence}`,
    productType,
    src,
  }
}

const getProductDataFromImage = (
  image: IUserImage,
  productType: PossibleProduct
): IProductData => {
  const id = `${Math.floor(Math.random() * 100654)}`
  const src = getPrincipalImageFunction[productType]({
    resourceType: 'FROM_IMAGE',
    imageName: image.publicId,
  })
  return {
    id,
    name: `${namesOfProducts[productType]} - ${image.originalFilename}`,
    productType,
    src,
  }
}

export const useGetProducts = () => {
  const [products, setProducts] = useState<IProductsInfo[]>([])

  useEffect(() => {
    const stringifiedProducts = localStorage.getItem('productData')
    try {
      const { userImages, userSentences }: DataForSavingType = JSON.parse(
        stringifiedProducts ?? '{}'
      )

      const allProductsFromSentences: IProductData[] = userSentences
        .map((sentence) => {
          const productsFromSentence: IProductData[] = possibleProducts.map(
            (productType) => getProductDataFromSentence(sentence, productType)
          )
          return productsFromSentence
        })
        .flat()

      const allProductsFromImages: IProductData[] = userImages
        .map((image) =>
          possibleProducts.map((productType) =>
            getProductDataFromImage(image, productType)
          )
        )
        .flat()

      const allProducts: IProductData[] = [
        ...allProductsFromImages,
        ...allProductsFromSentences,
      ]

      setProducts(
        allProducts.map(({ id, name, productType, src }) => ({
          id,
          name,
          price: valueOfProducts[productType],
          src,
        }))
      )
    } catch (_e) {}
  }, [])

  return products
}
