import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";

const Search = (props) => {
  const { countries, updateCountries, currentRegion, updateSearchText } = props;
  const [searchKeys, setKeys] = useState("");
  const handleSearchChange = (event) => {
    const { value } = event.target;
    setKeys(value);
    updateSearchText(value);
  };
  useEffect(() => {
    const filterCountries = countries.filter((country) => {
      if (currentRegion) {
        return (
          country.name.toLowerCase().includes(searchKeys.toLowerCase()) &&
          country.region === currentRegion
        );
      } else {
        return country.name.toLowerCase().includes(searchKeys.toLowerCase());
      }
    });
    updateCountries(filterCountries);
  }, [searchKeys, currentRegion]);
  return (
    <div className={styles.search_wrp}>
      <i className="fa fa-search" />
      <input
        type="text"
        name="search"
        placeholder="Search for a country..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
