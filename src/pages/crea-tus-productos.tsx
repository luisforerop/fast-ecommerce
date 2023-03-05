import { CreateYourProducts } from '@/components/createYourProducts'
import { CreateProductsContextProvider } from '@/shared/providers'
import Head from 'next/head'

export default function AddYourProducts() {
  return (
    <>
      <Head>
        <title>Fast ecommervce</title>
        <meta name="description" content="Crea tu ecommerce as a flash!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateProductsContextProvider>
        <CreateYourProducts />
      </CreateProductsContextProvider>
    </>
  )
}
