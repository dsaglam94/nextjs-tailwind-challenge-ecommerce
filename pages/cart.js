import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CartDetails from "../components/cart/CartDetails";
import CartCheckout from "../components/cart/CartCheckout";
import Meta from "../components/Meta";

export default function Cart() {
  const [localStorageData, setLocalStorageData] = useState([]);
  const router = useRouter();

  // get the all related keys from the local storage
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
    const parsedValues = values.map((item) => JSON.parse(item));
    // returning the values in an array to use
    // setLoading(false);
    return parsedValues;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const data = getItemsFromLocalStorage();
      setLocalStorageData(data);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  // console.log(localStorageData);

  // Get the data from the local storage and put it inside a variable
  // to map the data and show the items
  // const localStorageData = getItemsFromLocalStorage();
  const removeItemFromLocalStorage = (id) => {
    let current = {};
    let keys = Object.keys(localStorage).filter((key) =>
      key.includes("product")
    );

    for (let i = 0; i < keys.length; i++) {
      current = JSON.parse(localStorage.getItem(keys[i]));
      if (current.id === id) {
        console.log(current);
        console.log(keys[i]);
        localStorage.removeItem(keys[i]);
        router.reload();
      }
    }
  };

  const completeItemFromLocalStorage = (id) => {
    let current = {};
    let keys = Object.keys(localStorage).filter((key) =>
      key.includes("product")
    );

    for (let i = 0; i < keys.length; i++) {
      current = JSON.parse(localStorage.getItem(keys[i]));
      if (current.id === id) {
        console.log(current);
        console.log(keys[i]);
        current.completed = !current.completed;

        localStorage.setItem(`product${id}`, JSON.stringify(current));

        // localStorage.removeItem(keys[i]);
        router.reload();
      }
    }
  };
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
      <Meta title={"Hoodier | Cart"} />
      <section className="min-h-screen w-full max-w-[1200px] mx-auto py-10 px-6 lg:px-0 flex flex-col items-center justify-center">
        <div className="w-full space-y-10">
          {localStorageData.map((item, idx) => (
            <CartDetails
              removeItemFromLocalStorage={removeItemFromLocalStorage}
              completeItemFromLocalStorage={completeItemFromLocalStorage}
              item={item}
              idx={idx}
              key={idx}
            />
          ))}
          <CartCheckout totalAmount={totalAmount} />
        </div>
      </section>
    </>
  );
}
