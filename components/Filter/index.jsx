import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Filter = (props) => {
  const { countries, updateCountries, updateRegion } = props;
  const [filterKeys, setKeys] = useState("");
  const handleSelect = (event) => {
    const { value } = event.target;
    setKeys(value);
    updateRegion(value);
  };
  useEffect(() => {
    const filterCountries = countries.filter(
      (country) => country.region === filterKeys
    );
    filterKeys && updateCountries(filterCountries);
  }, [filterKeys]);
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
