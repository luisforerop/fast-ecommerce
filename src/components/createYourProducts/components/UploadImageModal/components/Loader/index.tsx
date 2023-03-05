import type { FC } from 'react'

type LoaderProps = {
  loading: boolean
}

export const Loader: FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null

  return <div>Cargando...</div>
}
