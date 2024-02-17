/* eslint-disable react/prop-types */
import { useContext } from "react"
import { AppStateContext } from "../context/AppStateProvider"
import TicTacToe from "./TicTacToe"
import MainView from "./MainView"
import AppPokemon from "./AppPokemon/AppPokemon"
import Favorites from "./Favorites";
import PokemonSearch from "./PokemonSearch";


function MainApp() {
    // version 1
    const { currentApp } = useContext(AppStateContext) // pokemonAPI, TicTacToe

    return (<>
        <main className="flex-grow bg-[#F8FAFC]">
            {currentApp === "" && <MainView />}
            {currentApp === "tictac" && <TicTacToe/>}
            {currentApp === "pokemon" && <div className="flex , gap-4">
        <PokemonSearch />
        <Favorites />
      </div>}
            {currentApp === "wordle" && <h1>Wordle APP</h1>}
            {currentApp === "video" && <h1>Video APP</h1>}
        </main>
    </>)
}

export default MainApp;
