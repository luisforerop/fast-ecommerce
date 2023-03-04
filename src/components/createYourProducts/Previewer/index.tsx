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
  const { currentImageName, currentResource, currentSentence } =
    useCreateProductsContext()
  const [mainImageUrl, setMainImageUrl] = useState(
    getMugProductImage({
      imageName: defaultImages.mainProduct,
      resourceType: 'FROM_IMAGE',
    })
  )
  const [effect, setEffect] = useState<string | undefined>('')

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
    <div>
      <h2>Así se verá tu producto</h2>
      <div
        style={{
          display: 'flex',
          width: '300px',
          height: '350px',
          overflow: 'hidden',
          borderRadius: '8px',
        }}
      >
        <img
          src={mainImageUrl}
          alt="Tu producto"
          className={styles.previewerMainImage}
        />
      </div>
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        {products.map(({ alt, src, productType }, index) => (
          <div
            onClick={() => {
              setCurrentProduct(productType)
              setCurrentProductId(index)
            }}
            key={alt}
            style={{
              height: '75px',
              width: '75px',
              display: 'flex',
              overflow: 'hidden',
              borderRadius: '8px',
              border: currentProductId === index ? '1px solid blue' : '',
            }}
          >
            <img
              src={src}
              alt={alt}
              style={{
                height: '75px',
                width: '75px',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
