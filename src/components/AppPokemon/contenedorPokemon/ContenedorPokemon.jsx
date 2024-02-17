import { AppPokeContext } from "../../../context/AppPokemonProvider";
import Favorites from "../favoritePokemon/Favorites";
import PokemonSearch from "../searchPokemon/PokemonSearch";
import Welcome from "../welcomePokemon/Welcome";
import { useContext } from "react";

const ContenedorPokemon = () => {
  const {isActive } = useContext(AppPokeContext);


  return <>{isActive ? <div> <PokemonSearch /> <Favorites /> </div> : <Welcome />}</>;
};

export default ContenedorPokemon;
