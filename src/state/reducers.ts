import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  Action
} from './types/actions'
import {
  TodoApp, VisibilityFilter
} from './types/state'
import { combineReducers } from 'redux'

function todos(state: TodoApp['todos'] = [], action: Action): TodoApp['todos'] {
  switch (action.type) {
    case ADD_TODO:
      const { text, id } = action.payload
      return [
        ...state,
        { text, id, completed: false }
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(
  state: TodoApp['visibilityFilter'] = VisibilityFilter.SHOW_ALL,
  action: Action  
): VisibilityFilter {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default combineReducers({
  todos,
  visibilityFilter
})