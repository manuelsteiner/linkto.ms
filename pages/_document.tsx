import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" className="scroll-smooth transition duration-300">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
