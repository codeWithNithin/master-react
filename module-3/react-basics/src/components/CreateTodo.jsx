import { useState } from "react";

const CreateTodo = () => {
  // console.log(useState("")); // [value, fn]

  // const useStateArr = useState();
  // const value = useStateArr[0];
  // const setValue = useStateArr[1];

  const [count, setCount] = useState("");
  const [inputValue, setInputValue] = useState("");
  const tasks = ["a", "b", "c"];

  let task = 0;

  // const getTask = () => {
  //   return 4 * 2;
  // };

  const handleTask = () => {
    task++;
    // setCount(task + 1);
    setCount((prevCount) => prevCount + 1);
    console.log("task count:", task);
  };

  const onValueChange = (e) => {
    // e here is synthetic event that contains all details about the event
    setInputValue(e.target.value);
  };

  return (
    <>
      {/* to add js expressions, use {}, if conditions cant be added here. but ternary operations are allowed */}
      {/* <div>Create todo: {2 * 2}</div>4
      <div>
        {" "}
        {task} {getTask()}
      </div> */}

      <div> variable value: {task} </div>
      <div> state variable: {count} </div>

      <input type="text" onChange={onValueChange} value={inputValue} />

      <button onClick={handleTask}> click </button>

      {tasks.map((task) => (
        <div> {task} </div>
      ))}

      {tasks.map((task) => {
        return (
          <div>
            {" "}
            {task}
            <br />
          </div>
        );
      })}
    </>
  );
};

export default CreateTodo;
