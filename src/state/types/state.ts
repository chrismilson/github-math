export interface Todo {
  /** The id of the todo. */
  id: number,
  /** The text that the todo will display. */
  text: string
  /** Whether the todo has been completed yet. */
  completed: boolean
}

export enum VisibilityFilter {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE'
}

/**
 * This is the shape of the entire app state object.
 */
export interface TodoApp {
  readonly todos: Todo[]
  readonly visibilityFilter: VisibilityFilter
}