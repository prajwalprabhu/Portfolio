import styles from "../styles/NavBar.module.css";
function NavBar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navbar_ul}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Info</a>
        </li>
        <li>
          <a href="/">Github</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
      </ul>
      <a href="/">Login</a>
    </div>
  );
}

export default NavBar;
