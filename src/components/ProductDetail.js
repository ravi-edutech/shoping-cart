import React from "react";
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import * as actions from '../actions/userPreferences'
import { useState } from "react";
import { useContext } from 'react';
import LocaleContext from '../context/Locale';
const ProductDetail = ({productID, category, count}) => {

    const [cartCount, setCartCount] = useState(count)
    const [alertState, setAlertState] = useState("none")
    const [alertMaxState, setAlertMaxState] = useState("none")

    const dispatch = useDispatch();
    const selectedLanguage = useContext(LocaleContext)

    let products = useSelector(state => state.products)
    let categoryProducts = products[category]


    if(categoryProducts == undefined){
        return
    }

    let cartProducts = categoryProducts.filter(product => {
        return productID == product.id
    })
    const { title, price, thumbnail, brand, description, stock} = cartProducts[0]

    

    const updateCount = (event) => {
        event.preventDefault()
      
        const type = event.currentTarget.getAttribute("class")

        let updateBy = type == "plus" ? +1 : -1

        const productID = event.currentTarget.getAttribute("alt")
        const category = event.currentTarget.getAttribute("data")

        const updatedCount = cartCount + updateBy

        if (updatedCount > 0 && updatedCount <= stock) {
            setCartCount(cartCount + updateBy)
            dispatch(actions.getDeleteFromCart({'category':category,'productID':productID}));
            dispatch(actions.getAddToCart({'category':category,'productID':productID,'count':cartCount + updateBy}))
        }else{
            handleAlert(updatedCount,stock)
        }
    }

    const handleAlert = (updatedCount,stock) => {
        if(updatedCount > stock || alertMaxState == "block"){
            alertMaxState == "none" ? setAlertMaxState("block") : setAlertMaxState("none")
        }else{
            alertState == "none" ? setAlertState("block") : setAlertState("none")
        }
    }

    const removeProduct = (event) => {
        event.preventDefault()
        dispatch(actions.getDeleteFromCart({'category':category,'productID':productID}));
        handleAlert()
    }

    return(
        <section className="section" id="product">
        
        <div id="id01" style={{display:alertState}} className="modal">
            <span onClick={handleAlert} className="close" title="Close Modal">&times;</span>
            <div className="modal-content">
                <div className="model-container">
                <h1>{selectedLanguage == 'English' ? 'Remove Product' : 'Produkt entfernen'}</h1>
                <p>{selectedLanguage == 'English' ? 'Are you sure to remove this product?' : 'Möchten Sie dieses Produkt wirklich entfernen?'} </p>

                <div className="clearfix">
                    <button type="button" className="cancelbtn" onClick={handleAlert}>{selectedLanguage == 'English' ? 'Keep it' : 'Behalte es'}</button>
                    <button type="button" className="deletebtn" onClick={removeProduct} data-testid='deletebtn'>{selectedLanguage == 'English' ? 'Yes' : 'Ja'}</button>
                </div>
                </div>
            </div>
        </div>

        <div id="id02" style={{display:alertMaxState}} className="modal">
            <span onClick={handleAlert} className="close" title="Close Modal">&times;</span>
            <div className="modal-content" action="">
                <div className="model-container">
                <h1>{selectedLanguage == 'English' ? 'Stock Alert' : 'Produkt entfernen'}</h1>
                <p>{selectedLanguage == 'English' ? 'There are only '.concat(stock, ' products in the store') : 'Es gibt nur '.concat(stock, ' Produkte im Laden')} </p>
                <div className="clearfix">
                    <button type="button" className="singlebtn" onClick={handleAlert}>{selectedLanguage == 'English' ? 'OK' : 'OK'}</button>
                </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                <div className="left-images">
                    <img src={thumbnail} alt="" className="cart-image" />
                </div>
            </div>
            <div className="col-lg-4">
                <div className="right-content">
                    <h4>{title}</h4>
                    <span className="price">${price}</span>
                    <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                    <span>{brand}</span>
                    <div className="quote">
                        <i className="fa fa-quote-left"></i><p>{description}</p>
                    </div>
                    <div className="quantity-content">
                        <div className="left-content">
                            <h6>{selectedLanguage == 'English' ? 'No. of Orders' : 'Anzahl der Bestellungen'} </h6>
                        </div>
                        <div className="right-content">
                            <div className="quantity buttons_added">
                                <input type="button" value="-" className="minus" onClick={updateCount} alt={productID} data={category} data-testid='minus' readOnly/>
                                <input type="number" step="1" min="1" max={stock} name="quantity" value={cartCount} title="Qty" className="input-text qty text" size="4" pattern="" inputMode="" readOnly />
                                <input type="button" value="+" className="plus" onClick={updateCount} alt={productID} data={category} data-testid='plus' readOnly/>
                            </div>
                        </div>
                    </div>
                    <div className="total">
                        <h4>{selectedLanguage == 'English' ? 'Total' : 'Gesamt'}: ${price*cartCount}</h4>
                        <div className="main-border-button"><a href="#">{selectedLanguage == 'English' ? 'Buy Now' : 'Kaufe jetzt'}</a></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default ProductDetail