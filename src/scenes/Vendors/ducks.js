import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
    //
    // FETCH_VENDORS
    //
    FETCH_VENDORS_REQUEST: "winetasting/FETCH_VENDORS_REQUEST",
    FETCH_VENDORS_SUCCESS: "winetasting/FETCH_VENDORS_SUCCESS",
    FETCH_VENDORS_ERROR: "winetasting/FETCH_VENDORS_ERROR",

}

const initialState = Immutable({
    isFetchingVendors: false,
    vendors: []
    // pagination: null
})

// Reducer
export default (state = initialState, action) => {
    switch (action.type) {
        //
        // FETCH_VENDORS
        //
        case types.FETCH_VENDORS_REQUEST:
            return state.merge({
                isFetchingVendors: true
            })
        case types.FETCH_VENDORS_SUCCESS:
            return state.merge({
                isFetchingVendors: false,
                vendors: action.payload.vendors,
            })
        case types.FETCH_VENDORS_ERROR:
            return state.merge({
                isFetchingVendors: false,
                vendors: []
            })
        default:
            return state
    }
}

// Actions
export const actions = {
    //
    // FETCH_VENDORS
    //
    fetchVendorsRequest: () => ({
        type: types.FETCH_VENDORS_REQUEST
    }),
    fetchVendorsSuccess: ({ vendors }) => ({
        type: types.FETCH_VENDORS_SUCCESS,
        payload: { vendors }
    }),
    fetchVendorsError: () => ({
        type: types.FETCH_VENDORS_ERROR
    })
}

// Selectors
const vendorsSelector = () => state => state.vendors

const selectIsFetchingVendors = () =>
    createSelector(
        vendorsSelector(),
        vendors => vendors.isFetchingVendors
    )
const selectVendors = () =>
    createSelector(
        vendorsSelector(),
        vendors => vendors.vendors
    )
// const selectCoursePagination = () =>
//   createSelector(
//     coursesSelector(),
//     courses => courses.pagination
//   )

export const selectors = {
    selectIsFetchingVendors,
    selectVendors
}
