
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './Header.css'

import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getCategoriesRequest } from "../actions/categories";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CapitalizedH2, LinkSpan } from './common/StickyHeader';
import * as actions from '../actions/userPreferences'
import { useContext } from 'react';
import LocaleContext from '../context/Locale';
import { useState } from 'react';
const Header = () => {

    const dispatch = useDispatch();


    let categories = useSelector(state => state.categories.categories)
    let cart = useSelector(state => state.userPreferences.cart)
    const [alertState, setAlertState] = useState("none")
    const selectedLanguage = useContext(LocaleContext)
    const navigate = useNavigate()
    let selectedCategories = categories.slice(0,categories.length > 3 ? 3 : categories.length )
    let categoryList = selectedCategories.map(category => {
        return <li className="scroll-to-section" key={category}><Link to={`#${category}`} >{category}</Link></li>
    } )

    const changeLanguageHandler = (event) => {
        const currentLanguage = event.currentTarget.getAttribute('alt')
        const newLanguage = currentLanguage == 'English' ? 'German' : 'English'
        dispatch(actions.getSelectedLanguage(newLanguage))
    }

    const cartClicked = (event) => {
        if (cart.length > 0){
            navigate(`/cart`)
        }else{
            handleAlert()
        }
    }

    const cartCount = () => {
        let count = cart.reduce((accomulator = 0, currentValue) => {
            return accomulator + currentValue.count
        },0)
        return count
    }


    const handleAlert = () => {
        alertState == "none" ? setAlertState("block") : setAlertState("none")
    }

    return(
        <header className="header-area header-sticky">
        <div id="id01" data-testid='id01' style={{display:alertState}} className="modal">
            <span onClick={handleAlert} className="close" title="Close Modal">&times;</span>
            <div className="modal-content" action="">
                <div className="model-container">
                <h1>{selectedLanguage == 'English' ? 'Empty Cart' : 'Leerer Warenkorb'}</h1>
                <div className="clearfix">
                    <button type="button" className="singlebtn" onClick={handleAlert}>{selectedLanguage == 'English' ? 'Keep Shoping' : 'Shoppen Sie weiter'}</button>
                </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <Link to="/" className="logo">
                            <img src={require('../assets/logo.png')} />
                        </Link>
                        <ul className="nav">
                            <li className="submenu">
                                <a href="javascript:void(0)">{selectedLanguage}</a>
                                <ul>
                                    <li><Link onClick={changeLanguageHandler} alt="German" data-testid='German'>English</Link></li>
                                    <li><Link onClick={changeLanguageHandler} alt="English" data-testid='English'>German</Link></li>
                                </ul>
                            </li>
                            <li className="scroll-to-section"><LinkSpan onClick={cartClicked} alt='cart' data-testid='cart'><i className="fa fa-shopping-cart cart-count" value={cart.length == 0 ? cart.length : cartCount()}></i></LinkSpan></li>
                            
                        </ul>   
                        <Link className="menu-trigger">
                            <span>Menu</span>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header