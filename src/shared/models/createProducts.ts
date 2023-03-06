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

export interface IProductsInfo {
  name: string
  src: string
  price: number
  id: string
}

// lo que se debe cargar en el contexto
// desde un hook se parsea la información y se recupera el resto de valores.

export type PossibleProduct = 'MUG' | 'T_SHIRT' | 'HODDIE'

export interface IProductData {
  productType: PossibleProduct // con esto se consulta el valor del producto
  name: string
  src: string // se mapean en el back
  id: string // id generado en la db
}
