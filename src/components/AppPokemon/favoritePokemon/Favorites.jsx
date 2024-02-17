import { useContext } from "react";
import styles from "./favorite.module.css";
import { AppPokeContext } from "../../../context/AppPokemonProvider";
import TypeColor from "../typeColor";
import { I18nContext } from "../../../context/i18nProvider"


function Favorites() {
  const { setCurrentUsername, favoritePoke, clearData } = useContext(AppPokeContext)
  const {t} = useContext(I18nContext)

  return (
    <div className="w-full px-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{t('favorites')}</h1>
        <div className="flex gap-4">
          <button className={styles.exit} onClick={() => clearData()}>{t("del-pokemons")}</button>
          <button className={styles.exit} onClick={() => setCurrentUsername("")}>{t('exit')}</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
        {favoritePoke.map(poke => (
          <div className="w-36 min-h-56 rounded-md shadow-md p-2" key={`poke-${poke.id}`}>
            <h3 className="text-xl capitalize font-bold text-center">{poke.name}</h3>
            <h4 className="text-center">{`#${poke.id > 9 ? "0" : "00"}${poke.id}`}</h4>
            <img src={poke.avatarUrl} />
            <div className="flex flex-wrap gap-2 justify-center">
              {poke.types.map((type, index) => <TypeColor key={`type-${index}`} type={type} />)}
            </div>
          </div>))
        }
      </div>
    </div>
  );
}
export default Favorites;
