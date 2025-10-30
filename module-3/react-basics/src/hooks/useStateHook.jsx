import React from "react";

//  * dont use local variables to store value when u want to update the dom.
//  * always use state variable,
const useStateHook = () => {
  let a = "nithin";
  const [count, setCount] = React.useState(0);

  const changeName = () => {
    a = "Virat kohli";
  };

  const increment = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // //
    // setCount(count + 2);

    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1> Hello, {a} </h1>
      <button onClick={changeName}> click me </button>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default useStateHook;
