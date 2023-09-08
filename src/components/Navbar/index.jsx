import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.navTitle}>Emojipedia</span>
    </nav>
  );
}

export default Navbar;
