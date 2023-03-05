import { ProductList, SellerInformation } from '@/components/ecommerce'
import { EcommerceContextProvider } from '@/shared/providers'
import Head from 'next/head'

export default function UserEcommerce() {
  return (
    <>
      <Head>
        <title>Fast ecommervce</title>
        <meta name="description" content="Crea tu ecommerce as a flash!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <EcommerceContextProvider>
        <div
          className="App"
          style={{
            padding: '48px 120px',
            width: '100%',
          }}
        >
          <SellerInformation />
          <ProductList />
        </div>
      </EcommerceContextProvider>
    </>
  )
}