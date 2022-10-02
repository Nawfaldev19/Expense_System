import "./App.css";
import React, { useState } from "react";
import ExpenseItem from "./Components/Expenses/ExpenseItem";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //#region C-P data recieve
  const addExpenseHandler = (expense) => {
    //expense data recieve
    // setExpenses([expense,...expenses]);//bad way because of scedueling
    setExpenses((prevExpense) => [expense, ...prevExpense]);//new prevExpense is this.state->hooked variable with present change 
    
  };
  //#endregion

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
