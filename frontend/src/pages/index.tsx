import type { NextPage } from "next";
import Head from "next/head";
import { HomePage } from "../components/HomePage";
import { Wave } from "../components/shared/Wave";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rocketeer</title>
      </Head>
      <HomePage />
      <Wave />
    </>
  );
};

export default Home;
