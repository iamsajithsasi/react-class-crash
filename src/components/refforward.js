import React, { useState, useImperativeHandle } from "react";

const RefForward = React.forwardRef((props, ref) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };
  useImperativeHandle(ref, () => ({
    incrementCount: incrementCount,
  }));
  return <div>This is forwarded ref {count}</div>;
});

export default RefForward;

export const RefButton = React.forwardRef((props, ref) => {
  const buttonClicked = () => {
    window.alert("Im Clicked");
  };
  return (
    <button ref={ref} onClick={buttonClicked}>
      {props.children}
    </button>
  );
});
