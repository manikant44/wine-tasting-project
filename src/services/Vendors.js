import { client } from "./API"

/**
 * @returns list of vendors wit vendors data
 */
export const fetchVendors = () =>
client
    .get(`api/get-registered-vendors`)
    .then(response => response.data)


/**
 * @returns add new vendors
 */
export const addVendors = ({name, email, address1, address2, city, country}) =>
client
    .post(`api/add-vendor`, {name, email, address1, address2, city, country})
    .then(response => response.data)
    .catch(error => error.data)