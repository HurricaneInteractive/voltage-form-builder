# voltage-form-builder (WIP)

> This project is still a **WIP**, I am currently in the "exploring" and "hacking" phase.

The goal for this project is to make form building in react easy and less tedious. I want to build this project to have a easy to use API but still complex for advanced forms.

## Example API

```js
import React, { useState } from 'react'
import FormBuilder, { constructState, string } from 'voltage-form-builder'

const YourComponent = () => {
  const struct = {
    email: string({ type: "email" }),
    password: string({ type: "password" })
  }
  const [state, setState] = useState(constructState(struct))

  const onSubmit = () => { // do your thing }

  return (
    <FormBuilder
      structure={structure}
      state={state}
      setState={setState}
      events={{
        submit: onSubmit
      }}
    />
  )
}
```

## In the future

Eventually this project will move away from CRA to allow for packaging and publishing on npm.

## Interested?

If you are interested in knowing more about this project. Feel free to reach out and have a chat.
