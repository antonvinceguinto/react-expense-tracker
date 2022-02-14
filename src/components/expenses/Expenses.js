import './Expenses.css'
import Card from '../global/Card'
import ExpensesFilter from '../expense-filter/ExpensesFilter'
import { useState } from 'react'
import Expenseslist from './ExpensesList'
import ExpensesChart from './ExpensesChart'

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
				<ExpensesChart expenses={filteredExpenses} />
				<Expenseslist items={filteredExpenses} />
			</Card>
		</div>
	)
}

export default Expenses
