import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useSelector,useDispatch } from 'react-redux'
import { LinkSpan } from './common/StickyHeader';
import { useNavigate } from 'react-router-dom';
import * as actions from '../actions/userPreferences'

const Categories = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    let categories = useSelector(state => state.categories)
    if (categories.categories.length == 0) {
       return 
    }

    const categoryClicked = (event) => {
        const category = event.currentTarget.getAttribute("alt")
        dispatch(actions.getSelectedCategory(category));
        navigate(`/listing/${category}`)
    }

    let categoryList = categories.categories.map(category => {
        return <div className="category-container" key={category} ><LinkSpan className="category-items" onClick={categoryClicked} alt={category} data-testid={category}>{category}</LinkSpan></div>
    } )

    return(
        <section className="main-banner" id='top'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Slide slidesToScroll={2} slidesToShow={7} >
                        {categoryList}
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categories