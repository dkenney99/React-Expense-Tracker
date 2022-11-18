import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const props = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.lineItems[0].title}
        amount={props.lineItems[0].amount}
        date={props.lineItems[0].date}
      />
      <ExpenseItem
        title={props.lineItems[1].title}
        amount={props.lineItems[1].amount}
        date={props.lineItems[1].date}
      />
      <ExpenseItem
        title={props.lineItems[2].title}
        amount={props.lineItems[2].amount}
        date={props.lineItems[2].date}
      />
      <ExpenseItem
        title={props.lineItems[3].title}
        amount={props.lineItems[3].amount}
        date={props.lineItems[3].date}
      />
    </Card>
  );
};

export default props;
