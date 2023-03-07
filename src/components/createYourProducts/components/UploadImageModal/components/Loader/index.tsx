import type { FC } from 'react'
import { Dna } from 'react-loader-spinner'

type LoaderProps = {
  loading: boolean
  size?: number
}

export const Loader: FC<LoaderProps> = ({ loading, size = 500 }) => {
  if (!loading) return null

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <Dna
        visible={true}
        height={size}
        width={size}
        ariaLabel="dna-loading"
        wrapperClass="dna-wrapper"
      />
    </div>
  )
}
