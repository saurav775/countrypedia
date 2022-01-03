import React from "react";
import styles from "../../styles/Home.module.css";

const Search = () => {
  return (
    <div className={styles.search_wrp}>
      <i className="fa fa-search" />
      <input type="text" name="search" placeholder="Search for a country..." />
    </div>
  );
};

export default Search;
