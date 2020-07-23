import React from "react";
import { NavLink } from "react-router-dom";
import { mainLink } from "Util/links";

const SubLink = (props: { base: typeof mainLink[keyof typeof mainLink] }) => {
  return (
    <NavLink
      exact
      to={props.base.link}
      className="flex h-16 py-4 text-gray-900 bg-gray-100 border-b border-gray-200"
      activeClassName="bg-med-500 text-white"
    >
      <span className="block w-8 mx-4 my-auto">{props.base.icon}</span>
      <span className="flex items-center justify-center text-base leading-none">
        {props.base.title}
      </span>
    </NavLink>
  );
};

export default SubLink;
