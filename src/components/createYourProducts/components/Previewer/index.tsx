import {
  config,
  defaultImages,
  products as productsSrc,
} from '@/shared/constants'
import { PossibleProduct } from '@/shared/models'
import { useCreateProductsContext } from '@/shared/providers'
import { getMugProductImage, getPrincipalImageFunction } from '@/shared/utils'
import { useEffect, useRef, useState } from 'react'
import { Toaster, toast } from 'sonner'
import styles from './Previewer.module.css'
import { ThreeDots } from 'react-loader-spinner'

type ProductInfoType = {
  src: string
  alt: string
  productType: PossibleProduct
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
    sendUserData: saveProductsData,
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

  const resolveRef = useRef<any>()

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

  useEffect(() => {
    toast.custom((id) => {
      resolveRef.current = id
      return (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="var(--fe-colors-primary)"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )
    })
  }, [mainImageUrl])

  return (
    <div className={styles.container}>
      <Toaster />
      <h2>Así se verá tu producto</h2>
      <div className={styles.imagesContainer}>
        <div className={styles.mainImageContainer}>
          <img
            src={mainImageUrl}
            alt="Tu producto"
            className={styles.mainImage}
            onLoad={() => toast.dismiss(resolveRef.current)}
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
