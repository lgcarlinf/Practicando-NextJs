import "../styles/globals.css";
import { FastFoodProvider } from "../context/FastFoodProvider";

function MyApp({ Component, pageProps }) {
  return (
    <FastFoodProvider>
      <Component {...pageProps} />
    </FastFoodProvider>
  );
}

export default MyApp;
