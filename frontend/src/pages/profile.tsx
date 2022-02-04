import type { NextPage } from "next";
import Head from "next/head";
import { ProfilePage } from "../components/profile/ProfilePage";
import { Wave } from "../components/shared/Wave";

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rocketeer - Profile</title>
      </Head>
      <div className="md:bg-slate-100 h-screen w-screen flex justify-center text-center md:items-center">
        <ProfilePage />
      </div>
      <Wave />
    </>
  );
};

export default Profile;
