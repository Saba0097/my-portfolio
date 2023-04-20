import React from "react";

const FibonacciSeries = () => {
  console.log("FibonacciSeries component rendered");
  return (
    <div>
      <h1>Fibonacci Series</h1>
      <p>Here are the top 10 numbers from Fibonacci series:</p>
      <ul>
        {fibonacciSeries(10).map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <p>This is a test.</p> {/* add a test paragraph */}
    </div>
  );
};

const fibonacciSeries = (n) => {
  let a = 0;
  let b = 1;
  let series = [];
  for (let i = 0; i < n; i++) {
    let c = a + b;
    series.push(c);
    a = b;
    b = c;
  }
  return series;
};

export default FibonacciSeries;
