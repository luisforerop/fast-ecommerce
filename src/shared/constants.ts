export const defaultImages = {
  profile: 'fast-ecommerce/vtvp1zodhn6ydgowmxeo.png',
  mainProduct: 'fast-ecommerce/vund7r5c9oukzwqjemse',
}

export const defaultText = {
  sentence: 'A mover las manitos',
}

export const config = {
  uploadPreset: 'fast-ecommerce',
  baseUrl: 'https://res.cloudinary.com/dy7myxpvn/image/upload',
  uploadUrl: 'https://api.cloudinary.com/v1_1/dy7myxpvn/image/upload',
}

export const products = {
  mug: 'fast-ecommerce/mockups/hxvdkdwolbbuggb9pe4c.jpg',
  tShirt: 'fast-ecommerce/mockups/kcpibz5kasmc0fckg6ho.jpg',
  hoddie: 'fast-ecommerce/mockups/d2iou7yli9gz9d9udbhz.jpg',
}

export const overloadEffects = {
  radialize: 'tsetur5vzonlhippww6x',
}

const prod = 'https://yx5yutqvp7.execute-api.us-east-1.amazonaws.com/dev/'
const dev = 'http://localhost:4000/dev'
const URL_BASE_FAST_ECOMMERCE = process.env.NEXT_PUBLIC_DEV ? dev : prod

export const fastEcommerceEndpoints = {
  save: `${URL_BASE_FAST_ECOMMERCE}/saveUser`,
  get: `${URL_BASE_FAST_ECOMMERCE}/getUserData`,
  getUsers: `${URL_BASE_FAST_ECOMMERCE}/getUsers`,
}
