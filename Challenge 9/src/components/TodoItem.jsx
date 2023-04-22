import React from 'react'

export const TodoItem = ({ todo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span> {todo.description} </span>
        
    </li>
  )
}