import reducers from './index';
import { createStore } from 'redux';
import Types from "../actions/actionTypes"

describe('Root Reducer Categories', () => {

    let store = createStore(reducers)
    let action = {
       type: Types.GET_CAGEGORIES_SUCCESS,
       payload : {
          'categories' : []
        }
    }

    store.dispatch(action)

    const INITIAL_STATE = {'categories':[]}
    test('loaded correctly', () => {
      expect(store.getState().categories).toEqual(INITIAL_STATE);
    });
  });

  describe('Root Reducer Products', () => {

    let store = createStore(reducers)

    let action = {
      type: Types.GET_CATEGORY_PRODUCT_SUCCESS,
      payload : {
          'category':'smartphones',
         'products' : {}
       }
    }

   store.dispatch(action)

    const INITIAL_STATE = {'smartphones':{}}
    test('loaded correctly', () => {
      expect(store.getState().products).toEqual(INITIAL_STATE);
    });
  });

  describe('Root Reducer preferences CATEGORY_SELECTED', () => {

    let store = createStore(reducers)


    let action = {
      type: Types.CATEGORY_SELECTED,
      payload : {
        'category':'smartphones'
       }
    }

    store.dispatch(action)

    const INITIAL_STATE = {
        'selectedCategory':'smartphones',
        'selectedProduct': {},
        'selectedLanguage': 'English',
        'cart':[]
    }
    test('loaded correctly', () => {
      expect(store.getState().userPreferences).toEqual(INITIAL_STATE);
    });
  });

  describe('Root Reducer preferences LANGUAGE_CHANGED', () => {

    let store = createStore(reducers)


    let action = {
      type: Types.LANGUAGE_CHANGED,
      payload : {
        'language':'English'
       }
    }

    store.dispatch(action)

    const INITIAL_STATE = {
        'selectedCategory':'',
        'selectedProduct': {},
        'selectedLanguage': 'English',
        'cart':[]
    }
    test('loaded correctly', () => {
      expect(store.getState().userPreferences).toEqual(INITIAL_STATE);
    });
  });

  describe('Root Reducer preferences ADD_TO_CART', () => {

    let store = createStore(reducers)


    let action = {
      type: Types.ADD_TO_CART,
      payload : {'category':'category','productID':'1','count':1}
    }

    store.dispatch(action)

    const INITIAL_STATE = {
        'selectedCategory':'',
        'selectedProduct': {},
        'selectedLanguage': 'English',
        'cart':[{'category':'category','productID':'1','count':1}]
    }
    test('loaded correctly', () => {
      expect(store.getState().userPreferences).toEqual(INITIAL_STATE);
    });
  });


  describe('Root Reducer preferences DELETE_FROM_CART', () => {

    let store = createStore(reducers)

    let actionAdd = {
      type: Types.ADD_TO_CART,
      payload : {'category':'category','productID':'1','count':1}
    }

    store.dispatch(actionAdd)


    let actionAdd1 = {
      type: Types.ADD_TO_CART,
      payload : {'category':'category','productID':'2','count':1}
    }

    store.dispatch(actionAdd1)


    let action = {
      type: Types.DELETE_FROM_CART,
      payload : {'category':'category','productID':'1','count':1}
    }

    store.dispatch(action)

    const INITIAL_STATE = {
        'selectedCategory':'',
        'selectedProduct': {},
        'selectedLanguage': 'English',
        'cart':[{'category':'category','productID':'2','count':1}]
    }
    test('loaded correctly', () => {
      expect(store.getState().userPreferences).toEqual(INITIAL_STATE);
    });
  });