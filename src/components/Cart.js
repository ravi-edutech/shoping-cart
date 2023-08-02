import React from "react";
import ProductDetail from "./ProductDetail";
import { useSelector } from 'react-redux'

const Cart = () => {

    let cart = useSelector(state => state.userPreferences.cart)
    let sortedCart = cart.sort((a,b)=> a.productID-b.productID)  
    let cartList = sortedCart.map(item => {
        return  <ProductDetail key={item.productID} {...item} />
    } )

    return(
        <>
        {cartList}
        </>
    )
}

export default Cart