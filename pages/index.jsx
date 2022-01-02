import React, { useContext } from "react";
import { ThemeContext } from "../providers";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  return <main className={theme}></main>;
}
