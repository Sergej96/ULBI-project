import { useState } from "react";
import classes from "./style.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => ++prev);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increment}>
        increment
      </button>
    </div>
  );
};

export default Counter;
