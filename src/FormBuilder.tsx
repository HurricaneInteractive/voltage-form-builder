import React from "react"
import Form from "./components/form"
import { IFormBuilder } from "./types/types"

const FormBuilder = ({ structure, events, state, setState }: IFormBuilder) => {
  const onFormSubmit = () => {
    if (events.submit) {
      events.submit(state)
    }
  }

  const onInputChange = (e: any) => {
    const { target: { name, value } } = e

    setState((prevState: any) => ({
      ...prevState,
      [name]: value
    }));

    if (events.change) {
      events.change(state)
    }
  }

  return (
    <Form
      structure={structure}
      state={state}
      onSubmit={() => onFormSubmit()}
      onChange={(e: any) => onInputChange(e)}
    />
  )
}

export default FormBuilder
