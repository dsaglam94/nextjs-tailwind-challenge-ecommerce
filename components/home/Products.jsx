import Image from "next/image";
import { useRouter } from "next/router";

const Products = ({ item }) => {
  const router = useRouter();
  // handle discounting the price
  const handleDiscountedPrice = (discountPercentage, initialPrice) => {
    const discountedAmount = (discountPercentage / 100) * initialPrice;
    return discountedAmount;
  };
  return (
    <div className="shadow-xl bg-primary rounded-lg overflow-hidden">
      <div className="relative w-full h-[400px]">
        <Image
          src={item.image}
          layout="fill"
          alt={item.title}
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="p-6">
        <div>
          <h2 className="font-bold text-lg text-primary py-2">{item.title}</h2>
          <p className="text-secondary opacity-90 text-md">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between py-6">
          <span className="font-bold text-3xl text-primary">{`$${(
            item.initial_price -
            handleDiscountedPrice(item.discount_percentage, item.initial_price)
          ).toFixed(2)}`}</span>
          <span className="text-lg text-secondary opacity-90 line-through">{`$${item.initial_price.toFixed(
            2
          )}`}</span>
        </div>
        <div
          onClick={() => router.push(`/product/${item.id}`)}
          className="w-full font-bold text-lg text-buttonText bg-secondary py-4 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90"
        >
          <a>Order Now</a>
        </div>
      </div>
    </div>
  );
};

export default Products;
