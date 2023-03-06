import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast ecommervce</title>
        <meta name="description" content="Crea tu ecommerce as a flash!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fast-ecommerce.svg" />
      </Head>
      <div className="App">Esta es la tienda</div>
    </>
  )
}
