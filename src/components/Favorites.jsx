import styles from "./favorite.module.css";

function Favorites() {
  return (
    <div className={styles.container}>
      <h1 className={styles.favorite}>Favorites</h1>
      <button className={styles.exit}>Exit</button>
    </div>
  );
}
export default Favorites;
