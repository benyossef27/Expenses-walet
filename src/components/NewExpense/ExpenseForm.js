import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
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

  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHendler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" onChange={amountChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2022-01-01" onChange={dateEnterdHandler} />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
