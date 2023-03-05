import { CreateProfile } from '@/components/createYourProfile'
import { CreateProfileContextProvider } from '@/shared/providers/CreateProfile'
import Head from 'next/head'
import { Fragment } from 'react'

export default function CreateProfilePage() {
  return (
    <Fragment>
      <Head>
        <title>Fast ecommervce</title>
        <meta name="description" content="Crea tu ecommerce as a flash!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateProfileContextProvider>
        <CreateProfile />
      </CreateProfileContextProvider>
    </Fragment>
  )
}
