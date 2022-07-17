import { CartLocaleStorage } from "../context/CartContext";
import CartDetails from "../components/cart/CartDetails";
import CartCheckout from "../components/cart/CartCheckout";
import Meta from "../components/Meta";

export default function Cart() {
  const { localStorageData, totalAmount } = CartLocaleStorage();

  return (
    <>
      <Meta title={"Hoodier | Cart"} />
      <section className="min-h-screen w-full max-w-[1200px] mx-auto py-10 px-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="w-full space-y-10">
          {localStorageData.map((item, idx) => (
            <CartDetails item={item} idx={idx} key={idx} />
          ))}
          <CartCheckout totalAmount={totalAmount} />
        </div>
      </section>
    </>
  );
}
