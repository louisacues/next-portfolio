interface ExpensesTrackerProps {
  date: Date
}
export default function ExpenseDate({ date }: ExpensesTrackerProps) {
  const month = date.toLocaleString('en-US', { month: 'long' })
  const day = date.toLocaleString('en-US', { day: '2-digit' })
  const year = date.getFullYear()
  return (
    <>
      <div className="m-3 flex flex-col items-center rounded-lg border border-slate-50 bg-slate-800 px-8 py-5">
        <div className="font-bold">{month}</div>
        <div className="font-normal">{year}</div>
        <div className="mt-2 text-4xl font-semibold">{day}</div>
      </div>
    </>
  )
}
