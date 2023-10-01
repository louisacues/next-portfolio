import ExpensesTracker from '@/components/projects/expensestracker/ExpensesTracker'
import NewExpense from '@/components/projects/expensestracker/NewExpense'
type ExpenseItem = {
  id: string
  date: Date
  amount: number
  title: string
}

type expensesType = ExpenseItem[]

export default function page() {
  const expenses: expensesType = [
    {
      id: 'e1',
      date: new Date(2021, 2, 20),
      amount: 297.67,
      title: 'Car Insurance',
    },
    {
      id: 'e2',
      date: new Date(2021, 3, 30),
      amount: 300.67,
      title: 'Gadget',
    },
    {
      id: 'e3',
      date: new Date(2020, 2, 28),
      amount: 500.67,
      title: 'Anything',
    },
    {
      id: 'e4',
      date: new Date(2021, 2, 28),
      amount: 297.67,
      title: 'Car Insurance',
    },
  ]

  return (
    <div>
      <div>
        <NewExpense />
      </div>
      <ExpensesTracker
        title={expenses[0].title}
        id={expenses[0].id}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpensesTracker
        title={expenses[1].title}
        id={expenses[1].id}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpensesTracker
        title={expenses[2].title}
        id={expenses[2].id}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  )
}
