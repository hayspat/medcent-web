import React from "react";
import { Formik, Form } from "formik";
import { CustomInput } from "Forms/custom-input";
import { signSchema } from "Util/ValidationSchemas";
import tw from "twin.macro";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values, { setSubmitting }) => {}}
      validationSchema={signSchema}
    >
      <Form>
        <CustomInput
          id="email"
          label="E-mail"
          placeholder="E-mail"
          type="email"
        />
        <CustomInput
          id="password"
          label="Şifre"
          placeholder="E-mail"
          type="password"
        />

        <button
          type="submit"
          className="px-6 py-4 mt-20 w-full bg-med-500 rounded shadow-base"
        >
          Giriş Yap
        </button>
      </Form>
    </Formik>
  );
};
