import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { signSchema } from "Util/ValidationSchemas";
import { useLoginMutation } from "Util/generated/graphql";
import { setToken, getToken } from "Util/auth";
import { history } from "Util/history";
import Fields from "Forms/Elements/fields";
import { signForm } from "Util/form-fields";
import "twin.macro";

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [, login] = useLoginMutation();
  const [isLoggedIn, setIsLoggedIn] = useState(!!getToken());

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        login({
          email: values.email,
          password: values.password,
        }).then((response) => {
          if (response.data) {
            setToken(response.data.login.accessToken);
            setIsLoggedIn(true);
          }
        });
      }}
      validationSchema={signSchema}
      render={(formikBag) => (
        <Form>
          <Fields
            base={signForm.email}
            touched={formikBag.touched.email}
            errors={formikBag.errors.email}
            values={formikBag.values.email}
          />
          <Fields
            base={signForm.password}
            touched={formikBag.touched.password}
            errors={formikBag.errors.password}
            values={formikBag.values.password}
          />

          <button
            type="submit"
            tw="w-full px-6 py-4 mt-20 rounded bg-med-500 shadow-base"
          >
            Giriş Yap
          </button>
          <div>Email: {formikBag.values.email}</div>
        </Form>
      )}
    />
  );
};
