import React, { useEffect, useState } from "react";
import { use } from "react";

const Sellers = () => {
  const [inputVal, setInputVal] = useState("");

  //   gets called on initial render and for every state changes
  useEffect(() => {
    console.log("Component mount !!!");
  });

  //   gets called on initial render
  useEffect(() => {}, []);

  return (
    <div>
      <h3>Admin Sellers Page</h3>
      <input
        type="text"
        name={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
    </div>
  );
};

export default Sellers;
