import Image from "next/image";
import { useEffect, useState } from "react";
import { CartLocaleStorage } from "../../context/CartContext";
import { ImMinus, ImPlus } from "react-icons/im";
import { RiShoppingCart2Line } from "react-icons/ri";
import ProductNotification from "./ProductNotification";

const ProductDetails = ({ productData }) => {
  const { setIsItemAdded, calculateDiscountedAmount } = CartLocaleStorage();
  const [isItemAddedToCart, setIsItemAddedToCart] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const { image, title, description } = productData[0];
  const id = productData[0].id;

  // hide the notification after 2seconds
  useEffect(() => {
    const counter = setTimeout(() => {
      setIsItemAddedToCart(false);
      console.log("hello");
    }, 1000);
    return () => clearTimeout(counter);
  }, [isItemAddedToCart]);

  const addItem = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  const leaveItem = () => {
    setNumberOfItems(numberOfItems === 1 ? 1 : numberOfItems - 1);
  };

  // returns final discounted price
  const discountedPrice =
    productData[0].initial_price -
    calculateDiscountedAmount(
      productData[0].discount_percentage,
      productData[0].initial_price
    );

  // add the values to localstorage
  // to get from the cart page
  const addToLocalStorage = (id) => {
    if (color === null || color === "choose") {
      return alert("Choose the hoodie color!");
    } else if (size === null || size === "choose") {
      return alert("Choose the hoodie size!");
    }
    const obj = {
      id: id,
      completed: false,
      image: image,
      title: title,
      description: description,
      discounted_price: discountedPrice,
      item_amount: numberOfItems,
      item_color: color,
      item_size: size,
    };
    // if no item in the localstorage with this key
    if (!localStorage.getItem(`product${id}`)) {
      setIsItemAdded((prevValue) => !prevValue);
      setIsItemAddedToCart((prevValue) => !prevValue);
      return localStorage.setItem(`product${id}`, JSON.stringify(obj));
    } else {
      // if there is already an item with this key
      // update the number of items
      const initialAmount = JSON.parse(
        localStorage.getItem(`product${id}`)
      ).item_amount;
      obj.item_amount += initialAmount;
      setIsItemAdded((prevValue) => !prevValue);
      setIsItemAddedToCart((prevValue) => !prevValue);
      return localStorage.setItem(`product${id}`, JSON.stringify(obj));
    }
  };
  return (
    <section className="min-h-screen w-full max-w-[1200px] mx-auto py-10 px-6 md:px-0 flex items-center justify-center">
      <div className="w-full">
        {productData.map((product) => (
          <div
            key={product.id}
            className="flex md:flex-row flex-col items-center gap-10 shadow-xl rounded-lg overflow-hidden"
          >
            <div className="relative w-full md:w-2/3 h-[600px]">
              <Image
                className="object-top"
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full flex flex-col items-center md:items-start">
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                <h2 className="text-primary text-3xl md:text-5xl font-bold">
                  {product.title}
                </h2>
                <p className="text-secondary opacity-90 text-md md:text-xl w-[90%] md:w-[80%]">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between md:justify-start md:gap-10 py-6 w-[90%]">
                <span className="font-bold text-3xl md:text-5xl text-accent">{`$${discountedPrice.toFixed(
                  2
                )}`}</span>
                <span className="text-lg text-secondary md:text-xl opacity-90 line-through">{`$${product.initial_price.toFixed(
                  2
                )}`}</span>
              </div>
              <div className="flex items-center justify-between md:justify-start md:gap-10 w-[90%] py-5">
                <div className="space-y-2">
                  <h3 className="font-bold text-md text-primary">
                    Choose your color:
                  </h3>
                  <select
                    onChange={(e) => setColor(e.target.value)}
                    className="w-full bg-primary text-primary p-1 font-bold text-sm border-accent border-2 rounded-md"
                    name="colors"
                    id="colors"
                  >
                    <option value="choose">Choose</option>
                    <option value="red">red</option>
                    <option value="black">black</option>
                    <option value="beige">beige</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-md text-primary">
                    Choose your size:
                  </h3>
                  <select
                    onChange={(e) => setSize(e.target.value)}
                    className="w-full bg-primary text-primary p-1 font-bold text-sm border-accent border-2 rounded-md"
                    name="sizes"
                    id="sizes"
                  >
                    <option value="choose">Choose</option>
                    <option value="small">small</option>
                    <option value="Medium">Medium</option>
                    <option value="large">large</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center py-10 md:gap-4 w-full md:w-auto px-6 md:px-0 justify-between">
                <div className="flex items-center">
                  <button
                    onClick={leaveItem}
                    className="p-5 bg-transparent text-accent cursor-pointer hover:opacity-90"
                  >
                    <ImMinus />
                  </button>
                  <div className="font-bold p-5 text-lg text-primary">
                    <span>{numberOfItems}</span>
                  </div>
                  <button
                    onClick={addItem}
                    className="p-5 bg-transparent text-accent cursor-pointer hover:opacity-90"
                  >
                    <ImPlus />
                  </button>
                </div>
                <button
                  onClick={() => addToLocalStorage(id)}
                  className="flex items-center gap-2 px-6 py-2"
                >
                  <RiShoppingCart2Line />
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
        <ProductNotification isItemAddedToCart={isItemAddedToCart} />
      </div>
    </section>
  );
};

export default ProductDetails;
