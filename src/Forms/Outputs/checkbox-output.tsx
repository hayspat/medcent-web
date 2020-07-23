import React from "react";
import { OutputLayout } from "Forms/Layout/output-layout";
import { InputTypes } from "Util/types";

type PropTypes = {
  base: InputTypes;
  data: any;
};

export const CheckboxOutput = (props: PropTypes) => {
  return (
    <OutputLayout title={props.base.title}>
      <label className="flex w-full h-12">
        <input
          type={props.base.type ? props.base.type : "checkbox"}
          name={props.base.for}
          value={props.data}
          checked={props.data}
          className="med-checkbox-type"
          disabled
        />
        <div className="flex w-full h-12 px-4 align-middle border rounded-lg border-color-gray-300 med-checkbox">
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
    </OutputLayout>
  );
};
