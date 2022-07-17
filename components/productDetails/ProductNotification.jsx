import { TiTick } from "react-icons/ti";

const ProductNotification = ({ isItemAddedToCart }) => {
  return (
    <article
      className={
        isItemAddedToCart
          ? "absolute top-0 left-0 bg-black/70 w-full h-full flex items-center justify-center duration-75 ease-in opacity-100"
          : "absolute top-0 left-0 bg-black/70 w-full h-full flex items-center justify-center duration-150 ease-in opacity-0 select-none pointer-events-none"
      }
    >
      <div className="w-[80%] max-w-[500px]  bg-primary flex flex-col items-center justify-center p-10 gap-10 rounded-lg">
        <div>
          <p className="font-bold text-center text-lg md:text-xl">
            The item has been successfully added to your shopping cart!
          </p>
        </div>
        <div className="bg-green-600 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center text-4xl md:text-5xl rounded-full">
          <TiTick className="text-buttonText" />
        </div>
      </div>
    </article>
  );
};

export default ProductNotification;
