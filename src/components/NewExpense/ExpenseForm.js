import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [enterdTitle, setEnterdTitle] = useState("");
  const [enterdAmount, setEnterdAmount] = useState("");
  const [enterdDate, setEnterdDate] = useState("");

  function titleChangeHendler(event) {
    setEnterdTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnterdAmount(event.target.value);
  }
  function dateEnterdHandler(event) {
    setEnterdDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enterdTitle,
      amount: +enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHendler}
            value={enterdTitle}
            placeholder={"Expense"}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={enterdAmount}
            placeholder={"Price"}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            onChange={dateEnterdHandler}
            value={enterdDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cencel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
