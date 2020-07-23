import React from "react";

type PropTypes = {
  title: string;
  children?: React.ReactNode;
};

export const OutputLayout = (props: PropTypes) => {
  return (
    <div className="flex mb-4">
      <div className="flex items-center w-2/6 max-h-full">
        <h5 className="text-lg font-bold leading-none">{`${props.title} :`}</h5>
      </div>
      <div className="flex w-4/6">{props.children}</div>
    </div>
  );
};
