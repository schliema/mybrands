

export type BrandType = {
  index: number,
  name: string,
  imageLocation: string
}

export type BrandsType = {
  brands: BrandType[]
}

export type ActionType <T> = {
  type: string,
  payload: T
}