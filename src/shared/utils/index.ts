type GetImageUrlParams = {
  effects?: string[]
  imageName?: string
  directory?: string
}

export const getUrlImage = ({
  effects = [],
  imageName = 'vtvp1zodhn6ydgowmxeo.png',
  directory = 'v1677729390',
}: GetImageUrlParams) => {
  const URL_BASE = 'https://res.cloudinary.com/dy7myxpvn/image/upload'
  const allEffects = '/' + effects.join('/')
  return `${URL_BASE}${allEffects}/${directory}/${imageName}`
}
