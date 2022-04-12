import React,{ useState} from "react";
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFIlter from "./ExpensesFIlter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  return (
    <Card className='expenses'>
      <ExpensesFIlter selected={filteredYear} onChangeFilter={filterChangeHandler} ></ExpensesFIlter>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
    </Card>
  );
};

export default Expenses;
