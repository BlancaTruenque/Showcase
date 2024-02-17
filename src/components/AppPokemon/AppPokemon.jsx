import AppPokemonProvider from "../../context/AppPokemonProvider"
import ContenedorPokemon from "./contenedorPokemon"

const AppPokemon = () => {
  return (
    <>
      <AppPokemonProvider >
        <ContenedorPokemon />
      </AppPokemonProvider >
    </>
  )
}

export default AppPokemon
