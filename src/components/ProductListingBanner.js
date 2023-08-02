import React from "react";
import { CapitalizedH2 } from "./common/StickyHeader"
import { useContext } from 'react';
import LocaleContext from '../context/Locale';

const ProductListingBanner = ({category}) => {
    const selectedLanguage = useContext(LocaleContext)

    return(
        <div className="page-heading" id="top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner-content">
                            <CapitalizedH2>{category} {selectedLanguage == 'English' ? 'Listing Page' : 'Auflistungsseite'} </CapitalizedH2>
                            <span>{selectedLanguage == 'English' ? 'Get amazing products' : 'Holen Sie sich tolle Produkte'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListingBanner