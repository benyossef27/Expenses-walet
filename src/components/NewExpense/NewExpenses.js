import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHendler(enterdExpenseData) {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  }
  function startEditing() {
    setIsEditing(true);
  }
  function stopEditing() {
    setIsEditing(false);
  }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add new expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHendler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
}
