import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = (props) => {
  const { countries, updateCountries, updateRegion, searchText } = props;
  const [filterKeys, setKeys] = useState("");
  const handleSelect = (event) => {
    const { value } = event.target;
    setKeys(value);
    updateRegion(value);
  };
  useEffect(() => {
    const filterCountries = countries.filter((country) => {
      if (searchText) {
        return (
          country.name.toLowerCase().includes(searchText.toLowerCase()) &&
          country.region === filterKeys
        );
      } else {
        return country.region === filterKeys;
      }
    });
    filterKeys && updateCountries(filterCountries);
  }, [filterKeys, searchText]);
  return (
    <div className={styles.filter_wrp}>
      <select
        className={styles.filter}
        onChange={handleSelect}
        value={filterKeys}
      >
        <option value="" disabled>
          Filter by Region
        </option>
        {regions.map((region) => (
          <option value={region} key={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
