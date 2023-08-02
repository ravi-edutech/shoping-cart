import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import { CapitalizedH2 } from './common/StickyHeader';
import * as actions from '../actions/userPreferences'
import { useContext } from 'react';
import LocaleContext from '../context/Locale';
import { Link,useNavigate } from 'react-router-dom';
const FeaturedProduct = ({category}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const selectedLanguage = useContext(LocaleContext)
    let products = useSelector(state => state.products,shallowEqual)
    let cart = useSelector(state => state.userPreferences.cart,shallowEqual)
    
    if (Object.keys(products).length == 0) {
        return
     }

    const handleCartAction = (event) => {
        event.preventDefault()
        
        const productID = event.currentTarget.getAttribute("alt")
        const isInCart = isAddedToCart(productID)
        if(isInCart){
            dispatch(actions.getDeleteFromCart({'category':category,'productID':productID}));
        }else{
            dispatch(actions.getAddToCart({'category':category,'productID':productID,'count':1}))
        }
    }
   

    const isAddedToCart = (productID) => {
        const val = cart.some(item => {
            if(item.productID == productID && item.category == category){
                return true
            }
            return false
        });
        return val
    }

    let categoryProducts = products[category]
    if(categoryProducts == undefined){
        return  
    }
    let productList = products[category].map(product => {
      return (
        <div className="item" style={{maxWidth: '500px', margin:'0 10px 0 10px'}} key={product.id}>
            <div className="itemd">
                <div className="thumb image-container">
                    <div className="hover-content">
                        <ul>
                        <li><Link to="#!" ><i className="fa fa-eye"></i></Link></li>
                        <li><Link to="#!" ><i className="fa fa-star"></i></Link></li>
                        <li><Link to="#!" onClick={handleCartAction} alt={product.id} data-testid={product.id}><i className={isAddedToCart(product.id) ? "fa fa-shopping-cart red-color" : "fa fa-shopping-cart"} alt={product.id} data={category} ></i></Link></li>
                        
                        </ul>
                    </div>
                    <img src={product.thumbnail} alt="" className="centered-image"  />
                </div>
                <div className="down-content">
                    <h4>{product.title}</h4>
                    <span>${product.price}</span>
                    <ul className="stars">
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                        <li><i className="fa fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
      )
    })

    return(
        <section className="section product-category" id={category}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="section-heading">
                        <CapitalizedH2>{category}'s {selectedLanguage == 'English' ? 'Latest' : 'Neueste'}</CapitalizedH2>
                        <span>{selectedLanguage == 'English' ? 'Details to details is what makes Hexashop different from the other themes.' : 'Details zu Details sind es, die Hexashop von den anderen Themes unterscheiden.'}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <Slide slidesToScroll={1} slidesToShow={3} >
                    {productList}
                </Slide>
                </div>
            </div>
        </div>
    </section>
    )
}

export default FeaturedProduct