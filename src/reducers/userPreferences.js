import Types from "../actions/actionTypes"


const INITIAL_STATE = {
    'selectedCategory':'',
    'selectedProduct': {},
    'selectedLanguage': 'English',
    'cart':[]
}

const userPreferencesReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case Types.CATEGORY_SELECTED : {
            return  {
                ...state,
                selectedCategory : action.payload.category
            }
        }
        case Types.LANGUAGE_CHANGED: {
            return {
                ...state,
                selectedLanguage: action.payload.language
            }
        }
        case Types.ADD_TO_CART : {
            return {
                ...state, 
                cart : [...state.cart,action.payload]
            }
        }
        case Types.DELETE_FROM_CART : {
            return {
                ...state,
                cart: state.cart.filter((item) => {
                    if(item.category.toString() == action.payload.category.toString() && item.productID.toString() == action.payload.productID.toString()){
                        return false
                    }
                    return true
                } )
            };
        }
        default: {
            return state
        }
    }
}

export default userPreferencesReducer