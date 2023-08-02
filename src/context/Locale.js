import React from "react";
import { createContext,useState } from "react";
import { useSelector } from 'react-redux'

const LocaleContext = createContext()
export const LocaleProvider = ({children}) => {
    let selectedLanguage = useSelector(state => state.userPreferences.selectedLanguage)
    return(
        <LocaleContext.Provider value={selectedLanguage}>
            {children}
        </LocaleContext.Provider>
    )
}
export default LocaleContext