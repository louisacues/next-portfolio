'use client'
import React, { useState, useEffect } from 'react'

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState<string>('')

  useEffect(() => {
    // This will be called when the component mounts
    window.addEventListener('keydown', handleKeyPress)

    // This will be called when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [displayValue])

  const handleKeyPress = (event: KeyboardEvent) => {
    const key = event.key
    if ('0123456789.'.includes(key)) {
      setDisplayValue((prev) => prev + key)
    } else if (key === 'Enter' || key === '=') {
      handleButtonClick('=')
    } else if (['+', '-', '*', '/'].includes(key)) {
      setDisplayValue((prev) => prev + key)
    } else if (key === 'Backspace') {
      handleButtonClick('C')
    }
    // ... add other key conditions if necessary
  }

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setDisplayValue(eval(displayValue).toString())
      } catch (error) {
        setDisplayValue('Error')
      }
    } else if (value === 'C') {
      setDisplayValue('')
    } else {
      setDisplayValue(displayValue + value)
    }
  }

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
    'C',
  ]
  return (
    <div className="mx-auto my-8 w-64 rounded border border-blue-600/20 p-4 text-center drop-shadow-2xl">
      <input
        type="text"
        className="mb-2 w-full rounded border border-blue-600/20 p-2 text-lg"
        value={displayValue}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        {buttons.map((button) => (
          <button
            className="cursor-pointer rounded bg-blue-500 p-2 text-lg text-white"
            key={button}
            onClick={() => handleButtonClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  )
}
