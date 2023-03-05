import type { FC } from 'react'
import type { IconProps } from './index'

export const Preview: FC<IconProps> = ({ size = 20, ...props }) => {
  return (
    <svg
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 52 52"
      enable-background="new 0 0 52 52"
      xmlSpace="preserve"
      {...props}
    >
      <title>Previsualizar</title>
      <g>
        <path
          d="M51.8,25.1C47.1,15.6,37.3,9,26,9S4.9,15.6,0.2,25.1c-0.3,0.6-0.3,1.3,0,1.8C4.9,36.4,14.7,43,26,43
		s21.1-6.6,25.8-16.1C52.1,26.3,52.1,25.7,51.8,25.1z M26,37c-6.1,0-11-4.9-11-11s4.9-11,11-11s11,4.9,11,11S32.1,37,26,37z"
        />
        <path d="M26,19c-3.9,0-7,3.1-7,7s3.1,7,7,7s7-3.1,7-7S29.9,19,26,19z" />
      </g>
    </svg>
  )
}
