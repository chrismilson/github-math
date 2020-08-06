import { connect } from 'react-redux'
import { TodoApp, VisibilityFilter } from '../../state/types/state'
import Link from '../components/Link'
import { setVisibilityFilter } from '../../state/actions'

type OwnProps = React.PropsWithChildren<{
  filter: VisibilityFilter
}>

export default connect(
  (state: TodoApp, ownProps: OwnProps) => ({
    active: ownProps.filter === state.visibilityFilter
  }),
  (dispatch, ownProps: OwnProps) => ({
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  })
)(Link)
