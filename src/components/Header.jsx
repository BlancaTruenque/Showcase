import { useContext } from "react"
import EnglishIcon from "../assets/icons/english.svg"
import SpanishIcon from "../assets/icons/spanish.svg"
import { I18nContext } from "../context/i18nProvider"
import { AppStateContext } from "../context/AppStateProvider"

function Header() {

    const { lang, setLanguage } = useContext(I18nContext)
    const { appData, currentApp, setCurrentApp } = useContext(AppStateContext)

    return (<>
        <header className="bg-[#EFF4FF]">
            <nav className="flex items-center py-5 px-8 max-w-screen-xl mx-auto justify-between relative">
                <h1 onClick={() => setCurrentApp("")} className="text-2xl md:text-3xl font-bold">
                    React Showcase
                </h1>
                <h2 className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {currentApp !== "" && <p className="outline text-lg text-[#1D58D8] font-bold px-3 py-1 rounded-full">
                        {appData.find(app => app.shortName === currentApp).name}
                    </p>}
                </h2>
                <ul className="flex items-center gap-4">
                    <li>
                        <button className={`rounded-full ${lang === "US" && 'outline outline-offset-4 outline-[#6090FA]'}`}
                            onClick={() => setLanguage("US")}>
                            <img src={EnglishIcon} alt="US-Lang" />
                        </button>
                    </li>
                    <li>
                        <button className={`rounded-full ${lang === "ES" && 'outline outline-offset-4 outline-[#6090FA]'}`}
                            onClick={() => setLanguage("ES")}>
                            <img src={SpanishIcon} alt="ES-lang" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </>)
}

export default Header