import React from "react";
import { NavLink } from "react-router-dom";
import { mainLink } from "Util/links";

const MainLink = (props: { base: typeof mainLink[keyof typeof mainLink] }) => {
  return (
    <NavLink
      exact
      to={props.base.link}
      className="block h-20 py-3 text-white bg-gray-900 border-b border-gray-800 hover:bg-gray-800"
      activeClassName="bg-med-500 text-white "
    >
      <span className="block w-8 mx-auto">{props.base.icon}</span>
      <span className="flex justify-center mt-1 text-base leading-none">
        {props.base.title}
      </span>
    </NavLink>
  );
};

export default MainLink;
