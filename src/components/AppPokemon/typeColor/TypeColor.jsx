/* eslint-disable react/prop-types */
import styles from "./typecolor.module.css";

function TypeColor({ type }) {
  return (
    <>
      <ul>
        {type === "normal" && (
          <li className={`${styles.Normal} ${styles.type}`}>Normal</li>
        )}
        {type === "fighting" && (
          <li className={`${styles.Fighting} ${styles.type}`}>Fighting</li>
        )}
        {type === "flying" && (
          <li className={`${styles.Flying} ${styles.type}`}>Flying</li>
        )}
        {type === "ground" && (
          <li className={`${styles.Ground} ${styles.type}`}>Ground</li>
        )}
        {type === "poison" && (
          <li className={`${styles.Poison} ${styles.type}`}>Poison</li>
        )}
        {type === "rock" && (
          <li className={`${styles.Rock} ${styles.type}`}>Rock</li>
        )}
        {type === "bug" && (
          <li className={`${styles.Bug} ${styles.type}`}>Bug</li>
        )}
        {type === "ghost" && (
          <li className={`${styles.Ghost} ${styles.type}`}>Ghost</li>
        )}
        {type === "steel" && (
          <li className={`${styles.Steel} ${styles.type}`}>Steel</li>
        )}
        {type === "fire" && (
          <li className={`${styles.Fire} ${styles.type}`}>Fire</li>
        )}
        {type === "water" && (
          <li className={`${styles.Water} ${styles.type}`}>Water</li>
        )}
        {type === "grass" && (
          <li className={`${styles.Grass} ${styles.type}`}>Grass</li>
        )}
        {type === "electric" && (
          <li className={`${styles.Electric} ${styles.type}`}>Electric</li>
        )}
        {type === "psychic" && (
          <li className={`${styles.Psychic} ${styles.type}`}>Psychic</li>
        )}
        {type === "ice" && (
          <li className={`${styles.Ice} ${styles.type}`}>Ice</li>
        )}
        {type === "dragon" && (
          <li className={`${styles.Dragon} ${styles.type}`}>Dragon</li>
        )}
        {type === "dark" && (
          <li className={`${styles.Dark} ${styles.type}`}>Dark</li>
        )}
        {type === "fairy" && (
          <li className={`${styles.Fairy} ${styles.type}`}>Fairy</li>
        )}
      </ul>
    </>
  );
}
export default TypeColor;


