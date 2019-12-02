import React from "react"
import Form from "./components/form"
import constructState from "./utils/construct-state"
import { IFormBuilder } from "./types/types"

const FormBuilder = ({ structure, events }: IFormBuilder) => {
  const [state, setState] = React.useState(constructState(structure))

  const onFormSubmit = () => {
    if (events.submit) {
      events.submit(state)
    }
  }

  const onInputChange = (e: any) => {
    const { target: { name, value } } = e

    setState(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (events.change) {
      events.change(state)
    }
  }

  return {
    render: () => (
      <Form
        structure={structure}
        state={state}
        onSubmit={() => onFormSubmit()}
        onChange={(e: any) => onInputChange(e)}
      />
    ),
    state
  }
}

export default FormBuilder
