import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import WebFooter from "./components/WebFooter";
import { getCategoriesRequest } from "./actions/categories";
import { getCategoryProductRequest } from "./actions/products";
import { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux'
import { LocaleProvider } from "./context/Locale";
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from "./components/ErrorFallback";
import Cart from "./components/Cart";

function App() {
  
  const dispatch = useDispatch();
  let categories = useSelector(state => state.categories.categories)
  let products = useSelector(state => state.products)
  useEffect(() => {
    dispatch(getCategoriesRequest())
  }, []);

  useEffect(() => {
    if(categories.length > 0 ){
      for (let i = 0; i < categories.length; i++) {
        const category = categories[i]
        dispatch(getCategoryProductRequest(category))
      }
    }  
    
  },[categories])


  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
      }}
      onReset={() => {
          console.log('error reset functionality goes here')
      }}
    >
    <LocaleProvider>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/listing/:category/" element={<ProductListing />}/>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <WebFooter/>
    </Router>
    </LocaleProvider>
    </ErrorBoundary>
  );
}

export default App