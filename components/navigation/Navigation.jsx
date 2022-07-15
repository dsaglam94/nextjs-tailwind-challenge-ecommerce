import { useEffect, useState } from "react";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

const Navigation = () => {
  const [totalItems, setTotalItems] = useState(0);
  // get the all related keys from the local storage
  const getItemAmountFromLocalStorage = () => {
    let count = 0;
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

    // add all the items in the local storage to show in cart icon
    for (let i = 0; i < parsedValues.length; i++) {
      if (!parsedValues[i].completed) {
        count += parsedValues[i].item_amount;
      }
    }
    setTotalItems(count);
  };

  useEffect(() => {
    getItemAmountFromLocalStorage();
    console.log(totalItems);
  }, [totalItems]);

  return (
    <>
      <NavigationDesktop totalItems={totalItems} />
      <NavigationMobile totalItems={totalItems} />
    </>
  );
};

export default Navigation;
