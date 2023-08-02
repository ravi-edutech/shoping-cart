import Types from "../actions/actionTypes"
const INITIAL_STATE = {
     
}

const productReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case Types.GET_CATEGORY_PRODUCT_SUCCESS :
            return {
                ...state,
                [action.payload.category]: action.payload.products
              };
        default:{
            return state
        }
    }
}

export default productReducer