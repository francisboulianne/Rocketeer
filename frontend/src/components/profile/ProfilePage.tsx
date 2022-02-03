import Link from "next/link";
import { FormHeader } from "../shared/FormHeader";
import { FormLayout } from "../shared/FormLayout";
import { MenuItem } from "../shared/MenuItem";

export const ProfilePage = () => {
  return (
    <div>
      <MenuItem variant="xl">
        <FormLayout>
          <FormHeader text="Rocketeer" />
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
