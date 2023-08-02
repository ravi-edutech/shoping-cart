import {takeEvery, call, fork, put} from 'redux-saga/effects'
import Types from '../actions/actionTypes'
import * as actions from '../actions/categories'
import * as api from '../apis/categories'
function* getCategories(){
    try {
        const result = yield call(api.getCategories)
        yield put(actions.getCategoriesSuccess({
            categories:result.data
        }))
    }catch(error){
        console.log('categories error : ', error)
    }
}

function* watchGetCategoriesRequest(){
    yield takeEvery(Types.GET_CATEGORIES_REQUEST, getCategories)
}

const categoriesSagas = [
    fork(watchGetCategoriesRequest)
]

export default categoriesSagas