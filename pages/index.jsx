import React, { useContext, useState } from "react";
import { ThemeContext } from "../providers";
import { CountryCard, Search, Filter } from "../components";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { theme } = useContext(ThemeContext);
  const { countriesData = [] } = props;
  const [countries, setCountries] = useState(countriesData);
  const [currentRegion, setCurrentRegion] = useState("");
  const updateCountriesData = (data) => {
    setCountries(data);
  };
  const updateRegion = (data) => {
    setCurrentRegion(data);
  };
  return (
    <main className={theme}>
      <div className={styles.main_container}>
        <div className="container">
          <div className={styles.search_filter_wrp}>
            <Search
              updateCountries={updateCountriesData}
              countries={countriesData}
              currentRegion={currentRegion}
            />
            <Filter
              updateCountries={updateCountriesData}
              countries={countriesData}
              updateRegion={updateRegion}
            />
          </div>
          {!countries.length ? (
            <div className={styles.empty_countries_list}>
              No countries to show
            </div>
          ) : (
            <div className={styles.country_cards_wrp}>
              {countries.map((country) => (
                <CountryCard countryData={country} key={country.alpha3Code} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  const countriesData = await (
    await fetch(`https://restcountries.com/v2/all`)
  ).json();
  return { props: { countriesData } };
}
