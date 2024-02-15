/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import en from "../locales/en.json"
import es from "../locales/es.json"

export const I18nContext = createContext()

function I18NProvider({ children }) {

    const [lang, setLang] = useState("US") // alternative value "ES"

    function setLanguage(lang) {
        setLang(lang)
    }

    function t(key) {
        if (lang === "ES") return es[key]
        if (lang === "US") return en[key]
    }

    return (<I18nContext.Provider value={{ lang, setLanguage, t }} >
        {children}
    </I18nContext.Provider>)
}

export default I18NProvider
