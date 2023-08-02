import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App'

jest.mock('axios');

test('Render App', () => {

    const initialState = {'categories':{'categories':['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration', 'furniture', 'tops', 'womens-dresses', 'womens-shoes', 'mens-shirts', 'mens-shoes', 'mens-watches', 'womens-watches', 'womens-bags', 'womens-jewellery', 'sunglasses', 'automotive', 'motorcycle', 'lighting'] },
    'userPreferences':{
        'cart':[]
    }
    };
    const mockStore = configureStore();
    let store = mockStore(initialState);
    render(
        <Provider store={store}>
        <Router>
            <Routes>   
                <Route path="*" element= {<App />}/>
            </Routes>
        </Router>
        </Provider>
    )
});
