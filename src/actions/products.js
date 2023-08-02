
import Types from "./actionTypes"

export const getCategoryProductRequest = (category) => {
    return {
        type : Types.GET_CATEGORY_PRODUCT_REQUEST,
        payload: {
            category
        }
    }
}

export const getCategoryProductSuccess = ({category, products}) => {
    return {
        type : Types.GET_CATEGORY_PRODUCT_SUCCESS,
        payload : {
             products,
             category
        }
    }
}