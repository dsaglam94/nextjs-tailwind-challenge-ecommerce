import productDetailsData from "../../../components/home/productDetailsData";
import ProductDetails from "../../../components/productDetails/ProductDetails";
import ProductNotification from "../../../components/productDetails/ProductNotification";

export default function ProductDetailsPage({ productData }) {
  return (
    <section>
      <ProductDetails productData={productData} />
    </section>
  );
}

export const getStaticProps = async (context) => {
  const productId = context.params.productId;
  console.log(productId);

  const productData = productDetailsData.filter(
    (item) => item.id === productId
  );

  return {
    props: {
      productData,
    },
  };
};

export const getStaticPaths = async () => {
  const ids = productDetailsData.map((item) => item.id);
  const paths = ids.map((id) => ({ params: { productId: String(id) } }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
