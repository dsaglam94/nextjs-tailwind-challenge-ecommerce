import { GiHoodie } from "react-icons/gi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavigationDesktop = ({ totalItems }) => {
  return (
    <header className="w-full p-6 hidden md:block shadow-xl">
      <nav className="w-full max-w-[1200px] flex items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center gap-1 cursor-pointer">
            <GiHoodie className="text-accent text-4xl" />
            <span className="text-lg font-semibold">Hoodier</span>
          </div>
        </Link>
        <ThemeToggle />

        <ul className="flex items-center gap-10">
          <Link href="/">
            <li className="font-semibold text-lg capitalize hover:text-accent cursor-pointer">
              home
            </li>
          </Link>
          <Link href="/favorites">
            <li className="flex items-center font-semibold text-lg capitalize gap-1 hover:text-accent cursor-pointer">
              <AiOutlineHeart className="text-2xl" /> favorites
            </li>
          </Link>
          <Link href="/cart">
            <li className="flex items-center font-semibold text-lg capitalize gap-1 hover:text-accent cursor-pointer group">
              <RiShoppingCart2Line className="text-2xl" /> Cart
              <div className="bg-secondary w-8 h-6 rounded-full flex items-center justify-center">
                <span className="text-sm group-hover:text-buttonText">
                  {totalItems}
                </span>
              </div>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationDesktop;
