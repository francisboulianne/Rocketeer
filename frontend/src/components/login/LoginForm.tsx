import { AxiosError } from "axios";
import { Form, Formik, useFormikContext } from "formik";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { State } from "../../hooks/useAxios";
import { Credentials, useLogin } from "../../hooks/useLogin";
import { SpinnerIcon } from "../icons/SpinnerIcon";
import { FormikField } from "../shared/FormikField";

interface InternalLoginFormProps {
  state: State;
  error: AxiosError | undefined;
}

const InternalLoginForm = ({ state, error }: InternalLoginFormProps) => {
  const { errors: formErrors, touched, setErrors: setFormErrors, initialValues } = useFormikContext<Credentials>();

  const router = useRouter();

  useEffect(() => {
    switch (state) {
      case State.SUCCESS:
        // TODO set session cookies
        localStorage.setItem("user");
        router.push("/profile");
        break;

      case State.ERROR:
        setErrors(error?.response?.data.errors);
        break;
    }
  }, [router, state]);

  const setErrors = (errors: any) => {
    const newErrors: any = {};
    errors?.map((error: any) => {
      newErrors[error.param] = error.msg;
    });

    setFormErrors(newErrors);
  };

  const isFormInvalid = () => {
    return Object.keys(formErrors).length > 0 || Object.keys(touched).length < Object.keys(initialValues).length;
  };

  return (
    <Form className="text-center align-middle justify-center">
      <FormikField name="username" placeholder="Username" isError={!!(formErrors.username && touched.username)} />

      <FormikField name="password" placeholder="Password" isError={!!(formErrors.password && touched.password)} type="password" />

      <button
        className={"text-white rounded py-2 mt-2 w-full " + (isFormInvalid() ? "bg-blue-200" : "bg-blue-400")}
        type="submit"
        disabled={isFormInvalid()}
      >
        <span className={state === State.LOADING ? "ml-4" : ""}>Submit</span>
        <span className="relative float-right mt-1 mr-4">{state === State.LOADING && <SpinnerIcon size={20} />}</span>
      </button>
    </Form>
  );
};

export const LoginForm = () => {
  const { state, loginUser, error } = useLogin();

  const initialValues: Credentials = {
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required(" "),
    password: Yup.string().required(" ")
  });

  const onSubmit = (values: Credentials) => {
    loginUser(values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
        initialStatus={{}}
      >
        <InternalLoginForm state={state} error={error} />
      </Formik>
    </div>
  );
};
