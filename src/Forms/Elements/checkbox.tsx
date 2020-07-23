import React from "react";
import { InputLayout } from "Forms/input-layout";
import { Field } from "formik";
import { FormikData, InputTypes } from "Util/types";

type PropTypes = {
  base: InputTypes;
};

export const Checkbox = (props: PropTypes & FormikData) => {
  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      <label className="flex w-full h-12">
        <Field
          type={props.base.type ? props.base.type : "checkbox"}
          name={props.base.for}
          checked={props.values}
          className="med-checkbox-type"
        />
        <div
          tabIndex={0}
          className="flex w-full h-12 px-4 align-middle border rounded-lg border-color-gray-300 med-checkbox"
        >
          <div className="flex w-4 h-4 my-auto mr-4 text-white bg-gray-300 rounded med-checkbox-span">
            <svg
              className="m-auto fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 24 24"
            >
              <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
            </svg>
          </div>
          <span className="flex items-center text-gray-500">
            {props.base.placeholder}
          </span>
        </div>
      </label>
    </InputLayout>
  );
};
