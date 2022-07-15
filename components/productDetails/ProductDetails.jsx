import Image from "next/image";
import { useState } from "react";
import { ImMinus, ImPlus } from "react-icons/im";
import { RiShoppingCart2Line } from "react-icons/ri";

const ProductDetails = ({ productData }) => {
  const [numberOfItems, setNumberOfItems] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const addItem = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  const leaveItem = () => {
    setNumberOfItems(numberOfItems === 1 ? 1 : numberOfItems - 1);
  };

  const handleDiscountedPrice = (discountPercentage, initialPrice) => {
    const discountedAmount = (discountPercentage / 100) * initialPrice;
    return discountedAmount;
  };
  return (
    <section className="min-h-screen w-full max-w-[1200px] mx-auto py-10 px-6 md:px-0 flex items-center justify-center">
      <div className="w-full">
        {productData.map((product) => (
          <div className="flex md:flex-row flex-col items-center gap-10 shadow-xl rounded-lg overflow-hidden">
            <div className="relative w-full md:w-2/3 h-[600px]">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="cover"
                objectPosition="top"
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
                    className="w-full p-1 font-bold text-sm"
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
                    className="w-full p-1 font-bold text-sm"
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
                  <div onClick={leaveItem} className="p-5 text-accent">
                    <ImMinus />
                  </div>
                  <div className="font-bold p-5 text-lg text-primary">
                    <span>{numberOfItems}</span>
                  </div>
                  <div onClick={addItem} className="p-5 text-accent">
                    <ImPlus />
                  </div>
                </div>
                <button className="bg-secondary text-buttonText flex items-center gap-2 font-bold px-6 py-2 rounded-lg">
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
