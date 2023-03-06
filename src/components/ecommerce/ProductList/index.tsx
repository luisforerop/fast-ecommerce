import { useEcommerceContext } from '@/shared/providers'
import styles from './ProductList.module.css'

export const ProductList = () => {
  const { products } = useEcommerceContext()

  if (!products) return <div>Cargando...</div>

  return (
    <div className={styles.container}>
      {products.map(({ id, src, name, price }) => (
        <div key={id} className={styles.cardContainer}>
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
