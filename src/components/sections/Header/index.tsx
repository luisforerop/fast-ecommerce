import React from 'react'
import styles from './Header.module.css'
import { Logo } from '@/components/icons/Logo'
import Link from 'next/link'
import { CartIcon } from '../../icons/CartIcon'
import { toast } from 'sonner'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export const Header = () => {
  const { query } = useRouter()

  const renderMinicart = useMemo(() => !!query.name, [query])

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
            <span>Visitas nuestras tiendas</span>
          </Link>
          {renderMinicart && (
            <CartIcon
              size={25}
              onClick={() => {
                toast.message('Carrito en camino!', {
                  description: 'Muy pronto estará disponible, espéralo...',
                })
              }}
            />
          )}
        </div>
      </nav>
    </header>
  )
}
