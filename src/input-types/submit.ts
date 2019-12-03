import { InputWithValue, IStructureObject } from "../types/types"

const submit = (props: InputWithValue = {}): IStructureObject => {
  return {
    typeof: 'submit',
    type: "submit",
    value: props.value || "Submit"
  }
}

export default submit
