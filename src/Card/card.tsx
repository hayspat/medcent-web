import React from "react";
import { CardWrapper } from "Card/card-wrapper";

type PropTypes = {
  base: { title: string; desc: string };
  children: React.ReactNode;
};

export const Card = (props: PropTypes) => {
  return (
    <CardWrapper>
      <div className="w-2/5 p-8 text-left rounded-l-lg">
        <h2 className="text-2xl font-bold">{props.base.title}</h2>
        <p className="text-base">{props.base.desc}</p>
      </div>
      <div className="w-3/5 p-8 text-left bg-gray-100 rounded-r-lg">
        {props.children}
      </div>
    </CardWrapper>
  );
};
