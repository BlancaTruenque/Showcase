import { useContext, useState } from "react";
import pokeApi from "./../../../assets/pokemon.png"
import styles from "./welcome.module.css"
import { AppPokeContext } from "../../../context/AppPokemonProvider";

const Welcome = () => {
  const {setCurrentUsername}= useContext(AppPokeContext)
  const [inputValue, setInputValue]= useState("");

  function handleuser(){
    setCurrentUsername(inputValue);
  }

  return (
    <>
        <div className={`${styles.container} my-10 max-w-screen-xl bg-white shadow-lg`}>
          <div className={styles.content}>
            <div className={styles.img}>
              <img
              src={pokeApi}
                alt=""
              />
            </div>
            <div className={styles.contInputs}>
              <input
                className={styles.input}
                type="text"
                name="username"
                id="username"
                placeholder="username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value) }
              />
              <button  className={styles.button} onClick={handleuser} >
                Enter
              </button>
            </div>
            <div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default Welcome;
