import React from "react";
import { Field } from "formik";
import { InputLayout } from "Forms/input-layout";
import { InputTypes, FormikData } from "Util/types";
import { color } from "Util/system";

type PropTypes = {
  base: InputTypes;
  options: typeof color;
};

export const ColorPicker = (props: PropTypes & FormikData) => {
  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      <div className="flex justify-between w-full h-12">
        {props.options.map((data, index) => {
          return (
            <label key={index}>
              <Field
                type={props.base.type ? props.base.type : "radio"}
                name={props.base.for}
                value={data.value}
                checked={props.values === data.value}
                className="med-radio-color"
              />
              <div
                className={`h-12 w-12 flex px-4 my-auto rounded-full bg-${data.label} opacity-25 text-${data.label} border shadow-base med-radio-colors align-middle`}
              >
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
            </label>
          );
        })}
      </div>
    </InputLayout>
  );
};
