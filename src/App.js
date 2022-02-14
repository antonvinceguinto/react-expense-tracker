import Expenses from './components/expenses/Expenses'
import NewExpense from './components/create-expense/NewExpense'
import { useEffect, useState } from 'react'

const App = () => {
	const [ expenses, setExpenses ] = useState([])

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [ expense, ...prevExpenses ]
		})
	}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
