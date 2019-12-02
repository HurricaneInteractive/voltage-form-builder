import Textarea from "../components/textarea"
import { InputWithValue } from "../types/types"

const text = (props: InputWithValue = {}) => {
  return {
    typeof: 'text',
    component: Textarea,
    default: props.value || "",

    ...props
  }
}

export default text
