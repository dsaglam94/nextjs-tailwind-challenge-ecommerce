import { FaTimes, FaEquals } from "react-icons/fa";
import Image from "next/image";

const CheckoutItems = ({ item }) => {
  return (
    <div
      key={item.id}
      className="w-full flex md:flex-row items-center overflow-hidden rounded-lg shadow-xl gap-5 md:gap-10"
    >
      <div className="relative w-44 md:h-44 h-full">
        <Image
          className="object-top"
          src={item.image.src}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full flex flex-col items-start py-10 md:py-0">
        <div className="flex flex-col items-start text-center md:text-left gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-primary">
            {item.title}
          </h2>
          <div className="flex items-center gap-5">
            <div className="text-primary text-lg flex items-center gap-2">
              <h3 className="font-bold">Color:</h3>
              <span className="capitalize">{item.item_color}</span>
            </div>
            <div className="text-primary text-lg flex items-center gap-2">
              <h3 className="font-bold">Size:</h3>
              <span className="capitalize">{item.item_size}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-5 gap-2">
            <h3 className="text-primary font-bold text-md md:text-lg">
              Amount:
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl text-accent font-bold">
                {item.item_amount}
              </span>
              <div>
                <FaTimes className="text-primary" />
              </div>
              <span className="text-xl md:text-2xl text-primary font-bold">{`$${item.discounted_price}`}</span>
              <div>
                <FaEquals className="text-primary" />
              </div>
              <span className="text-green-600 font-bold text-xl md:text-2xl">{`$${
                item.discounted_price * item.item_amount
              }`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItems;
