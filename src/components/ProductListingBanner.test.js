import React from "react";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import LocaleContext from '../context/Locale';
import ProductListingBanner from "./ProductListingBanner";

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
                <Route path="*" element= {<ProductListingBanner />}/>
            </Routes>
        </Router>
        </Provider>
        </LocaleContext.Provider>
    )
    // render(<ProductListingBanner/>)
    
  const headers = screen.getAllByRole('heading')
  expect(headers).toHaveLength(1);
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
    <LocaleContext.Provider value='German'>
      <Provider store={store}>
      <Router>
          <Routes>   
              <Route path="*" element= {<ProductListingBanner />}/>
          </Routes>
      </Router>
      </Provider>
      </LocaleContext.Provider>
  )
  // render(<ProductListingBanner/>)
  
});