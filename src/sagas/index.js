import categoriesSagas from "./categories";
import categoryProductSagas from "./products";
import { all } from "redux-saga/effects";
export default function* rootSaga(){
    yield all([
        ...categoriesSagas,...categoryProductSagas
    ])
}