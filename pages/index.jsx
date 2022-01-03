import React, { useContext } from "react";
import { ThemeContext } from "../providers";
import { CountryCard } from "../components";
import styles from "../styles/Home.module.css";

export default function Home(props) {
  const { theme } = useContext(ThemeContext);
  const { countries = [] } = props;
  return (
    <main className={theme}>
      <div className={styles.main_container}>
        <div className="container">
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
  const countries = await (
    await fetch(`https://restcountries.com/v2/all`)
  ).json();
  return { props: { countries } };
}
