import React, { ReactElement, HTMLAttributes } from 'react';
import submit from "../input-types/submit"
import { IStructureObject, genericObject, WhenArray } from '../types/types';

export type FormProps = {
  structure: {
    [key: string]: IStructureObject
  }
  state: genericObject
  onSubmit: Function
  onChange(e: any): void
}

const Form = ({ structure: formStruct, state, onSubmit, onChange }: FormProps): ReactElement => {
  const onInputChange = (e: any) => {
    onChange(e)
  }

  const getKey = (key: string, idx: number): string => `${key}--${idx}`

  const noComponent = (key: string) => <React.Fragment key={key} />

  const performWhenCheck = (when: WhenArray): boolean => {
    if (typeof when !== "undefined") {
      if (when.length >= 3) {
        const [key, operation, value] = when
        if (state[key]) {
          // eslint-disable-next-line no-eval
          if (!eval(`${state[key]} ${operation} ${value}`)) {
            return true
          }
        }
      }
    }

    return false
  }

  const renderStructure = (structure = formStruct) => {
    return Object.keys(structure).map((key, i) => {
      if (key === "submit") {
        return noComponent(getKey(key, i))
      }

      const {
        typeof: type,
        component: Component,
        default: defaultValue,
        name,
        when,
        ...props
      } = structure[key]


      if (typeof when !== "undefined" && performWhenCheck(when)) {
        return noComponent(getKey(key, i))
      }

      if (type === "fieldset") {
        // Render fieldset structure
        return noComponent(getKey(key, i))
      }

      if (!Component) {
        return noComponent(getKey(key, i))
      }

      if (type === "msg") {
        return <Component {...props} key={getKey(key, i)} />
      }

      return (
        <Component
          key={getKey(key, i)}
          value={state[key]}
          name={key}
          onChange={(e: any) => {
            onInputChange(e)
          }}
          {...props}
        />
      )
    })
  }

  const renderSubmit = () => {
    let props: HTMLAttributes<HTMLInputElement> = submit()

    return <input {...props} />
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(state)
    }}>
      {renderStructure()}
      {renderSubmit()}
    </form>
  )
}

export default Form
