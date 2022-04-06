import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpensDate from "./ExpenseDate.js";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle("updated");
  }

  return (
    <>
      <Card className="expense-item">
        <ExpensDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </>
  );
}
