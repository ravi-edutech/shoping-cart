import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import LocaleContext from '../context/Locale';
import configureStore from 'redux-mock-store';

import Header from "./Header";


test('Test cart click with items', () => {


    const initialState = {'categories':{'categories':['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration', 'furniture', 'tops', 'womens-dresses', 'womens-shoes', 'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-watches', 'womens-bags', 'womens-jewellery', 'sunglasses', 'automotive', 'motorcycle', 'lighting'] },
    'userPreferences':{
        'cart':[{'category': 'smartphones', 'productID': '1', 'count': 1}]
    }
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
       
        <Provider store={store}>
        <Router>
            <Routes>   
                <Route path="*" element= {<Header />}/>
            </Routes>
        </Router>
        </Provider>
       
    )
    
  const cart = screen.getByTestId('cart')
  expect(cart).toBeVisible()
  fireEvent.click(cart)


});

test('renders the landing page', () => {


    const initialState = {'categories':{'categories':['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration', 'furniture', 'tops', 'womens-dresses', 'womens-shoes', 'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-watches', 'womens-bags', 'womens-jewellery', 'sunglasses', 'automotive', 'motorcycle', 'lighting'] },
    'userPreferences':{
        'cart':[]
    }
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
        <LocaleContext.Provider value='English'>
        <Provider store={store}>
        <Router>
            <Routes>   
                <Route path="*" element= {<Header />}/>
            </Routes>
        </Router>
        </Provider>
        </LocaleContext.Provider>
    )
    
  const headers = screen.getAllByRole('link')
  expect(headers).toHaveLength(5);

  const cart = screen.getByTestId('cart')
  expect(cart).toBeVisible()
  fireEvent.click(cart)

  const english = screen.getByTestId('English')
  expect(english).toBeVisible()
  fireEvent.click(english)

  const german = screen.getByTestId('German')
  expect(german).toBeVisible()
  fireEvent.click(german)

});



test('renders the landing page', () => {


    const initialState = {'categories':{'categories':['smartphones', 'laptops', 'fragrances'] },
    'userPreferences':{
        'cart':[{'category':'category','productID':'1','count':1}]
    }
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
        <LocaleContext.Provider value='German'>
        <Provider store={store}>
        <Router>
            <Routes>   
                <Route path="*" element= {<Header />}/>
            </Routes>
        </Router>
        </Provider>
        </LocaleContext.Provider>
    )


  const cart = screen.getByTestId('cart')
  expect(cart).toBeVisible()
  fireEvent.click(cart)
});