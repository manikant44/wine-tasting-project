import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // PRODUCTS  ADD 
  //
  ADD_REQUEST: "winetasting/ADD_REQUEST",
  ADD_SUCCESS: "winetasting/ADD_SUCCESS",
  ADD_ERROR: "winetasting/ADD_ERROR",
  TRANSLATE_REQUEST: "winetasting/TRANSLATE_REQUEST",
  TRANSLATE_SUCCESS: "winetasting/TRANSLATE_SUCCESS",
  TRANSLATE_ERROR: "winetasting/TRANSLATE_ERROR"
}

const initialState = Immutable({
  isPendingAdd: false,
  isTranslateAdd: false,
  products: null,
  translated: {},
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // PRODUCTS ADD
    //
    case types.ADD_REQUEST:
      return state.merge({
        isPendingAdd: true
      })
    case types.ADD_SUCCESS:
      return state.merge({
        isPendingAdd: false,
        products: action.payload.data
      })
    case types.ADD_ERROR:
      return state.merge({
        isPendingAdd: false
      })
    case types.TRANSLATE_REQUEST:
      return state.merge({
        isTranslateAdd: true
      })
    case types.TRANSLATE_SUCCESS:
      return state.merge({
        isTranslateAdd: false,
        translated: {name: action.payload.data}
      })
    case types.TRANSLATE_ERROR:
      return state.merge({
        translated: null
      })
    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // PRODUCTS ADD
  //
  AddRequest: () => ({
    type: types.ADD_REQUEST
  }),
  AddSuccess: ({ data }) => ({
    type: types.ADD_SUCCESS,
    payload: data
  }),
  AddError: () => ({
    type: types.ADD_ERROR
  }),
  AddTranslate: () => ({
    type: types.TRANSLATE_REQUEST
  }),
  TranslateSuccess: ({ data },name) => ({
    type: types.TRANSLATE_SUCCESS,
    payload: data,name
  }),
  TranslateError: () => ({
    type: types.TRANSLATE_ERROR
  }),
}
