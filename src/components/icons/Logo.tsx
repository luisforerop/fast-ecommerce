import React, { FC } from 'react'
import { IconProps } from './index'

export const Logo: FC<IconProps> = ({ size = 20 }) => {
  return (
    <svg
      fill="currentColor"
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      id="thunder"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color"
    >
      <path
        id="primary"
        d="M18.82,9.18A2,2,0,0,0,17,8H15.19l1.33-3.26a2,2,0,0,0-.19-1.84A2.06,2.06,0,0,0,14.62,2H10.28A2,2,0,0,0,8.37,3.27l-3.23,8a2,2,0,0,0,.2,1.83,2.06,2.06,0,0,0,1.71.9H9.81L8,20.74a1,1,0,0,0,.5,1.15A1.12,1.12,0,0,0,9,22a1,1,0,0,0,.76-.35l8.8-10.37A2,2,0,0,0,18.82,9.18Z"
      ></path>
    </svg>
  )
}
