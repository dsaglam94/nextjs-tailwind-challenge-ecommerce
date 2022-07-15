import Image from "next/image";
import { FaTimes, FaEquals, FaTrash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const CartDetails = ({
  item,
  idx,
  removeItemFromLocalStorage,
  completeItemFromLocalStorage,
}) => {
  return (
    <div
      key={idx}
      className={
        item.completed
          ? "w-full flex flex-col md:flex-row items-center overflow-hidden rounded-lg shadow-xl md:gap-10 opacity-50"
          : "w-full flex flex-col md:flex-row items-center overflow-hidden rounded-lg shadow-xl md:gap-10"
      }
    >
      <div className="relative w-full h-[500px] md:w-1/3 md:h-[400px]">
        <Image
          className="object-top"
          src={item.image.src}
          alt={item.title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full flex flex-col items-center md:items-start py-10 md:py-0 gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="flex items-center gap-2">
            <span>Already completed your purchase?</span>
            {/* <input
              onChange={() => completeItemFromLocalStorage(item.id)}
              type="checkbox"
            /> */}
            <button
              onClick={() => completeItemFromLocalStorage(item.id)}
              className="bg-secondary p-1 text-buttonText rounded hover:opacity-90"
              aria-label="click to mark your item as completed"
            >
              <TiTick />
            </button>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            {item.title}
          </h2>
          <div className="flex items-center gap-5">
            <div className="text-primary text-lg md:text-2xl flex items-center gap-2">
              <h3 className="font-bold">Color:</h3>
              <span className="capitalize">{item.item_color}</span>
            </div>
            <div className="text-primary text-lg md:text-2xl flex items-center gap-2">
              <h3 className="font-bold">Size:</h3>
              <span className="capitalize">{item.item_size}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between py-5">
            <h3 className="text-primary font-bold text-lg">Amount:</h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl text-accent font-bold">
                {item.item_amount}
              </span>
              <div>
                <FaTimes className="text-primary" />
              </div>
              <span className="text-2xl text-primary font-bold">{`$${item.discounted_price}`}</span>
              <div>
                <FaEquals className="text-primary" />
              </div>
              <span className="text-green-600 font-bold text-2xl">{`$${
                item.discounted_price * item.item_amount
              }`}</span>
            </div>
          </div>
          <div
            onClick={() => removeItemFromLocalStorage(item.id)}
            className="flex items-center justify-center w-full border-2 border-accent rounded-lg py-4 hover:opacity-90 cursor-pointer"
          >
            <FaTrash className="text-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
