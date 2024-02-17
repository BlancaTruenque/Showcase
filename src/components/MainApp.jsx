import Favorites from "./Favorites";
import PokemonSearch from "./PokemonSearch";

function MainApp() {
  return (
    <>
      <main></main>
      <div className="flex , gap-4">
        <PokemonSearch />
        <Favorites />
      </div>
    </>
  );
}

export default MainApp;
