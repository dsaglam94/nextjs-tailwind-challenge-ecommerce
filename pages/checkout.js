import { useEffect, useState } from "react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutItems from "../components/checkout/CheckoutItems";
import Meta from "../components/Meta";

export default function Checkout() {
  const [localStorageData, setLocalStorageData] = useState([]);

  // get the items from localStorage
  // save them inside a state
  const getItemsFromLocalStorage = () => {
    let values = [];
    let keys = Object.keys(localStorage).filter((key) =>
      key.includes("product")
    );

    let i = keys.length;
    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    // parse the string into object to grab the values
    const parsedValues = values
      .map((item) => JSON.parse(item))
      // check if the purchase completed or not
      .filter((item) => item.completed === false);
    // returning the values in an array to use
    return parsedValues;
  };

  // To prevent getting localStorage undefined error
  // Had to delay so window obj doesn't return undefined
  useEffect(() => {
    const timer = setTimeout(() => {
      const data = getItemsFromLocalStorage();
      setLocalStorageData(data);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // calculate the total amount
  const amounts = [];
  for (let i = 0; i < localStorageData.length; i++) {
    if (!localStorageData[i].completed) {
      amounts.push(
        localStorageData[i].discounted_price * localStorageData[i].item_amount
      );
    }
  }
  const totalAmount = amounts.reduce((acc, curr) => acc + curr, 0);

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
