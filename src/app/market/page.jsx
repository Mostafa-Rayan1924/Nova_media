import Head from "next/head";

const Market = () => {
  return (
    <section className="my-[120px] container  space-y-28 ">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="yRJxt4zBwj5HVHAibjsaEKY5jV3smdQTV7bZ6FHAyGI"
        />

        <meta property="og:image" content="https://novamedia-eg.com/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="preload" as="image" href="/logo.png" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <meta property="og:url" content="https://novamedia-eg.com/" />
        {/* Meta robots */}
        <meta name="robots" content="index, follow" />
        {/* Canonical Link */}
        <link rel="canonical" href="https://novamedia-eg.com/market" />
      </Head>
      <img
        className="w-full h-[400px]  sm:h-[80vh]  rounded-lg"
        src="/market.jpg"
      />
    </section>
  );
};

export default Market;
