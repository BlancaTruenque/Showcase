import { useContext } from "react"
import EnglishIcon from "../assets/icons/english.svg"
import SpanishIcon from "../assets/icons/spanish.svg"
import { I18nContext } from "../context/i18nProvider"

function Header() {

    const {lang, setLanguage, t} = useContext(I18nContext)

    return (<>
        <header className="bg-[#EFF4FF]">
            <nav className="flex items-center py-5 px-2 max-w-screen-2xl mx-auto justify-between">
                <h1 className="text-4xl font-semibold">
                    React Showcase
                </h1>
                <h2>
                    {/* TODO: change functionality to show current app name */}
                    <p className="outline text-2xl text-[#1D58D8] font-medium px-3 py-1 rounded-full">
                        {t("rosita")}
                    </p>
                </h2>
                <ul className="flex items-center gap-4">
                    <li>
                        <button className={`rounded-full ${lang === "US" && 'outline outline-offset-4 outline-[#6090FA]'}`}
                                onClick={()=>setLanguage("US")}>
                            <img src={EnglishIcon} alt="US-Lang" />
                        </button>
                    </li>
                    <li>
                        <button className={`rounded-full ${lang === "ES" && 'outline outline-offset-4 outline-[#6090FA]'}`}
                                onClick={()=>setLanguage("ES")}>
                            <img src={SpanishIcon} alt="ES-lang" />
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    </>)
}

export default Header