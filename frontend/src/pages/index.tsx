import type { NextPage } from "next";
import Head from "next/head";
import { HomePage } from "../components/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rocketeer</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
