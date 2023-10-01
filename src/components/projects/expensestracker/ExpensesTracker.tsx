'use client'
import { useState } from 'react'
import ExpenseDate from './ExpenseDate'

interface ExpensesTrackerProps {
  title: string
  date: Date
  id: string
  amount: number
}

export default function ExpensesTracker({
  title,
  date,
  id,
  amount,
}: ExpensesTrackerProps) {
  const [newTitle, setNewTitle] = useState(title)
  function handleOnClick() {
    const titleSet = 'New Title'
    setNewTitle(titleSet)
    console.log(newTitle)
  }
  return (
    <div>
      <div className="mx-20 my-10 flex items-center justify-between rounded border px-1">
        {/* <div>{date.toISOString()}</div> */}
        <ExpenseDate date={date} />
        <h2 className=" text-lg">{newTitle}</h2>
        <div className="m-2 rounded-lg border bg-violet-950 p-2 text-white">
          ${amount}
        </div>
        <button onClick={handleOnClick}>Change Title</button>
      </div>
    </div>
  )
}
