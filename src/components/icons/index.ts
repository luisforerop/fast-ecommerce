import type { SVGProps } from 'react'

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number
  color?: string
  secondaryColor?: string
}

export * from './Check'
export * from './Close'
export * from './EditIcon'
export * from './Image'
export * from './LinkIcon'
export * from './Preview'
export * from './Trash'
export * from './Upload'
