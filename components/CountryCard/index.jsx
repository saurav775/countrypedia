import React from "react";
import styles from "../../styles/Home.module.css";

const CountryCard = (props) => {
  const { countryData = {} } = props;
  const { name, population, region, capital, alpha3Code, flag } = countryData;
  return (
    <div className={styles.card_wrp} key={alpha3Code}>
      <img src={flag} alt={name} className={styles.flag} />
      <div className={styles.card_details}>
        <p className={styles.country_name}>{name}</p>
        <div className={styles.card_list_items}>
          <span className={styles.list_type_text}>Population:</span>
          <span className={styles.list_item_text}>
            {population.toLocaleString()}
          </span>
        </div>
        <div className={styles.card_list_items}>
          <span className={styles.list_type_text}>Region:</span>
          <span className={styles.list_item_text}>{region}</span>
        </div>
        <div className={styles.card_list_items}>
          <span className={styles.list_type_text}>Capital:</span>
          <span className={styles.list_item_text}>{capital}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
