import { useEffect } from "react";

import CartDetails from "../components/cart/CartDetails";
export default function Cart() {
  // const [itemNumbersInLocalStorage, setItemNumbersInLocalStorage] = useState(0);
  // get the all related keys from the local storage
  const getItemAmountFromLocalStorage = () => {
    let values = [];
    // only get the ones that are related (product)
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
    return parsedValues;
  };

  useEffect(() => {
    getItemAmountFromLocalStorage();
  }, []);

  // Get the data from the local storage and put it inside a variable
  // to map the data and show the items
  const localStorageData = getItemAmountFromLocalStorage();
  console.log(localStorageData[0]);

  return (
    <section className="min-h-screen w-full max-w-[1200px] mx-auto py-10 px-6 lg:px-0 flex flex-col items-center justify-center">
      <div className="w-full space-y-10">
        {localStorageData.map((item, idx) => (
          <CartDetails item={item} idx={idx} />
        ))}
      </div>
    </section>
  );
}
