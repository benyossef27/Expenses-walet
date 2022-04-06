import "./ExpenseItem.css";
import ExpensDate from "./ExpenseDate.js";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  return (
    <>
      <Card className="expense-item">
        <ExpensDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </>
  );
}
