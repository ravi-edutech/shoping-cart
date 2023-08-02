import React from "react";
import Types from "../actions/actionTypes"


const INITIAL_STATE = {'categories':[]}

const categoriesReducer = (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case Types.GET_CAGEGORIES_SUCCESS : {
            return  {
                categories : action.payload.categories
            }
        }
        default: {
            return state
        }
    }
}

export default categoriesReducer