import "../styles/globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/valorant.png" />
      </Head>
      <div className="container mx-auto">
        <NavBar />
      </div>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
