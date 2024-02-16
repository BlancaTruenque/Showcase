import styles from "./typecolor.module.css";

function TypeColor() {
  return (
    <>
      <ul>
        <li className={styles.normal}>Normal</li>
        <li className={styles.Fighting}>Fighting</li>
        <li className={styles.Flying}>Flying</li>
        <li className={styles.Ground}>Ground</li>
        <li className={styles.Poison}>Poison</li>
        <li className={styles.Rock}>Rock</li>
        <li className={styles.Bug}>Bug</li>
        <li className={styles.Ghost}>Ghost</li>
        <li className={styles.Steel}>Steel</li>
        <li className={styles.Fire}>Fire</li>
        <li className={styles.Water}>Water</li>
        <li className={styles.Grass}>Grass</li>
        <li className={styles.Electric}>Electric</li>
        <li className={styles.Psychic}>Psychic</li>
        <li className={styles.Ice}>Ice</li>
        <li className={styles.Dragon}>Dragon</li>
        <li className={styles.Dark}>Dark</li>
        <li className={styles.Fairy}>Fairy</li>
      </ul>
    </>
  );
}
export default TypeColor;
