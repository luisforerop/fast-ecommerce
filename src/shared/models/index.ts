import type { Dispatch, SetStateAction } from 'react'

export type UploadedImageRensponse = {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: any[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder: string
  access_mode: string
  original_filename: string
}

export interface IUserData {
  userName: string
  description: string
  website: {
    link: string
    description?: string
  }
  profileImage: string
}

export interface IUserImage {
  publicId: string
  tags: any[]
  folder: string
  originalFilename: string
  assetId: string
}

export interface DataForSavingType {
  userImages: IUserImage[] // las imagenes que subio el usuario para ENVIAr a proveedores
  userSentences: string[]
}

export type ContextState<StateType> = {
  value: StateType
  set: Dispatch<SetStateAction<StateType>>
}

export type LiteralObject<ValueType = any> = { [key: string]: ValueType }

export * from './createProducts'
