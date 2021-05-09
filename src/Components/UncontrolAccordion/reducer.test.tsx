import { reducer, StateType, TOOGLE_COLLAPSED } from "./reducer";


test('collapsed should be true' , () => {
  const state: StateType = {
    collapsed: false
  }

  const newState = reducer(state, {type: TOOGLE_COLLAPSED})

  expect(newState.collapsed).toBe(true)
})