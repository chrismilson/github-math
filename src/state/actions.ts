import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  AddTodoAction,
  ToggleTodoAction,
  SetVisibilityFilterAction
} from './types/actions'
import { VisibilityFilter } from './types/state'

let nextTodoId = 0

export function addTodo(text: string): AddTodoAction {
  const id = nextTodoId++
  return {
    type: ADD_TODO,
    payload: { text, id }
  }
}

export function toggleTodo(id: number): ToggleTodoAction {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  }
}

export function setVisibilityFilter(
  filter: VisibilityFilter
): SetVisibilityFilterAction {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { filter }
  }
}