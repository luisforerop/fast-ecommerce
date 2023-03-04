import { CreateFromImage, CreateFromText } from '@/components'
import { Actions } from '@/components/createYourProducts/Actions'
import { Previewer } from '@/components/createYourProducts/Previewer'
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
        <div className="App">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            <div>
              <Actions />
              <CreateFromImage />
              <CreateFromText />
            </div>
            <div>
              <Previewer />
            </div>
          </div>
          <button>Crea tu ecommerce!</button>
        </div>
      </CreateProductsContextProvider>
    </>
  )
}
