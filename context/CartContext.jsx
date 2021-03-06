import React, { useState, useEffect, createContext, useContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [localStorageData, setLocalStorageData] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isItemRemoved, setIsItemRemoved] = useState(false);
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [isItemCompleted, setIsItemCompleted] = useState(false);

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

  // Anytime one of the actions fire
  // re calculate the total items amount
  useEffect(() => {
    getItemAmountFromLocalStorage();
  }, [totalItems, isItemRemoved, isItemAdded, isItemCompleted]);

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
    // return parsedValues;
    setLocalStorageData(parsedValues);
  };

  // This is important
  // first render the window obj returns undefined
  // throws an error so I delay it for 100 miliseconds to allow CSR
  useEffect(() => {
    const timer = setTimeout(() => {
      getItemsFromLocalStorage();
    }, 100);
    return () => clearTimeout(timer);
  }, [isItemAdded, isItemCompleted, isItemRemoved]);

  // Remove the specific item from localStorage
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
        setIsItemRemoved((preValue) => !preValue);
      }
    }
  };
  // mark the item as completed when clicked
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
        setIsItemCompleted((preValue) => !preValue);
        localStorage.setItem(`product${id}`, JSON.stringify(current));
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

  // helper function to calculate the discounted amount
  const calculateDiscountedAmount = (discountPercentage, initialPrice) => {
    const discountedAmount = (discountPercentage / 100) * initialPrice;
    return discountedAmount;
  };

  return (
    <CartContext.Provider
      value={{
        removeItemFromLocalStorage,
        completeItemFromLocalStorage,
        calculateDiscountedAmount,
        localStorageData,
        totalAmount,
        totalItems,
        isItemRemoved,
        isItemCompleted,
        setIsItemAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function CartLocaleStorage() {
  return useContext(CartContext);
}
