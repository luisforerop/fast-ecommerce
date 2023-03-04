export type PossibleProductResource = 'FROM_IMAGE' | 'FROM_TEXT'

/* GET PRODUCTS URL */
export type GetProductType = (params: GetProductParamsType) => string

export type GetProductParamsType = {
  overResource: string
  placement: string
  product: string
}

type BasicProductImageParams = {
  resourceType: PossibleProductResource
  imageName?: string
  sentence?: string
}

interface ProductFromImageParams extends BasicProductImageParams {
  imageName: string
  resourceType: 'FROM_IMAGE'
}

interface ProductFromSentenceParams extends BasicProductImageParams {
  sentence: string
  resourceType: 'FROM_TEXT'
}

export type ProductParams = ProductFromImageParams | ProductFromSentenceParams

export type GetSpecificProductType = (params: ProductParams) => string
