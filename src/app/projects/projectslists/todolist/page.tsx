'use client'
import React, { useState } from 'react'

export default function Todolist() {
  const [list, setList] = useState('')
  const [lists, setLists] = useState<string[]>([])

  function handleOnClick() {
    setLists([...lists, list])
  }

  function handleDeleteButton(index: number) {
    const newlists = lists.filter((_, i) => i !== index)
    setLists(newlists)
  }

  return (
    <div className="md:m-30 flex h-screen flex-col items-center border border-slate-500 p-10 sm:m-20 lg:mx-60">
      <div className="flex w-full items-center md:w-3/4 lg:w-1/2">
        <input
          value={list}
          onChange={(event) => setList(event.target.value)}
          className="mr-2 w-full border border-slate-500 text-xs sm:w-3/4 md:w-3/5 lg:w-2/3"
        />
        <button
          onClick={handleOnClick}
          className="whitespace-nowrap rounded border border-slate-500 bg-transparent p-2 text-[10px] sm:p-1"
        >
          Click to Add
        </button>
      </div>
      <div className="my-4 w-full md:w-3/4 lg:w-1/2">
        {lists.map((list, index) => (
          <div key={index} className="flex justify-between">
            <div>{list}</div>
            <button onClick={() => handleDeleteButton(index)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
