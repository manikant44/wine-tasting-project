import { client } from "./API"

/**
 * @returns list of products with products data
 */
export const fetchProducts = () =>
client
    .get(`api/get-products`)
    .then(response => response.data)
    .catch(error => error.data)

    
export const fetchUpdateProducts = (id) => {
 console.log("update API id >>>>>",id)

client
    .put(`/delete-products/${id}`)
    .then(response => {console.log("response", response.data)})
    .catch(error =>  {
        console.log("error", error)    
       })
}

// *
//  * @returns add new products
 
export const addProducts = (newProduct) =>
client
    .post(`api/add-products`,newProduct)
    .then(response => response.data)
    .catch(error => error.data)

/**
 * @returns translate products values
 */
export const translateProducts = (fields, lang) =>
client
    .post(`api/translate`,{data:fields, lang})
    .then(response => response.data)
    .catch(error => error.data)