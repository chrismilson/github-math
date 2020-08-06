import React from 'react'
import Todo from './Todo'
import { Todo as TodoType } from '../../state/types/state'
import './TodoList.css'

interface Props {
  todos: TodoType[]
  toggleTodo: (id: number) => void
}

const TodoList: React.FC<Props> = props => {
  const { todos, toggleTodo } = props

  return (
    <ul className="TodoList">
      {todos.map(todo => (
        <Todo key={todo.id} onClick={() => toggleTodo(todo.id)} {...todo} />
      ))}
    </ul>
  )
}

export default TodoList
