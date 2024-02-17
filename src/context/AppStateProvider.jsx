/* eslint-disable react/prop-types */
import { createContext } from "react";
import pokemonImg from "../assets/pokemon.png"
import tictacImg from "../assets/tictac.png"
import wordleImg from "../assets/wordle.png"
import youtubeImg from "../assets/youtube.png"
import useLocalStorage from "../hooks/useLocalStorage";


const appData = [
    {
        "name": "ReactDev Tic-Tac-Toe",
        "shortName": "tictac",
        "imgUrl": tictacImg,
        "tags": [
            "useState", "useEffect", "customHooks", "localStorage", "CSS Module", "otherFeature"
        ]
    },
    {
        "name": "Poke collection",
        "shortName": "pokemon",
        "imgUrl": pokemonImg,
        "tags": [
            "useState", "useEffect", "customHooks", "localStorage", "CSS Module", "otherFeature"
        ]
    },
    {
        "name": "React Wordle",
        "shortName": "wordle",
        "imgUrl": wordleImg,
        "tags": [
            "useState", "useEffect", "customHooks", "localStorage", "CSS Module", "otherFeature"
        ]
    },
    {
        "name": "Video Feed",
        "shortName": "video",
        "imgUrl": youtubeImg,
        "tags": [
            "useState", "useEffect", "customHooks", "localStorage", "CSS Module", "otherFeature"
        ]
    }
]

export const AppStateContext = createContext()

function AppStateProvider ({children}){

    const [currentApp, setCurrentApp] = useLocalStorage("currentAPP", "")
    
    return (
        <AppStateContext.Provider value={{ appData, currentApp, setCurrentApp }}>
            {children}
        </AppStateContext.Provider>
    )
}

export default AppStateProvider