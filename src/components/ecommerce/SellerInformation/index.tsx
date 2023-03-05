import { LinkIcon } from '@/components/icons'
import { useEcommerceContext } from '@/shared/providers'
import React from 'react'

export const SellerInformation = () => {
  const {
    userName,
    description,
    imageProfile,
    website,
    products: productImages,
    followers,
  } = useEcommerceContext()
  return (
    <div
      className="Header"
      style={{
        padding: '0 32px',
        display: 'flex',
        gap: '36px',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: '200px',
          minHeight: '200px',
          width: '200px',
          minWidth: '200px',
          overflow: 'hidden',
          borderRadius: '8px',
          backgroundColor: '#F7F7F7',
        }}
      >
        <img
          style={{
            height: '200px',
            width: '200px',
            objectFit: 'cover',
          }}
          src={imageProfile}
          alt={`Una foto de ${userName}`}
        />
      </div>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '64px',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              lineHeight: '48px',
              margin: 0,
              padding: 0,
            }}
          >
            {userName}
          </h1>
          <button
            style={{
              padding: '4px 16px',
              fontSize: '16px',
              backgroundColor: 'var(--fe-colors-emphasis)',
              border: 'none',
              borderRadius: '30px',
              color: 'var(--fe-colors-white)',
              fontWeight: '700',
            }}
          >
            Seguir
          </button>
        </section>

        <section>
          <p style={{ fontSize: '24px' }}>{description}</p>
        </section>
        <section>
          <a
            href={website.link}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '16px',
              color: 'var(--fe-colors-link)',
            }}
          >
            <LinkIcon />
            <span>{website.description ?? 'Mi sitio web'}</span>
          </a>
        </section>
        <section
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '64px',
            fontSize: '18px',
          }}
        >
          <span>{`${productImages.length} productos`}</span>
          <span>{`${followers} seguidores`}</span>
        </section>
      </div>
    </div>
  )
}
