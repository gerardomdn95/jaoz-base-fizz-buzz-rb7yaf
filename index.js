import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./style.css";

const App = () => {
  // Show a list that counts from 1 to 50 and based on the number of item print Fizz with a red background if it's a multiple of 3, Buzz wihth a blue background if it's a multiple of 5 and if multiple of both write FizzBuzz with a green background, if none of this applies just write none with no background.

  const onShow = i => {
    if (i % 5 === 0 && i % 3 === 0) {
      return (
        <div class="square nine">
          <h1>FizzBuzz</h1>
        </div>
      );
    } else if (i % 3 === 0) {
      return (
        <div class="square three">
          <h1>Fizz</h1>
        </div>
      );
    } else if (i % 5 === 0) {
      return (
        <div class="square six">
          <h1>Buzz</h1>
        </div>
      );
    } else {
      return <div class="square">{i}</div>;
    }
  };

  let array = [];

  for (let i = 1; i <= 50; i++) {
    array.push(i);
  }

  return (
    <div>
      <p>Start editing to see some magic happen :)</p>
      <div className="main-container">{array.map(e => onShow(e))}</div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
