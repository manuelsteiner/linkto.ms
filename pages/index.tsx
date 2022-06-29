import type { NextPage } from "next";
import Content from "../components/content";
import Navbar from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Content />
    </>
  );
};

export default Home;
