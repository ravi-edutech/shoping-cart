import Types from "./actionTypes"

export const getCategoriesRequest = () => {
    return {
        type : Types.GET_CATEGORIES_REQUEST
    }
}

export const getCategoriesSuccess = ({categories}) => {
    return {
        type : Types.GET_CAGEGORIES_SUCCESS,
        payload : {
            'categories' : categories
        }
    }
}


