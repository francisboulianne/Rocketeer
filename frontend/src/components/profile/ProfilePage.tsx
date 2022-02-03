import Link from "next/link";
import { FormHeader } from "../shared/FormHeader";
import { FormLayout } from "../shared/FormLayout";
import { MenuItem } from "../shared/MenuItem";
import { ProfileInformation } from "./ProfileInformation";

export const ProfilePage = () => {
  return (
    <div>
      <MenuItem variant="xl">
        <FormLayout>
          <FormHeader text="Rocketeer" />
          <ProfileInformation />
        </FormLayout>
      </MenuItem>

      <MenuItem variant="sm">
        <Link href="/">
          <a className="text-sky-500 font-semibold">Log out</a>
        </Link>
      </MenuItem>
    </div>
  );
};
