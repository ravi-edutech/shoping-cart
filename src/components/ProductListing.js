import React from "react";
import ProductListingBanner from "./ProductListingBanner";
import FeaturedProduct from "./FeaturedProduct";
import { useParams } from "react-router-dom";

const ProductListing = () => {

    const params = useParams()
  
    return(
        <>
        <ProductListingBanner category={params.category} />
        <FeaturedProduct category={params.category} />
        </>
    )
}

export default ProductListing