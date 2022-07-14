import "../styles/globals.css";
import Layout from "../components/Layout";
import { AuthContextProvider, ThemeProvider } from "../context/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
