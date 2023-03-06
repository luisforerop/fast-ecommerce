import React from 'react'
import styles from './Header.module.css'
import { Logo } from '@/components/icons/Logo'
import Link from 'next/link'
import { CartIcon } from '../../icons/CartIcon'

export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Logo size={40} />
          FAST ECOMMERCE
        </Link>
      </div>
      <nav className={styles.nav}>
        <div className={styles.ecommerceLink}>
          <Link href="/tienda">
            <CartIcon size={30} />
            <span>Nuestras tiendas</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
