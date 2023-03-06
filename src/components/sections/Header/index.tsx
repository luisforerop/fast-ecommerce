import React from 'react'
import styles from './Header.module.css'
import { Logo } from '@/components/icons/Logo'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <Logo size={40} />
        FAST ECOMMERCE
      </Link>
    </header>
  )
}
