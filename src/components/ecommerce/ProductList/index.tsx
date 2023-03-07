import { useEcommerceContext } from '@/shared/providers'
import styles from './ProductList.module.css'
import { Toaster, toast } from 'sonner'
import { Loader } from '@/components/createYourProducts/components/UploadImageModal/components/Loader'

export const ProductList = () => {
  const { products } = useEcommerceContext()

  const promise = () => new Promise((resolve) => setTimeout(resolve, 2000))

  if (!products) return <Loader loading />

  return (
    <div className={styles.container}>
      {products.map(({ id, src, name, price }) => (
        <div
          key={id}
          className={styles.cardContainer}
          onClick={() => {
            toast.promise(promise, {
              loading: `Agregando ${name} al carrito`,
              success: `Producto agregado`,
              error: 'Error',
            })
          }}
        >
          <div className={styles.cardImageContainer}>
            <img src={src} alt="" className={styles.cardImage} />
          </div>
          <div className={styles.footerCard}>
            <span className={styles.productName}>{name}</span>
            <span>$ {price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
