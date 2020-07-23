import React from "react";
import { Field, ErrorMessage } from "formik";
import "twin.macro";

type PropTypes = {
  id: string;
  label: string;
  placeholder: string;
  type?: HTMLInputElement["type"];
};

export const CustomInput = (props: PropTypes) => {
  return (
    <>
      <label className="block" htmlFor={props.id}>
        {props.label}
      </label>
      <Field
        tw="form-input"
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        type={props.type}
      />
      <ErrorMessage name={props.id} component="div" />
    </>
  );
};
