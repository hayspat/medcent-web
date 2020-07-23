import React from "react";
import { useSpring, animated } from "react-spring";

export const CardWrapper = (props: {
  classes?: string;
  children?: React.ReactNode;
}) => {
  const CardTransition = useSpring({
    from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: { mass: 1, tension: 300, friction: 40 },
    delay: 200,
  });
  return (
    <animated.div
      style={CardTransition}
      className={`${
        props.classes
          ? props.classes
          : "w-card bg-white w-full rounded-lg flex shadow-base mb-4"
      }`}
    >
      {props.children}
    </animated.div>
  );
};

export const ServiceHeaderWrapper = (props: { children: React.ReactNode }) => {
  const CardTransition = useSpring({
    from: { opacity: 0, transform: "translate3d(-10%,0,0)" },
    to: { opacity: 1, transform: "translate3d(0%,0,0)" },
    config: { mass: 1, tension: 300, friction: 40 },
    delay: 200,
  });
  return (
    <animated.div
      style={CardTransition}
      className={`w-card bg-white w-full rounded-tl-lg flex sticky top-0 z-40 shadow-table`}
    >
      <div className="flex items-center w-full h-16 px-4">{props.children}</div>
    </animated.div>
  );
};
