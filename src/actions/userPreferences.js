import Types from "./actionTypes"

export const getSelectedCategory = (category) => {
    return {
        type : Types.CATEGORY_SELECTED,
        payload : {
            category
        }
    }
}   

export const getSelectedLanguage = (language) => {
    return {
        type : Types.LANGUAGE_CHANGED,
        payload : {
            language
        }
    }
}

export const getAddToCart = (product) => {
    return {
        type : Types.ADD_TO_CART,
        payload : product
    }
}

export const getDeleteFromCart = (product) => {
    return {
        type : Types.DELETE_FROM_CART,
        payload : product
    }
}