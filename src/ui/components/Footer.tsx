import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilter } from '../../state/types/state'

const Footer: React.FC = () => {
  return (
    <div className="Footer">
      <span>Show: </span>
      <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>Complete</FilterLink>
    </div>
  )
}

export default Footer
