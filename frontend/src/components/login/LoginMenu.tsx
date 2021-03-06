import Link from "next/link";
import React from "react";
import { FormLayout } from "../shared/FormLayout";
import { FormHeader } from "../shared/FormHeader";
import { MenuItem } from "../shared/MenuItem";
import { LoginForm } from "./LoginForm";

export const LoginMenu = () => {
  return (
    <div>
      <MenuItem variant="xl">
        <FormLayout>
          <FormHeader text="Rocketeer" />
          <LoginForm />
        </FormLayout>
      </MenuItem>

      <MenuItem variant="sm">
        <span>{"Don't have an account ? "}</span>
        <Link href="/signup">
          <a className="text-sky-500 font-semibold">Sign up</a>
        </Link>
      </MenuItem>
    </div>
  );
};
