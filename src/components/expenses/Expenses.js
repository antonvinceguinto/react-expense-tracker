import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../global/Card'
import ExpensesFilter from '../expense-filter/ExpensesFilter'
import { useState } from 'react'

const Expenses = (props) => {
	const [ filteredYear, setFilteredYear ] = useState('2022')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((e) => {
		return e.date.getFullYear().toString() === filteredYear
	})

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onFilter={filterChangeHandler} />
				{props.items.length <= 0 ? (
					<center>
						<br />
						<p style={{ color: 'white' }}>Welcome! Start adding your expenses🛒</p>
						<br />
					</center>
				) : (
					filteredExpenses.map((e) => (
						<ExpenseItem key={e.id} title={e.title} date={e.date} amount={e.amount} />
					))
				)}
			</Card>
		</div>
	)
}

export default Expenses
