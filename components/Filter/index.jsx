import React from "react";
import styles from "../../styles/Home.module.css";
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = () => {
  return (
    <div className={styles.filter_wrp}>
      <select className={styles.filter} defaultValue="">
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
