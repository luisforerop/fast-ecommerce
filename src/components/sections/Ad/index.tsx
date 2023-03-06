import { Close } from '@/components/icons'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

export const Ad = () => {
  const [showAd, setShowAd] = useState(true)

  if (!showAd) return null

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#FFD814',
        padding: '8px 80px',
        color: 'var(--fe-colors-black-200)',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          display: 'flex',
          gap: '4px',
        }}
      >
        <span>
          Developer, construye tu propio ecommerce usando nuestra api.
        </span>
        <Link
          style={{ fontWeight: '700', color: 'var(--fe-colors-primary)' }}
          href="/dev"
        >
          ¡Pruébala ahora!
        </Link>
      </p>
      <Close onClick={() => setShowAd(false)} />
    </div>
  )
}
