import { Header } from '@/components/sections'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { useRouter } from 'next/router'
import {
  CreateProductsContextProvider,
  CreateProfileContextProvider,
} from '@/shared/providers'

const routesWithProviders = ['/crea-tu-perfil', '/crea-tus-productos']

export default function App({ Component, pageProps }: AppProps) {
  const { route } = useRouter()

  if (!routesWithProviders.includes(route)) {
    return (
      <Fragment>
        <Header />
        <Component {...pageProps} />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <Header />
      <CreateProfileContextProvider>
        <CreateProductsContextProvider>
          <Component {...pageProps} />
        </CreateProductsContextProvider>
      </CreateProfileContextProvider>
    </Fragment>
  )
}
