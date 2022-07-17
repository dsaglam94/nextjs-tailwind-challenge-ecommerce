import { CartLocaleStorage } from "../context/CartContext";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutItems from "../components/checkout/CheckoutItems";
import Meta from "../components/Meta";

export default function Checkout() {
  const { localStorageData, totalAmount } = CartLocaleStorage();

  return (
    <>
      <Meta title={"Hoodier | Checkout"} />

      <section className="min-h-screen w-full max-w-[1200px] mx-auto py-10 px-6 lg:px-0 flex flex-col items-center justify-center gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          {localStorageData.map((item) => (
            <CheckoutItems key={item.id} item={item} />
          ))}
        </div>
        <CheckoutForm totalAmount={totalAmount} />
      </section>
    </>
  );
}
