import { VisibilityFilter } from './state'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export interface AddTodoAction {
  type: typeof ADD_TODO
  payload: {
    /** A unique identifier for the given action. */
    id: number
    /** The text of the todo */
    text: string
  }
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO,
  payload: {
    /** The id of the todo that is toggled */
    id: number
  }
}

export interface SetVisibilityFilterAction {
  type: typeof SET_VISIBILITY_FILTER,
  payload: {
    /** The type of the new filter to use */
    filter: VisibilityFilter
  }
}

export type Action =
  AddTodoAction |
  ToggleTodoAction |
  SetVisibilityFilterAction
