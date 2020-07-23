import React from "react";
import { OutputLayout } from "Forms/Layout/output-layout";

type PropTypes = {
  base: { title: string };
  data: any;
};

export const FieldOutput = (props: PropTypes) => {
  return (
    <OutputLayout title={props.base.title}>
      <span
        className={`h-12 px-4 w-full rounded-lg border bg-gray-200 shadow-base items-center flex`}
      >
        {props.data}
      </span>
    </OutputLayout>
  );
};
