import { useContext, useState } from "react";
import styles from "./pokemonSearch.module.css";
import TypeColor from "../typeColor/TypeColor";
import { AppPokeContext } from "../../../context/AppPokemonProvider";
import { I18nContext } from "../../../context/i18nProvider";
import StartOutline from "../../../assets/icons/vector.svg"
import StartFill from "../../../assets/icons/star-fill.svg"

function PokemonSearch() {
  const [pokemon, setPokemon] = useState();
  const [name, setName] = useState("");
  const { currentUsername, resetData, favoritePoke } = useContext(AppPokeContext);
  const {t} = useContext(I18nContext)

  function addName(event) {
    setName(event.target.value);
  }

  function addPokemon() {
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

  function addFavorites() {
    const body = {
      id: pokemon.id,
      name: pokemon.name,
      types: pokemon.types,
      avatarUrl: pokemon.urlImg,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/2023.5.8",
      },
      body: JSON.stringify(body),
    };

    fetch(
      `https://poke-collection-lite-production.up.railway.app/api/${currentUsername}/favorites`,
      options
    )
      .then((response) => response.json())
      .then(() => resetData())
      .catch((err) => console.error(err));
  }
  function deleteFavorites() {
    const options = {
      method: "DELETE",
    };

    fetch(
      `https://poke-collection-lite-production.up.railway.app/api/${currentUsername}/favorites/${pokemon.id}`,
      options
    )
      .then(() => resetData())
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className={styles.selectPokemon}>
        <section className={styles.selectName}>
          <input onChange={addName} type="text" placeholder="bulbasaur" />
          <button onClick={addPokemon}>
            <p>{t("search")}</p>
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
                {pokemon.types.map((item, index) => {
                  return <TypeColor key={`Type-${index}`} type={item} />;
                })}
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
            {favoritePoke.find((poke) => poke.id === pokemon.id) ? (
              <section className={styles.AddFavorites}>
                <img src={StartFill} alt="vector" />
                <button onClick={deleteFavorites}>{t("del-pokemon")}</button>
              </section>
            ) : (
              <section className={styles.AddFavorites}>
                <img src={StartOutline} alt="vector" />
                <button onClick={addFavorites}>{t("add-pokemon")}</button>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default PokemonSearch;
