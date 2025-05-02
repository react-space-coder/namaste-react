import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const err=useRouteError()
console.log(err)
  return (
    <div>
    <h1>OOP's</h1>
    <h2>SOmething went wrong</h2>
    <div>{err.status}:{err.statusText}</div>
    </div>
  )
}
