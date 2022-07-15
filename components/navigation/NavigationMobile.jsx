import { GiHoodie } from "react-icons/gi";
import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MenuToggle from "./MenuToggle";
import { useEffect, useState } from "react";
const NavigationMobile = ({ totalItems }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNav = () => {
    setIsNavOpen((prevValue) => !prevValue);
  };

  // don't allow scrolling when nav is open
  useEffect(() => {
    if (isNavOpen) {
      window.document.documentElement.style.overflowY = "hidden";
      window.document.documentElement.classList.add("lock-screen");
    } else {
      window.document.documentElement.style.overflowY = "scroll";
      window.document.documentElement.classList.remove("lock-screen");
    }
  }, [isNavOpen]);

  return (
    <header className="w-full p-6 md:hidden block shadow-xl">
      <nav className="w-full max-w-[1200px] flex items-center justify-between mx-auto">
        <Link href="/">
          <div className="flex items-center gap-1 cursor-pointer">
            <GiHoodie className="text-accent text-4xl" />
            <span className="text-lg font-semibold">Hoodier</span>
          </div>
        </Link>
        <MenuToggle isNavOpen={isNavOpen} handleClick={handleNav} />
        <div
          className={
            isNavOpen
              ? "absolute z-10 w-full h-[89vh] bottom-0 left-0 bg-black/70 duration-150 ease-in overflow-hidden"
              : "absolute z-10 w-full h-[89vh] bottom-0 left-0 bg-black/0 duration-150 ease-in select-none pointer-events-none overflow-hidden"
          }
        >
          <div
            className={
              isNavOpen
                ? "bg-primary p-6 w-[70%] h-full flex flex-col items-end justify-between ml-auto translate-x-0 duration-300 ease-in-out"
                : "bg-primary p-6 w-[70%] h-full flex flex-col items-end justify-between ml-auto translate-x-[110%] duration-300 ease-in-out"
            }
          >
            <ul className="w-full flex flex-col items-end gap-14 my-auto">
              <Link href="/">
                <li
                  onClick={handleNav}
                  className="font-semibold text-2xl capitalize hover:text-accent cursor-pointer"
                >
                  home
                </li>
              </Link>
              <Link href="/favorites">
                <li
                  onClick={handleNav}
                  className="flex items-center font-semibold text-2xl capitalize gap-1 hover:text-accent cursor-pointer"
                >
                  <AiOutlineHeart className="text-2xl" /> favorites
                </li>
              </Link>
              <Link href="/cart">
                <li
                  onClick={handleNav}
                  className="flex items-center font-semibold text-2xl capitalize gap-1 hover:text-accent cursor-pointer group"
                >
                  <RiShoppingCart2Line className="text-2xl" /> Cart
                  <div className="bg-secondary w-8 h-6 rounded-full flex items-center justify-center">
                    <span className="text-sm group-hover:text-buttonText">
                      {totalItems}
                    </span>
                  </div>
                </li>
              </Link>
            </ul>

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavigationMobile;
