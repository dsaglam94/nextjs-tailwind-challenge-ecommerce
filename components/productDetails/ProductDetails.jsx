import Image from "next/image";
import { useEffect, useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import { RiShoppingCart2Line } from "react-icons/ri";

const ProductDetails = ({ productData }) => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const { image, title, description } = productData[0];
  const id = productData[0].id;
  const addItem = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  const leaveItem = () => {
    setNumberOfItems(numberOfItems === 1 ? 1 : numberOfItems - 1);
  };
  // returns the discounted amount to calculate final discounted price
  const handleDiscountedPrice = (discountPercentage, initialPrice) => {
    const discountedAmount = (discountPercentage / 100) * initialPrice;
    return discountedAmount;
  };

  // returns final discounted price
  const discountedPrice =
    productData[0].initial_price -
    handleDiscountedPrice(
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
      return localStorage.setItem(`product${id}`, JSON.stringify(obj));
    } else {
      // if there is already an item with this key
      // update the number of items
      const initialAmount = JSON.parse(
        localStorage.getItem(`product${id}`)
      ).item_amount;
      obj.item_amount += initialAmount;
      return localStorage.setItem(`product${id}`, JSON.stringify(obj));
    }
  };

  //   useEffect(() => {
  //     const test = localStorage.getItem("product1");
  //     console.log(test);
  //     console.log(JSON.parse(test));
  //     const data = JSON.parse(test);
  //     setTestImage(data.image);
  //   }, []);
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
                <span className="font-bold text-3xl md:text-5xl text-accent">{`$${(
                  product.initial_price -
                  handleDiscountedPrice(
                    product.discount_percentage,
                    product.initial_price
                  )
                ).toFixed(2)}`}</span>
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
              <div className="flex items-center py-10">
                <div className="flex items-center">
                  <div
                    onClick={leaveItem}
                    className="p-5 text-accent cursor-pointer hover:opacity-90"
                  >
                    <ImMinus />
                  </div>
                  <div className="font-bold p-5 text-lg text-primary">
                    <span>{numberOfItems}</span>
                  </div>
                  <div
                    onClick={addItem}
                    className="p-5 text-accent cursor-pointer hover:opacity-90"
                  >
                    <ImPlus />
                  </div>
                </div>
                <button
                  onClick={() => addToLocalStorage(id)}
                  className="bg-secondary text-buttonText flex items-center gap-2 font-bold px-6 py-2 rounded-lg hover:opacity-90"
                >
                  <RiShoppingCart2Line />
                  add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
