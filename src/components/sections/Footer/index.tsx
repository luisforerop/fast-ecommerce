import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <section
      style={{
        display: 'flex',
        backgroundColor: 'var(--fe-colors-primary)',
        color: 'var(--fe-colors-gray-50)',
        fontWeight: '700',
        width: '100%',
        padding: '34px 60px',
        justifyContent: 'space-between',
        fontSize: '20px',
      }}
    >
      <p>Developed by @luis_forerop</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span>powered by</span>
        <Link
          href="https://cloudinary.com/"
          style={{
            gap: '4px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            style={{
              height: '24px',
              width: '24px',
              borderRadius: '4px',
            }}
            src="https://cloudinary-res.cloudinary.com/image/upload/website/cloudinary_web_favicon.png"
            alt="Cloudinary"
          />
          <span>Cloudinary</span>
        </Link>
      </div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <Link href="https://github.com/luisforerop/">Github</Link>

        <Link href="mailto:infoluisforerop@gmail.com">Email</Link>
        <Link href="https://www.linkedin.com/in/luisforerop/">LinkedIn</Link>
      </div>
    </section>
  )
}
