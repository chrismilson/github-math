import reducer from './reducers'
import { createStore } from 'redux'
import { addTodo } from './actions'

const store = createStore(reducer)

store.dispatch(addTodo('Get Icon Assets'))
store.dispatch(addTodo('Implement UI with react'))
store.dispatch(addTodo('Implement state with redux'))

export default store
