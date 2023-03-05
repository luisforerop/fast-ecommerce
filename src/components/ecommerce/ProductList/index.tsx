import React from 'react'
import styles from './ProductList.module.css'
import { useEcommerceContext } from '@/shared/providers'

export const ProductList = () => {
  const { products } = useEcommerceContext()
  return (
    <div className={styles.container}>
      {products.map(({ id, src, name, price }) => (
        <div
          key={id}
          style={{
            width: '240px',
            height: '320px',
            overflow: 'hidden',
            borderRadius: '8px',
            background: '#f7f7f7',
            boxShadow: ' 5px 5px 6px #ebebeb, -5px -5px 6px #ffffff',
          }}
        >
          <div
            style={{
              width: '240px',
              height: '250px',
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: '240px',
                height: '250px',
                objectFit: 'cover',
              }}
            />
          </div>
          <div
            style={{
              padding: '8px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <span>{name}</span>
            <span>$ {price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
