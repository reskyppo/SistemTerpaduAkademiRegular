import Head from "next/head";
import "../styles/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
