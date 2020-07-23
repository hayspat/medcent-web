import React from "react";
import { Field } from "formik";
import { InputLayout } from "Forms/input-layout";
import { gender } from "Util/system";
import { InputTypes, FormikData } from "Util/types";

type PropTypes = {
  options: typeof gender;
  base: InputTypes;
};

export const Radiobox = (props: PropTypes & FormikData) => {
  // console.log("radio", props);
  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      <div className="flex w-full h-12">
        {props.options.map((data, index) => {
          return (
            <label key={index} className="outline-none" tabIndex={0}>
              <Field
                id="gender"
                type={props.base.type ? props.base.type : "radio"}
                name={props.base.for}
                value={data.value}
                checked={props.values === data.value ? props.values : ""}
                className="med-radio-type"
              />
              <div className="flex h-12 px-4 mr-4 align-middle border border-gray-300 rounded-lg shadow-base med-radio focus:shadow-none focus:outline-med-500">
                <div className="flex w-4 h-4 my-auto mr-4 text-white bg-gray-300 rounded-full med-radio-span">
                  <span className="w-2 h-2 m-auto bg-white rounded-full shadow" />
                </div>
                <span className="flex items-center text-gray-500">
                  {data.label}
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </InputLayout>
  );
};
