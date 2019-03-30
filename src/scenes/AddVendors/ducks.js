import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // VENDORS  ADD 
  //
  ADD_REQUEST: "winetasting/ADD_REQUEST",
  ADD_SUCCESS: "winetasting/ADD_SUCCESS",
  ADD_ERROR: "winetasting/ADD_ERROR"
}

const initialState = Immutable({
  isPendingAdd: false,
  vendor: null
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // VENDORS ADD
    //
    case types.ADD_REQUEST:
      return state.merge({
        isPendingAdd: true
      })
    case types.ADD_SUCCESS:
      return state.merge({
        isPendingAdd: false,
        vendor: action.payload.data
      })
    case types.ADD_ERROR:
      return state.merge({
        isPendingAdd: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // ADD VENDORS
  //
  AddRequest: () => ({
    type: types.ADD_REQUEST
  }),
  AddSuccess: ({data}) => ({
    type: types.ADD_SUCCESS,
    payload: data
  }),
  AddError: () => ({
    type: types.ADD_ERROR
  })
}
