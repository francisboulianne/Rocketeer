import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ProfilePage } from "../components/profile/ProfilePage";
import { Wave } from "../components/shared/Wave";
import { useUser } from "../user/api/useUser";

const User: NextPage = () => {
  const router = useRouter();
  const { username } = router.query;
  const { user, error } = useUser(username as string);

  if (error) {
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Rocketeer - Profile</title>
      </Head>
      <div className="md:bg-slate-100 h-screen w-screen flex justify-center text-center md:items-center">
        {user ? <ProfilePage user={user} /> : ""}
      </div>
      <Wave />
    </>
  );
};

export default User;
