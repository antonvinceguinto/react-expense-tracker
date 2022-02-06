import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../global/Card';

const Expenses = (props) => {
	return (
		<Card className='expenses'>
			{props.items.map((e) => <ExpenseItem key={e.id} title={e.title} date={e.date} amount={e.amount} />)}
		</Card>
	)
}

export default Expenses
