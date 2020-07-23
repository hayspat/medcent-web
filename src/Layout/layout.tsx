import React from "react";
import { useSpring, animated } from "react-spring";
import { history } from "Util/history";
import { Logo } from "Util/icons";

export const LeftLayout: React.FC = (props) => {
  const LeftTransition = useSpring({
    from: { opacity: 0, transform: "translate3d(-100%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: { mass: 1, tension: 300, friction: 40 },
    delay: 200,
  });
  return (
    <animated.div
      style={LeftTransition}
      className="fixed bottom-0 left-0 h-full bg-white w-left w-60 shadow-base"
    >
      <span
        className="flex w-full h-20 py-4 mx-auto border-b border-gray-200 cursor-pointer hover:bg-gray-100"
        onClick={() => history.push("/")}
      >
        {Logo}
      </span>
      {props.children}
    </animated.div>
  );
};
export const RightLayout: React.FC = (props) => {
  return (
    <div className="w-full overflow-auto w-right ml-60">
      <div className="container z-40 px-4 pt-4">{props.children}</div>
    </div>
  );
};
