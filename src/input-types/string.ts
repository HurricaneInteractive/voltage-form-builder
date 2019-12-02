import Input from "../components/input"
import { InputWithValue } from "../types/types"

const string = (props: InputWithValue = {}) => {
  let structure = {
    typeof: 'string',
    component: Input,
    default: props.value || "",
    type: "text",

    ...props
  }

  return structure
}

export default string
