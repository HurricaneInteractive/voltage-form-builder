# voltage-form-builder (WIP)

> This project is still a **WIP**, I am currently in the "exploring" and "hacking" phase.

The goal for this project is to make form building in react easy and less tedious. I want to build this project to have a easy to use API but still complex for advanced forms.

## Example API

```js
const form = FormBuilder({
  structure: {
    name: string(),
    email: string({ type: "email", value: "abc@abc.com" }),
    age: number(),
    tooYoungMessage: msg("some HTML", { when: ['age', '<', 18] }),
    // optional
    submit: submit("Send email")
  },
  events: {
    submit: (state) => {
      console.log("Submit Form", { state })
    },
    change: (state) => {
      console.log("On Change", { state })
    }
  },
})

// Within a components render method
<div className="form-wrapper">{ form.render() }</div>
```

## In the future

Eventually this project will move away from CRA to allow for packaging and publishing on npm.

## Interested?

If you are interested in knowing more about this project. Feel free to reach out and have a chat.
