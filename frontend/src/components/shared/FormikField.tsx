import { ErrorMessage, Field } from "formik";
import React from "react";

interface Props {
  name: string;
  placeholder: string;
  isError?: boolean;
  type?: string;
}

export const FormikField = ({ name, placeholder, isError, type }: Props) => {
  return (
    <>
      <Field
        className={"bg-slate-100 rounded px-2 py-2 my-1 border-[1px] w-full " + (isError ? "border-2 border-red-700" : "")}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <ErrorMessage name={name}>{(msg) => <div className="text-red-700 text-xs">{msg}</div>}</ErrorMessage>
    </>
  );
};
