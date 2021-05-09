type ActionType = {
  type: string
}
export const TOOGLE_COLLAPSED = 'TOOGLE_COLLAPSED'

export const reducer = (state: boolean, action: ActionType) => {
  switch (action.type) {
    case TOOGLE_COLLAPSED:
      return !state
    default:
      return state
  }
}