import React from "react";
import "./Counter.css";

const root = document.getElementById("root");

function MyButton({ text, onClick, className }) {
    return (
      <button onClick={onClick} className={className}>
        {text}
      </button>
    );
  }

  function MyCounter({ counter }) {
    return <span>{counter}</span>;
  }

  function HomePage() {
    const [counter, setCounter] = React.useState(0);

    function increment() {
        if (counter < 10) {
            setCounter(counter + 1);
        }
    }

    function decrement() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    function reset() {
      setCounter(0);
    }

    return (
      <div>
        <MyButton text="-" onClick={decrement} />
        <MyCounter counter={counter} />
        <MyButton text="+" onClick={increment} />
        <MyButton text="Reset!" onClick={reset} className="reset" />
      </div>
    );
  }

  root.render(<HomePage />);