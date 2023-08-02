import React from "react";
import { render, screen } from '@testing-library/react';
import categoriesReducer from "./categories";
import Types from "../actions/actionTypes";

test('renders the landing page', () => {
    const INITIAL_STATE = {'categories':[]}
    const categories = categoriesReducer(INITIAL_STATE,Types.GET_CAGEGORIES_SUCCESS)
    expect(categories['categories']).toHaveLength(0);
});