import Input from "../components/input"
import { InputWithValue } from "../types/types"

const number = (props: InputWithValue = {}) => {
  let structure = {
    typeof: 'string',
    component: Input,
    default: props.value || 0,
    type: "number",

    ...props
  }

  return structure
}

export default number
