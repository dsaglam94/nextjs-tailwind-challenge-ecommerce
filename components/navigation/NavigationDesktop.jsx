import { GiHoodie } from "react-icons/gi";
import Link from "next/link";

const NavigationDesktop = () => {
  return (
    <header>
      <nav>
        <div>
          <GiHoodie className="" />
        </div>
      </nav>
      <ul>
        <Link href="/">
          <li>home</li>
        </Link>
        <Link href="/">
          <li>favorite</li>
        </Link>
        <Link href="/">
          <li>Cart</li>
        </Link>
      </ul>
    </header>
  );
};

export default NavigationDesktop;
