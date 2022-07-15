import Head from "next/head";

const Meta = ({ title }) => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="hoodie, oversize, clothing, branding, style"
        />
        <meta
          name="description"
          content="Bringing the quality and low-price together to provide the best service and products."
        />
        <title>{title}</title>
      </Head>
    </div>
  );
};

export default Meta;
