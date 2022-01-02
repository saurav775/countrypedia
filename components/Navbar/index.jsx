import React, { useContext } from "react";
import { ThemeContext } from "../../providers";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`${theme} ${styles.nav_container}`}>
      <div className="container">
        <div className={styles.nav_wrp}>
          <p>Where in the world?</p>
          <button onClick={toggleTheme} className={styles.theme_toggle_btn}>
            <i className="fa fa-moon-o" />
            <span>{theme} Mode</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
