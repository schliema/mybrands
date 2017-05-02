// @flow

type ActionType <T> = {
  type: string,
  payLoad: T
}

const brands = (state : {} = {}, action: ActionType<string>) : {} => {
  return state
}

export default brands