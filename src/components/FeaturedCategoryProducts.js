import React from 'react';
import { useSelector } from 'react-redux'
import FeaturedProduct from './FeaturedProduct';
const FeaturedCategoryProducts = () => {

    let categories = useSelector(state => state.categories)
    let products = useSelector(state => state.products)
    if (Object.keys(products).length !== categories.categories.length) {
       return 
    }

    let selectedCategories = categories.categories.slice(0,categories.categories.length > 3 ? 3 : categories.categories.length )
    var currentCategory = ''
    let categoryList = selectedCategories.map(category => {
      return <FeaturedProduct category={category} key={category} />
    } )
    return( 
<>
{categoryList} 
</>
    )
}

export default FeaturedCategoryProducts