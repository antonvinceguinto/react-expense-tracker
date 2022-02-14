import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../global/Card'

const ExpenseItem = (props) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate title={props.title} amount={props.amount} date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</Card>
	)
}

export default ExpenseItem
