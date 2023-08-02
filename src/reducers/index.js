import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import productReducer from "./products";
import userPreferencesReducer from "./userPreferences";

export default combineReducers({
    categories: categoriesReducer, 
    products: productReducer,
    userPreferences: userPreferencesReducer
})  