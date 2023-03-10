import type { FC } from 'react'
import type { IconProps } from './index'

export const Upload: FC<IconProps> = ({ size = 20 }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      id="magicoon-Filled"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cargar</title>
      <g>
        <path
          fill="currentColor"
          data-name="upload-Filled"
          d="M17,10.48H14.52v.53a2.5,2.5,0,1,1-5,0v-.53H7a4.507,4.507,0,0,0-4.5,4.5v1A4.507,4.507,0,0,0,7,20.48H17a4.5,4.5,0,0,0,4.5-4.5v-1A4.5,4.5,0,0,0,17,10.48Zm0,5.75a1.25,1.25,0,1,1,1.26-1.25A1.242,1.242,0,0,1,17,16.23ZM15.73,7.72a1,1,0,0,1-1.41,0l-1.3-1.3v4.59a1,1,0,1,1-2,0V6.42L9.73,7.72A1,1,0,0,1,8.32,6.3l3-3a1,1,0,0,1,1.41,0l3,3A1.008,1.008,0,0,1,15.73,7.72Z"
        />
      </g>
    </svg>
  )
}
