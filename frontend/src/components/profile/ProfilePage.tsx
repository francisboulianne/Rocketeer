import Link from "next/link";
import { useCookies } from "react-cookie";
import { FormHeader } from "../shared/FormHeader";
import { FormLayout } from "../shared/FormLayout";
import { MenuItem } from "../shared/MenuItem";
import { ProfileInformation } from "./ProfileInformation";

export const ProfilePage = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["credentials"]);

  const logOut = () => {
    removeCookie("credentials");
  };

  return (
    <div>
      <MenuItem variant="xl">
        <FormLayout>
          <FormHeader text="Rocketeer" />
          <ProfileInformation />
        </FormLayout>
      </MenuItem>

      <MenuItem variant="sm">
        <Link href="/" passHref={true}>
          <button className="text-white w-20 rounded py-2 mt-2 bg-blue-400" onClick={logOut}>
            Log out
          </button>
        </Link>
      </MenuItem>
    </div>
  );
};
