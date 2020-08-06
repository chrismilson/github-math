import { connect } from 'react-redux'
import TextInput from '../components/TextInput'
import { addTodo } from '../../state/actions'

export default connect(
  () => ({ label: 'Add Todo:' }),
  dispatch => ({
    onSubmit: (text: string) => {
      if (text) dispatch(addTodo(text))
    }
  })
)(TextInput)
