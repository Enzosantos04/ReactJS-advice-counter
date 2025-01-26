import { useState, useEffect } from "react";
import "./index.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount(count + 1);
  }

  useEffect(() => {
    getAdvice();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
      <div className="content">
        <p>{advice}</p>
        <button onClick={getAdvice}>Get New Advice</button>
        <Counter counter={count} />
      </div>
    </div>
  );
}

function Counter({ counter }) {
  return (
    <p>
      You Clicked <strong>{counter}</strong> Times
    </p>
  );
}
