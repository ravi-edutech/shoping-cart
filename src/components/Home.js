
import React from "react";
import { useSelector,useDispatch, connect } from 'react-redux'
import Categories from "./Categories";
import FeaturedCategoryProducts from "./FeaturedCategoryProducts";
import Connect from './Connect';


const Home = () => {

    let categories = useSelector(state => state.categories)
    if (categories.categories.length == 0) {
       return 
    }
    return(
        <>
            <Categories />
            <FeaturedCategoryProducts />
            <Connect/>
        </>
    )
}

export default Home