import React, { useState } from "react";
import "./App.css";
import excludedIds from "./idData";
import Shipping from "./assets/shipping.svg";

function App() {
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  /*  const getExcludedProductMessage = (id) => {
    if (id === 'U13' || id === 'C50' || id === 'C51' || id === 'C53' || id === 'C54' || id === 'C55') {
      return <p>This product is current excluded from free shipping</p>
    }
    return <p>You qualify for free shipping!</p>
  } */

  //updated excluded function
  const getExcludedProductMessage = id => {
    // const exclude = ['U13', 'C50', 'C51', 'C53', 'C54', 'C55']

    let i = id.toUpperCase();
    if (excludedIds.includes(i)) {
      return (
        <p className="no">
          This product is currently excluded from free shipping :(
        </p>
      );
    }
    return <p className="yes">You qualify for free shipping!</p>;
  };

  //function call
  let display;
  display = getExcludedProductMessage(id);
  //show display on enter click
  const handleKeyDown = event => {
    if (event.key === "Enter") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="App">
      <div className="image_wrapper">
        <img src={Shipping} alt="shipping" />
      </div>
      <div className="text_wrapper">
        <div className="text_content">
          <h1>ID CHECK</h1>
          <p className="thin">
            Type your ID number and press enter to check for free shipping!
          </p>
          <input
            type="text"
            value={id}
            onChange={e => setId(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ID number"
          />
          {show ? <div>{display}</div> : null}
        </div>
      </div>
    </div>
  );
}

export default App;
