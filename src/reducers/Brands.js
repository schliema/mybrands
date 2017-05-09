// @flow

import type { BrandsType } from '../Types'
import type { ActionType } from '../Types'


const brands = (state : BrandsType = {pending: false, error: null, brands: [], currentbrand: null}, action: ActionType<string>) : BrandsType => {
  switch (action.type) {
    case 'GET_BRANDS_REJECTED':
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case 'GET_BRANDS_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'GET_BRANDS_FULFILLED':
      return {
        ...state,
        pending: false,
        brands: action.payload.data
      }
    case 'GET_ONE_BRAND_REJECTED':
      return {
        ...state,
        pending: false,
        error: action.payload
      }
    case 'GET_ONE_BRAND_PENDING':
      return {
        ...state,
        pending: true
      }
    case 'GET_ONE_BRAND_FULFILLED':
      return {
        ...state,
        pending: false,
        currentbrand: action.payload.data
      }
    default:
      return state
  }
}

export default brands