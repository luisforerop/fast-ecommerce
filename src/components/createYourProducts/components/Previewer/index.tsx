import {
  config,
  defaultImages,
  products as productsSrc,
} from '@/shared/constants'
import { useCreateProductsContext } from '@/shared/providers'
import {
  getHoddieProductImage,
  getMugProductImage,
  getTShirtProductImage,
} from '@/shared/utils'
import { useState, useEffect } from 'react'
import styles from './Previewer.module.css'
import { GetSpecificProductType } from '@/shared/models'

type PossibleProduct = 'MUG' | 'T_SHIRT' | 'HODDIE'

type ProductInfoType = {
  src: string
  alt: string
  productType: PossibleProduct
}

const getPrincipalImageFunction: {
  [key in PossibleProduct]: GetSpecificProductType
} = {
  HODDIE: getHoddieProductImage,
  MUG: getMugProductImage,
  T_SHIRT: getTShirtProductImage,
}

const products: ProductInfoType[] = [
  {
    src: `${config.baseUrl}/${productsSrc.mug}`,
    alt: 'Un hermoso mug',
    productType: 'MUG',
  },
  {
    src: `${config.baseUrl}/${productsSrc.hoddie}`,
    alt: 'Un hermoso hoddie',
    productType: 'HODDIE',
  },
  {
    src: `${config.baseUrl}/${productsSrc.tShirt}`,
    alt: 'Una hermosa camiseta',
    productType: 'T_SHIRT',
  },
]

export const Previewer = () => {
  const {
    currentImageName,
    currentResource,
    currentSentence,
    saveProductsData,
    thereAreInfoForProducts,
  } = useCreateProductsContext()
  const [mainImageUrl, setMainImageUrl] = useState(
    getMugProductImage({
      imageName: defaultImages.mainProduct,
      resourceType: 'FROM_IMAGE',
    })
  )
  const [currentProductId, setCurrentProductId] = useState(0)
  const [currentProduct, setCurrentProduct] = useState<PossibleProduct>('MUG')

  useEffect(() => {
    setMainImageUrl(
      getPrincipalImageFunction[currentProduct]({
        imageName: currentImageName.value,
        resourceType: currentResource.value,
        sentence: currentSentence.value,
      })
    )
  }, [
    currentProduct,
    currentImageName.value,
    currentResource.value,
    currentSentence.value,
  ])

  return (
    <div className={styles.container}>
      <h2>Así se verá tu producto</h2>
      <div className={styles.imagesContainer}>
        <div className={styles.mainImageContainer}>
          <img
            src={mainImageUrl}
            alt="Tu producto"
            className={styles.mainImage}
          />
        </div>
        <div className={styles.productImagesContainer}>
          {products.map(({ alt, src, productType }, index) => (
            <div
              onClick={() => {
                setCurrentProduct(productType)
                setCurrentProductId(index)
              }}
              key={alt}
              className={
                currentProductId === index
                  ? styles.selectProductImage
                  : styles.productImageContainer
              }
            >
              <img src={src} alt={alt} className={styles.productImage} />
            </div>
          ))}
        </div>
      </div>
      <button
        className={
          thereAreInfoForProducts
            ? styles.nextStepButton
            : styles.disabledNextStepButton
        }
        onClick={() => {
          if (!thereAreInfoForProducts) {
            return
          }
          saveProductsData()
        }}
      >
        Crea tu ecommerce!
      </button>
    </div>
  )
}
