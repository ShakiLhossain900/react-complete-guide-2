import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFIlter from "./ExpensesFIlter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFIlter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
     
   <ExpensesList items={filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
