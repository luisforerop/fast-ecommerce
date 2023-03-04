import { config, defaultImages, overloadEffects, products } from '../constants'
import {
  GetProductParamsType,
  GetProductType,
  GetSpecificProductType,
  PossibleProductResource,
} from '../models'

type GetImageUrlParams = {
  effects?: string[]
  imageName?: string
}

export const getUrlImage = ({
  effects = [],
  imageName = defaultImages.profile,
}: GetImageUrlParams) => {
  const allEffects = '/' + effects.join('/')
  return `${config.baseUrl}${allEffects}/${imageName}`
}

export const getMugProductImage: GetSpecificProductType = (params) => {
  const productConfig: GetProductParamsType = {
    overResource: '',
    placement: '',
    product: products.mug,
  }
  if (params.resourceType === 'FROM_IMAGE') {
    productConfig.overResource = params.imageName.replaceAll('/', ':')
    productConfig.placement = `/c_pad,h_200,w_180/l_${overloadEffects.radialize}/e_displace,fl_layer_apply,y_-8/fl_layer_apply,x_-20,y_50/`
  } else if (params.resourceType === 'FROM_TEXT') {
    productConfig.overResource = `text:Arial_25:${params.sentence}/e_distort:arc:-50.0`
    productConfig.placement = 'fl_layer_apply,y_50,x_-10'
  }

  return getProductImage(productConfig)
}

export const getTShirtProductImage: GetSpecificProductType = (params) => {
  const productConfig: GetProductParamsType = {
    overResource: '',
    placement: '',
    product: products.tShirt,
  }

  if (params.resourceType === 'FROM_IMAGE') {
    productConfig.overResource = params.imageName.replaceAll('/', ':')
    productConfig.placement = 'c_pad,w_120/fl_layer_apply,x_0,y_-60'
  } else if (params.resourceType === 'FROM_TEXT') {
    productConfig.overResource = `text:Arial_20:${params.sentence}`
    productConfig.placement = 'fl_layer_apply,y_-100,x_0'
  }

  return getProductImage(productConfig)
}

export const getHoddieProductImage: GetSpecificProductType = (params) => {
  const productConfig: GetProductParamsType = {
    overResource: '',
    placement: '',
    product: products.hoddie,
  }

  if (params.resourceType === 'FROM_IMAGE') {
    productConfig.overResource = params.imageName.replaceAll('/', ':')
    productConfig.placement = 'c_pad,w_120/fl_layer_apply,x_-30,y_-10'
  } else if (params.resourceType === 'FROM_TEXT') {
    productConfig.overResource = `text:Arial_20:${params.sentence}`
    productConfig.placement = 'fl_layer_apply,y_-30,x_-30'
  }

  return getProductImage(productConfig)

  // return `${productConfig.baseUrl}/w_500/l_${overResource}/c_pad,w_120/fl_layer_apply,x_-30,y_-10/${products.hoddie}`
}

export const getProductImage: GetProductType = ({
  overResource,
  placement,
  product,
}) => {
  return `${config.baseUrl}/w_500/l_${overResource}/${placement}/${product}`
}

// https://res.cloudinary.com/dy7myxpvn/image/upload/w_500/l_fast-ecommerce:vund7r5c9oukzwqjemse/c_pad,w_150/fl_layer_apply,x_-30,y_-10/fast-ecommerce/mockups/d2iou7yli9gz9d9udbhz.jpg

// mala
// https://res.cloudinary.com/dy7myxpvn/image/upload/w_500/l_fast-ecommerce:vund7r5c9oukzwqjemse/c_pad,w_120/fl_layer_apply,x_-30,y_-10/c_pad,w_120/fl_layer_apply,x_-30,y_-10/fast-ecommerce/mockups/d2iou7yli9gz9d9udbhz.jpg
