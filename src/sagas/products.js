import {takeEvery, call, fork, put} from 'redux-saga/effects'
import Types from '../actions/actionTypes'
import * as actions from '../actions/products'
import * as api from '../apis/products'

function* getCategoryProduct(action){
    try {
        const result = yield call(api.getCategoryProducts,action.payload.category)
        yield put(actions.getCategoryProductSuccess({
            products : result.data.products,
            category : action.payload.category
        }))
    }catch(error){
        console.log('product error : ', error)
    }
}

function* watchGetCategoryProductRequest(){
    yield takeEvery(Types.GET_CATEGORY_PRODUCT_REQUEST, getCategoryProduct)
}

const categoryProductSagas = [
    fork(watchGetCategoryProductRequest)
]

export default categoryProductSagas