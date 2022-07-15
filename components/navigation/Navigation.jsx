import { useEffect, useState } from "react";
import NavigationDesktop from "./NavigationDesktop";
import NavigationMobile from "./NavigationMobile";

const Navigation = () => {
  const [itemNumbersInLocalStorage, setItemNumbersInLocalStorage] = useState(0);
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
      count += parsedValues[i].item_amount;
    }
    setItemNumbersInLocalStorage(count);
  };

  console.log(itemNumbersInLocalStorage);

  useEffect(() => {
    getItemAmountFromLocalStorage();
  });

  return (
    <>
      <NavigationDesktop
        itemNumbersInLocalStorage={itemNumbersInLocalStorage}
      />
      <NavigationMobile itemNumbersInLocalStorage={itemNumbersInLocalStorage} />
    </>
  );
};

export default Navigation;
