// @flow

import type { BrandType } from '../Types'
import type { ActionType } from '../Types'


const brands = (state : BrandType[] = [], action: ActionType<string>) : BrandType[] => {
  switch (action.type) {
    case 'GET_BRANDS_FULFILLED':
      return action.payload.data
    default:
      return state
  }
}

export default brands