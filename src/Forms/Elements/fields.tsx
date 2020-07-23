import React from "react";
import { Field } from "formik";
import MaskedInput from "react-text-mask";
import { InputLayout } from "Forms/input-layout";
import { borderColorChange } from "Util/form-helpers";
import { InputTypes, FormikData } from "Util/types";

type PropTypes = {
  base: InputTypes;
};

const Fields = (props: PropTypes & FormikData) => {
  return (
    <InputLayout
      touched={props.touched}
      errors={props.errors}
      values={props.values}
      title={props.base.title}
      required={props.base.required}
    >
      {props.base.mask ? (
        <Field
          id={props.base.for}
          name={props.base.for}
          render={(props: any) => (
            <MaskedInput
              {...props}
              mask={props.base.masked}
              placeholder={props.base.placeholder}
              type={props.base.type ? props.base.type : "text"}
              className={`h-12 px-4 w-full rounded-lg border ${borderColorChange(
                props.touched,
                props.errors,
                props.values
              )} shadow-base focus:shadow-none focus:outline-none`}
            />
          )}
        />
      ) : (
        <Field
          id={props.base.for}
          type={props.base.type ? props.base.type : "text"}
          name={props.base.for}
          className={`h-12 px-4 w-full rounded-lg border ${borderColorChange(
            props.touched,
            props.errors,
            props.values
          )} shadow-base focus:shadow-none focus:outline-none`}
          placeholder={props.base.placeholder}
        />
      )}
    </InputLayout>
  );
};

export default Fields;
