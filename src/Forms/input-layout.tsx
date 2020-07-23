import React from "react";
import {
  textColorChange,
  bgColorChange,
  errorsChange,
} from "Util/form-helpers";

type PropTypes = {
  title: string;
  children: React.ReactNode;
  required?: boolean;
  errors?: string;
  touched?: boolean;
  values?: any;
};

export const InputLayout = (props: PropTypes) => {
  return (
    <div className="flex mb-4">
      <div className="w-2/6 max-h-full">
        <h5 className="text-lg font-bold leading-none">{`${props.title} :`}</h5>
        {props.required ? (
          <small
            className={`text-xs mt-1 flex leading-tight ${textColorChange(
              props.touched,
              props.errors,
              props.values
            )} relative items-center`}
          >
            <span
              className={`rounded-full ${bgColorChange(
                props.touched,
                props.errors,
                props.values
              )}  w-3 h-3 m-auto shadow absolute`}
            />
            <span className="pl-5 text-xs">
              {errorsChange(props.touched, props.errors, props.values)}
            </span>
          </small>
        ) : (
          ""
        )}
      </div>
      <div className="flex w-4/6">{props.children}</div>
    </div>
  );
};
