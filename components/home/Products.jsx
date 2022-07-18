import Image from "next/image";
// import Link from "next/link";
import { useRouter } from "next/router";
// import { useEffect, useRef } from "react";
import { CartLocaleStorage } from "../../context/CartContext";

const Products = ({ item }) => {
  // const buttonRef = useRef();
  const router = useRouter();
  const { calculateDiscountedAmount } = CartLocaleStorage();

  // changed the div/link to button even it's not recommended to use buttons for page navigation
  // for the sake of accessibility

  // Makes the order links focusable
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     buttonRef.current.setAttribute("tabindex", "0");
  //     buttonRef.current.focus();
  //   }, 100);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div
      key={item.id}
      className="shadow-xl bg-primary rounded-lg overflow-hidden"
    >
      <div className="relative w-full h-[400px]">
        <Image
          className="object-top sm:object-center md:object-top"
          src={item.image}
          layout="fill"
          alt={item.title}
          objectFit="cover"
        />
      </div>
      <div className="p-6">
        <div>
          <h2 className="font-bold text-lg text-primary py-2">{item.title}</h2>
          <p className="text-secondary opacity-90 text-md">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <span className="font-bold text-3xl text-primary">{`$${(
              item.initial_price -
              calculateDiscountedAmount(
                item.discount_percentage,
                item.initial_price
              )
            ).toFixed(2)}`}</span>
            <div className="bg-secondary text-primary text-sm py-1 px-2 rounded font-bold">
              <span>%{item.discount_percentage} off</span>
            </div>
          </div>
          <span className="text-lg text-secondary opacity-90 line-through">{`$${item.initial_price.toFixed(
            2
          )}`}</span>
        </div>
        <button
          onClick={() => router.push(`/product/${item.id}`)}
          className="w-full font-bold text-lg text-buttonText bg-secondary py-4 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Products;
