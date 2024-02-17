import { useContext } from "react";
import styles from "./favorite.module.css";
import { AppPokeContext } from "../../../context/AppPokemonProvider";
import TypeColor from "../typeColor";


function Favorites() {
  const {setCurrentUsername, favoritePoke}= useContext(AppPokeContext)
  


  return (
    <div className={styles.container}>
      <h1 className={styles.favorite}>Favorites</h1>
      <div>
        
        { favoritePoke.map(poke =>(
        <div  key={`poke-${poke.id}`}> 
        <h3>{poke.name}</h3>
        <span>{`#${poke.id>9?"0":"00"}${poke.id}`}</span>
          <img src={poke.avatarUrl}/> 
          <div>
            {poke.types.map((type, index) =><TypeColor key={`type-${index}`} type={type} />)}
          </div>


        </div>))
        }

      </div>
      <button className={styles.exit} onClick={()=>setCurrentUsername("")}>Exit</button>
    </div>
  );
}
export default Favorites;
