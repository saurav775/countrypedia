import { ThemeProvider } from "../providers";
import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default MyApp;
