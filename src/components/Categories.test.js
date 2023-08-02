import React from "react";

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Categories from "./Categories";

describe('Render Category', () => {
    test('renders the landing page', () => {

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
                    <Route path="*" element= {<Categories />}/>
                </Routes>
            </Router>
            </Provider>
        )
        
        const incrediblesPosterImg = screen.getAllByText(/lighting/)
        expect(incrediblesPosterImg).toHaveLength(2);
    
        const lighting = screen.getAllByTestId('lighting')
        expect(lighting).toHaveLength(2);
        fireEvent.click(lighting[0])
    });
})


describe('Render Category', () => {
    test('Render Category', () => {

        const initialState = {'categories':{'categories':[] },
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
                    <Route path="*" element= {<Categories />}/>
                </Routes>
            </Router>
            </Provider>
        )
    });
})
