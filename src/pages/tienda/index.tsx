import { Loader } from '@/components/createYourProducts/components/UploadImageModal/components/Loader'
import { fastEcommerceEndpoints } from '@/shared/constants'
import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface ISeller {
  id: string
  userName: string
  profileImage: string
}

export default function Store() {
  const [sellers, setSellers] = useState<ISeller[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${fastEcommerceEndpoints.getUsers}?width=250`)
      .then((res) => res.json())
      .then(({ users }) => {
        setSellers(users)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loader loading />

  return (
    <>
      <Head>
        <title>Fast ecommervce</title>
        <meta name="description" content="Crea tu ecommerce as a flash!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fast-ecommerce.svg" />
      </Head>
      <div
        className="App"
        style={{
          padding: '48px 80px ',
        }}
      >
        <h2
          style={{
            margin: 'auto',
            width: '100%',
            textAlign: 'center',
            fontWeight: '400',
            color: 'var(--fe-colors-black-100)',
          }}
        >
          Encuentra a tu creador favorito
        </h2>
        <div
          style={{
            display: 'grid',
            justifyContent: 'space-between',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '32px',
            padding: '32px 0',
          }}
        >
          {sellers.map(({ id, profileImage, userName }) => (
            <Link key={id} href={`/tienda/${userName}`}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '260px',
                  alignItems: 'center',
                  overflow: 'hidden',
                  borderRadius: '8px',
                  border: '1px solid #ededed',
                }}
              >
                <div
                  style={{
                    height: '200px',
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                  }}
                >
                  <img
                    src={profileImage}
                    alt=""
                    style={{
                      height: '200px',
                      width: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <p
                  style={{
                    padding: '8px 0',
                    color: 'var(--fe-colors-black-100)',

                    borderTop: '1px solid #ededed',
                  }}
                >
                  {userName}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
