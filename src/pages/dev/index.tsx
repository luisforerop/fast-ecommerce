import { Logo } from '@/components/icons/Logo'
import Head from 'next/head'
import { Fragment } from 'react'

export default function Developers() {
  return (
    <>
      <Head>
        <title>Fast ecommervce</title>
        <meta name="description" content="Crea tu ecommerce as a flash!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fast-ecommerce.svg" />
      </Head>
      <Fragment>
        <section
          style={{
            padding: '48px 80px ',
            display: 'grid',
            gridTemplateColumns: '3fr 2fr',
            gap: '32px',
            height: '80vh',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'end',
              gap: '48px',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                lineHeight: '64px',
                color: 'var(--fe-colors-primary)',
              }}
            >
              Tú te ocupas del layout, nosotros del resto
            </h1>
            <div
              style={{
                height: '4px',
                width: '300px',
                backgroundColor: 'var(--fe-colors-primary)',
                borderRadius: '4px',
              }}
            />
            <p
              style={{
                fontSize: '24px',
              }}
            >
              Con fast ecommerce api podrás tener acceso a imágenes optimizadas,
              ya sea que las necesites para tu pdp, plp o una miniatura de
              producto. Además, ten acceso exclusivo a nuestro catálogo de
              productos y proveedores (coming soon).
            </p>
          </div>
          <div
            style={{
              width: '100%',
              height: '440px',
              overflow: 'hidden',
              borderRadius: '48px 32px 60px',
            }}
          >
            <img
              style={{
                width: '100%',
                height: '440px',
                objectFit: 'cover',
              }}
              src="https://res.cloudinary.com/dy7myxpvn/image/upload/v1678142423/bq4wivvflee6hx6me1tz.png"
              alt=""
            />
          </div>
        </section>
        <section></section>
      </Fragment>
    </>
  )
}
