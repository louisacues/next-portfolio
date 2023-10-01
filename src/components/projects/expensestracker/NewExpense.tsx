import React from 'react'

export default function NewExpense() {
  return (
    <form>
      <div className="mx-20 my-10 gap-2 rounded border bg-violet-400/20 p-3">
        <div className="flex">
          <div>
            <label className="">Title</label>
            <input className="rounded" type="text"></input>
          </div>

          <div>
            <label className="">Amount</label>
            <input
              className="rounded"
              type="number"
              min="0.01"
              step="0.01"
            ></input>
          </div>

          <div>
            <label className="">Date</label>
            <input
              className="rounded pl-1"
              type="date"
              min="2019-01-01"
              max="2023-12-31"
            ></input>
          </div>
        </div>
        <div className="text-center">
          <button
            className=" m-3 rounded border bg-violet-400 px-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}
