import Link from "next/link";
const CartCheckout = ({ totalAmount }) => {
  return (
    <section className="shadow-xl rounded-lg py-10 flex flex-col items-center justify-center gap-10">
      {totalAmount === 0 ? (
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">No item in the cart</h3>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold">Total Amount:</h3>
          <span className="text-green-600 text-3xl font-bold">
            ${totalAmount}
          </span>
        </div>
      )}
      <Link href={totalAmount === 0 ? "/" : "/checkout"}>
        <a className="bg-secondary px-8 py-3 rounded-lg font-bold text-buttonText hover:opacity-90">
          {totalAmount === 0 ? "Start Exploring" : "Check Out"}
        </a>
      </Link>
    </section>
  );
};

export default CartCheckout;
