import type { NextPage } from "next";
import Head from "next/head";
import { Wave } from "../components/shared/Wave";
import { SignUpMenu } from "../components/signup/SignUpMenu";

const Signup: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rocketeer - Signup</title>
      </Head>
      <div className="md:bg-slate-100 h-screen w-screen flex justify-center text-center md:items-center">
        <SignUpMenu />
      </div>
      <Wave />
    </>
  );
};

export default Signup;
