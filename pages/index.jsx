import React, { useContext } from "react";
import Head from "next/head";
import { ThemeContext } from "../providers";
import { Navbar } from "../components";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>CountryPedia</title>
      </Head>
      <main className={theme}>
        <Navbar />
      </main>
    </>
  );
}
