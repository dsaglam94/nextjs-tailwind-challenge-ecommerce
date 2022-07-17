import { CartLocaleStorage } from "../../context/CartContext";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

const Navigation = () => {
  const { totalItems } = CartLocaleStorage();

  return (
    <>
      <NavigationDesktop totalItems={totalItems} />
      <NavigationMobile totalItems={totalItems} />
    </>
  );
};

export default Navigation;
