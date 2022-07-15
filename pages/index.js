import { useEffect, useState } from "react";
import productDetailsData from "../components/home/productDetailsData";
import Products from "../components/home/Products";

export default function Home() {
  const [lastItem, setLastItem] = useState(3);
  const [showLess, setShowLess] = useState(false);

  useEffect(() => {
    // if all the items in the array are displayed
    if (lastItem >= productDetailsData.length) {
      setShowLess(true);
    }
    //if more items in the array can be displayed
    if (lastItem < productDetailsData.length) {
      setShowLess(false);
    }
  }, [productDetailsData.length, lastItem]);

  const handleLoadMore = () => {
    // Display the next 3 items each time
    // the load more button is clicked
    setLastItem(lastItem + 3);
    // if all the items in the array are displayed
    // set it back to normal value
    if (showLess) {
      setLastItem(3);
    }
  };

  // Get a given number of the first items from the customerFavoritesData array
  const dispalyedCustomerFavoriteItems = productDetailsData.slice(0, lastItem);

  return (
    <section className="min-h-screen w-full max-w-[1200px] mx-auto py-10 px-6 lg:px-0 flex flex-col items-center justify-center">
      <div className="w-full flex items-start text-3xl font-bold text-primary">
        <h1>Oversize</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
        {dispalyedCustomerFavoriteItems.map((item, idx) => (
          <Products item={item} key={idx} />
        ))}
      </div>
      <button
        className="bg-secondary px-8 py-3 rounded-lg font-bold text-buttonText disabled:opacity-50 hover:opacity-90"
        onClick={handleLoadMore}
      >
        {showLess ? "Show less" : "Load more"}
      </button>
    </section>
  );
}
