import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Manuel Steiner</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Manuel Steiner Portfolio" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
