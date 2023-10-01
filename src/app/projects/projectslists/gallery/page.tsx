'use client'
import React, { useState } from 'react'

const lists = [
  { label: 'Sample1', content: 'NUHDUIHUIDGU' },
  { label: 'samplel2', content: 'NIDNINIODNI' },
]

export default function Page() {
  const [sampleContent, setSampleContent] = useState(lists[0])
  return (
    <div>
      {lists.map((list) => (
        <button
          onClick={() => setSampleContent(sampleContent)}
          key={list.label}
        >
          {list.label}
        </button>
      ))}
    </div>
  )
}
