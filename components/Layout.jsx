import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <main>
      <Navigation />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Layout;
