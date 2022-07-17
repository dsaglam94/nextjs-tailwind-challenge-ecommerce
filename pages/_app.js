import "../styles/globals.css";
import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ThemeContext";
import { CartContextProvider } from "../context/CartContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CartContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
