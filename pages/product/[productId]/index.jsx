import productDetailsData from "../../../components/home/productDetailsData";

export default function ProductDetailsPage({ data }) {
  return (
    <div>
      <h1>hello</h1>
      {data.map((item) => (
        <di>{item.title}</di>
      ))}
    </div>
  );
}

export const getStaticProps = async (context) => {
  const productId = context.params.productId;
  console.log(productId);

  const data = productDetailsData.filter((item) => item.id === productId);

  return {
    props: {
      data,
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
