import { AppPokeContext } from "../../../context/AppPokemonProvider";
import Favorites from "../favoritePokemon/Favorites";
import PokemonSearch from "../searchPokemon/PokemonSearch";
import Welcome from "../welcomePokemon/Welcome";
import { useContext } from "react";

const ContenedorPokemon = () => {
  const { isActive } = useContext(AppPokeContext);


  return <>

    {isActive ?
      <div className="flex justify-center flex-wrap md:flex-nowrap lg:w-[calc(75vw)] px-4 mx-auto mt-10">
        <PokemonSearch />
        <Favorites />
      </div>
      :
      <Welcome />}
  </>
};

export default ContenedorPokemon;
