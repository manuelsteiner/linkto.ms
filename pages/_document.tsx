import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" className="scroll-smooth transition duration-300">
      <Head>
        <link
          href="/fonts/roboto.woff2"
          rel="preloadas"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
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
