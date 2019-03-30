import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
    //
    // FETCH_PRODUCTS
    //
    FETCH_PRODUCTS_REQUEST: "winetasting/FETCH_PRODUCTS_REQUEST",
    FETCH_PRODUCTS_SUCCESS: "winetasting/FETCH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR: "winetasting/FETCH_PRODUCTS_ERROR",

}

const initialState = Immutable({
    isFetchingProducts: false,
    products: []
    // pagination: null
})

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        //
        // FETCH_PRODUCTS
        //
        case types.FETCH_PRODUCTS_REQUEST:
            return state.merge({
                isFetchingProducts: true
            })
        case types.FETCH_PRODUCTS_SUCCESS:
            return state.merge({
                isFetchingProducts: false,
                products: action.payload.products,
            })
        case types.FETCH_PRODUCTS_ERROR:
            return state.merge({
                isFetchingProducts: false,
                products: []
            })
        default:
            return state
    }
}

// Actions
export const actions = {
    //
    // FETCH_PRODUCTS
    //
    fetchProductsRequest: () => ({
        type: types.FETCH_PRODUCTS_REQUEST
    }),
    fetchProductsSuccess: ({ products }) => ({
        type: types.FETCH_PRODUCTS_SUCCESS,
        payload: { products }
    }),
    fetchProductsError: () => ({
        type: types.FETCH_PRODUCTS_ERROR
    })
}

// Selectors
const productsSelector = () => state => state.products

const selectIsFetchingProducts = () =>
    createSelector(
        productsSelector(),
        products => products.isFetchingProducts
    )
const selectProducts = () =>
    createSelector(
        productsSelector(),
        products => products.products
    )
// const selectCoursePagination = () =>
//   createSelector(
//     coursesSelector(),
//     courses => courses.pagination
//   )

export const selectors = {
    selectIsFetchingProducts,
    selectProducts
}
