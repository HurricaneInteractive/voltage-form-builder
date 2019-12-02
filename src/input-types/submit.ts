import { InputWithValue } from "../types/types"

const submit = (props: InputWithValue = {}) => {
  return {
    typeof: 'submit',
    type: "submit",
    value: props.value || "Submit"
  }
}

export default submit
