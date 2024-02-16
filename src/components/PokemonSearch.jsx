import { useState } from "react";
import styles from "./pokemonSearch.module.css";

function PokemonSearch() {
  const [pokemon, setPokemon] = useState();
  const [name, setName] = useState("");

  function addName(event) {
    setName(event.target.value);
  }

  function addClick() {
    // const body = {
    //   deleted: false,
    // };

    // const options =

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setPokemon({
          name: response.name,
          id: response.id,
          urlImg: response.sprites.other["official-artwork"]["front_default"],
          weight: response.weight,
          height: response.height,
          types: response.types.map((item) => {
            return item.type.name;
          }),
        });
      })
      .catch((err) => console.log(err));
  }

  console.log(pokemon);

  return (
    <>
      <div className={styles.selectPokemon}>
        <section className={styles.selectName}>
          <input onChange={addName} type="text" placeholder="bulbasaur" />
          <button onClick={addClick}>
            <p>Search</p>
          </button>
        </section>
        {pokemon && (
          <>
            <section className={styles.containerPokemon}>
              <div>
                <h1>{pokemon.name}</h1>
                <p>{pokemon.id}</p>
              </div>
              <div className={styles.Pokemon}>
                <img src={pokemon.urlImg} alt="pokemonElegido" />
              </div>
              <div className={styles.type}>
                {pokemon.types.map((item) => {
                  return (
                    <button className="bg-[#A43E9E] w-16">
                      <p>{item}</p>
                    </button>
                  );
                })}
                {/* <button className="bg-[#A43E9E] w-16">
                  <p>Poison</p>
                </button>
                <button className="bg-[#74CB48] w-12">
                  <p>Grass</p>
                </button> */}
              </div>
              <div className={styles.measures}>
                <div className={styles.measure}>
                  <div className={styles.measureData}>
                    <img src="/src/assets/icons/balance.svg" alt="balance" />
                    <p>{pokemon.weight}</p>
                  </div>
                  <h2>Weight</h2>
                </div>
                <div className={styles.measure}>
                  <div className={styles.measureData}>
                    <img src="/src/assets/icons/ruler.svg" alt="ruler" />
                    <p>{pokemon.height}</p>
                  </div>
                  <h2>Height</h2>
                </div>
              </div>
            </section>
            <section className={styles.AddFavorites}>
              <img src="/src/assets/icons/vector.svg" alt="vector" />
              <p>Add to Favorites</p>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default PokemonSearch;
