import React, { useEffect } from "react";

const useEffectHook = () => {
  const [count, setCount] = React.useState(0);

  // useeffect only gets called when the component get rendered.
  // this will run for every render

  // useLayoutEffect is called before the component is rendered.

  useEffect(() => {
    // 1. we can have api calls
    // 2. we can access dom elements, like document.body, and all.
    // 3. we can run timers
  });

  // this will run only once
  useEffect(() => {}, []);

  // this will run when the value of count changes
  useEffect(() => {}, [count]);

  useEffect(() => {
    const timerId = setInterval(() => {}, 1000);
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div>
      useEffectHook
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        click{" "}
      </button>
    </div>
  );
};

export default useEffectHook;
