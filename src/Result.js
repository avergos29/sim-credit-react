import React from "react";

function Result({ data }) {
  function compute() {
    console.log(data);
    const txMens = data.rate / 100 / 12;
    const duration = data.duration * 12;
    const amount = data.price - data.amount;
    const result = (amount * txMens) / (1 - Math.pow(1 + txMens, -duration));
    return Math.round(result * 100) / 100;
  }

  return <div>{compute()}</div>;
}

export default Result;
