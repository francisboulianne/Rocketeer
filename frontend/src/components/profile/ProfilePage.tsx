import Link from "next/link";
import { useLogout } from "../../hooks/useLogout";
import User from "../../user/domain/User";
import { FormHeader } from "../shared/FormHeader";
import { FormLayout } from "../shared/FormLayout";
import { MenuItem } from "../shared/MenuItem";
import { ProfileInformation } from "./ProfileInformation";

interface Props {
  user: User;
}

export const ProfilePage = ({ user }: Props) => {
  const { logout } = useLogout();

  const onLogout = async () => {
    await logout();
  };

  return (
    <div>
      <MenuItem variant="xl">
        <FormLayout>
          <FormHeader text="Rocketeer" />
          <ProfileInformation user={user} />
        </FormLayout>
      </MenuItem>

      <MenuItem variant="sm">
        <Link href="/" passHref={true}>
          <button className="text-white w-20 rounded bg-blue-400" onClick={onLogout}>
            Log out
          </button>
        </Link>
      </MenuItem>
    </div>
  );
};
