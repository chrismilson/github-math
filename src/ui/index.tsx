import React from 'react'
import VisibleTodoList from './containers/VisibleTodoList'
import AddTodo from './containers/AddTodo'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="App">
      <h1>Shlappas Todo Template</h1>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}
