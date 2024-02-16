import styles from "./pokemonSearch.module.css";

function PokemonSearch() {
  return (
    <>
      <div className={styles.selectPokemon}>
        <section className={styles.selectName}>
          <input type="text" placeholder="bulbasaur" />
          <button>
            <p>Search</p>
          </button>
        </section>
        <section className={styles.containerPokemon}>
          <div>
            <h1>Bulbasaur</h1>
            <p>#001</p>
          </div>
          <div className={styles.Pokemon}>
            <img src="/src/assets/pokemon.svg" alt="pokemonElegido" />
          </div>
          <div className={styles.type}>
            <button className="bg-[#A43E9E] w-16">
              <p>Poison</p>
            </button>
            <button className="bg-[#74CB48] w-12">
              <p>Grass</p>
            </button>
          </div>
          <div className={styles.measures}>
            <div className={styles.measure}>
              <div className={styles.measureData}>
                <img src="/src/assets/icons/balance.svg" alt="balance" />
                <p>6,9 kg</p>
              </div>
              <h2>Weight</h2>
            </div>
            <div className={styles.measure}>
              <div className={styles.measureData}>
                <img src="/src/assets/icons/ruler.svg" alt="ruler" />
                <p>0,7 m</p>
              </div>
              <h2>Height</h2>
            </div>
          </div>
        </section>
        <section className={styles.AddFavorites}>
          <img src="/src/assets/icons/vector.svg" alt="vector" />
          <p>Add to Favorites</p>
        </section>
      </div>
    </>
  );
}

export default PokemonSearch;
