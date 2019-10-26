import React, { useState } from "react";
import "./App.css";
import Jumbotron from "./Jumbotron.js";
import Form from "./Form.js";
import Result from "./Result.js";

function App() {
  const [data, setData] = useState({
    price: 600000,
    amount: 300000,
    rate: 1.9,
    duration: 25
  });

  const handleFormChanged = values => setData(values);

  return (
    <div className="App">
      <Jumbotron />
      <Form data={data} onFormChanged={handleFormChanged} />
      <Result data={data}></Result>
    </div>
  );
}

export default App;
